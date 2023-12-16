import React, { useState } from "react";
import Styles from "./AddProduct.module.scss";
// import { DataCategory } from "./DataCategories.jsx";
import clsx from "clsx";

import useSwr from "swr"
import { apiClient } from "../../services/API"

const AddProductManagement = () => {

  const { data, isLoading, error } = useSwr('/category/getAll', (endpoint) => apiClient.get(endpoint).then(data => data))
  console.log(data);

  const [productData, setProductData] = useState({
    title: "",
    productCode: "",
    warrantyPeriod: 0,
    cost: 0,
    promotional: 0,
    video: "",
    specifications: [],
    categories: [],
  });

  const [selectedCategories, setSelectedCategories] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSpecificationChange = (index, e) => {
    const { name, value } = e.target;

    setProductData((prevData) => {
      const updatedSpecifications = [...prevData.specifications];
      updatedSpecifications[index] = {
        ...updatedSpecifications[index],
        [name]: value,
      };

      return {
        ...prevData,
        specifications: updatedSpecifications,
      };
    });
  };

  const handleCategoryToggle = (categoryId, categoryName) => {
    if (productData.categories.find((category) => category.id === categoryId)) {
      setProductData((prevProductData) => ({
        ...prevProductData,
        categories: prevProductData.categories.filter((category) => category.id !== categoryId),
      }));
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((category) => category.id !== categoryId)
      );
    } else {
      setProductData((prevProductData) => ({
        ...prevProductData,
        categories: [...prevProductData.categories, { id: categoryId }],
      }));
      setSelectedCategories((prevSelectedCategories) => [
        ...prevSelectedCategories,
        { id: categoryId, name: categoryName },
      ]);
    }
  };

  // const handlespecifications = (categoryId, categoryName) => {
  //   if (productData.categories.find((category) => category.id === categoryId)) {
  //     setProductData((prevProductData) => ({
  //       ...prevProductData,
  //       categories: prevProductData.categories.filter((category) => category.id !== categoryId),
  //     }));
      
  //   } else {
  //     setProductData((prevProductData) => ({
  //       ...prevProductData,
  //       categories: [...prevProductData.categories, { id: categoryId }],
  //     }))
  //   }
  // };

  const addSpecifications = () => {

  }

  console.log(productData.categories);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product Data:", productData);
  };

  const renderFormCategory = () => {
    if (isLoading) {
      return (<div className={clsx(Styles.other_information)}>
        .....Loading
      </div>)
    } else {
      return (
        <div className={clsx(Styles.other_information)}>
          <ul>
            {data.data.map((item) => (
              <li key={item.id}>
                {item.name && (
                  <>
                    <input
                      type="checkbox"
                      checked={productData.categories.find((selectedCategory) => selectedCategory.id === item.id)}
                      onChange={() => handleCategoryToggle(item.id, item.name)}
                    /> {item.name}
                  </>
                )}
                {item.categories && item.categories.length > 0 && (
                  <>
                    <ul>
                      {item.categories.map((category) => (
                        <li key={category.id}>
                          <input
                            type="checkbox"
                            checked={productData.categories.find((selectedCategory) => selectedCategory.id === category.id)}
                            onChange={() => handleCategoryToggle(category.id, category.name)}
                          /> {category.name}

                          {category.categories && category.categories.length > 0 && (
                            <>
                              <ul>
                                {category.categories.map((category, index) => (
                                  <li key={index}>
                                    <input
                                      type="checkbox"
                                      checked={productData.categories.find((selectedCategory) => selectedCategory.id === category.id)}
                                      onChange={() => handleCategoryToggle(category.id, category.name)}
                                    /> {category.name}

                                  </li>
                                ))}
                              </ul>
                            </>
                          )}

                        </li>
                      ))}
                    </ul>
                  </>
                )}

              </li>
            ))}
          </ul>
          <ul>
            {selectedCategories.map((category, index) => (
              <li key={index}>{category.name}</li>
            ))}
          </ul>
        </div>)
    }

  }

  return (
    <div className={clsx(Styles.add_product, Styles.text)}>
      <form onSubmit={handleSubmit} className={clsx(Styles.flex)}>
        {/* Các trường nhập liệu cho sản phẩm */}
        <div className={clsx(Styles.basic_information)}>
          <div className={clsx(Styles.title_form)}>Basic product information</div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Product Code:</label>
            <input
              type="text"
              name="productCode"
              value={productData.productCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>warranty period:</label>
            <input
              type="number"
              name="warrantyPeriod"
              value={productData.warrantyPeriod}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>cost:</label>
            <input
              type="number"
              name="cost"
              value={productData.cost}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>promotional:</label>
            <input
              type="number"
              name="promotional"
              value={productData.promotional}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>video :</label>
            <input
              type="text"
              name="video"
              value={productData.video}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ...Thêm các trường khác tương tự */}

        {/* Trường nhập liệu cho Specifications */}
        <div >
          <div className={clsx(Styles.other_information)}>
            {productData.specifications.map((specification, index) => (
              <div key={index}>
                <label>{`Specification ${index + 1} Name:`}</label>
                <input
                  type="text"
                  name={`specifications[${index}].name`}
                  value={specification.name}
                  onChange={(e) => handleSpecificationChange(index, e)}
                />

                <label>{`Specification ${index + 1} Content:`}</label>
                <input
                  type="text"
                  name={`specifications[${index}].content`}
                  value={specification.content}
                  onChange={(e) => handleSpecificationChange(index, e)}
                />
              </div>
            ))}
          </div>


          {/* Trường nhập liệu cho Categories */}
          {renderFormCategory()}
          <button type="submit">Submit</button>
        </div>


      </form>
    </div>
  );
};

export default AddProductManagement;