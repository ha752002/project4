import React, { useRef, useState } from "react";
// import Styles from "./AddUser.module.scss";
import { useNavigate, useParams } from 'react-router-dom';

import Styles from "./AddProduct.module.scss";
import clsx from "clsx";

import useSwr from "swr"
import { apiClient } from "../../services/API"
export default function EditProductManagement() {
  const {id }= useParams()
  const { data, isLoading, error } = useSwr('/category/getAll', (endpoint) => apiClient.get(endpoint).then(data => data))
  console.log(data);
  const { data: productData, isLoading: isLoading2, error: error2 } = useSwr('product/get/' + id, (endpoint) => apiClient.get(endpoint).then(data => data.data))
  const formRef = useRef(null);
  
  if(productData){
    formRef.current = productData;
  }




  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    formRef.current = {
      ...formRef.current,
      [name]: value,
    };
  };

  const handleCategoryToggle = (categoryId, categoryName) => {
    if (productData?.categories?.some((category) => category.id === categoryId)) {
      formRef.current = {
        ...formRef.current,
        categories: formRef.current.categories.filter((category) => category.id !== categoryId),
      };
      // setSelectedCategories((prevSelectedCategories) =>
      //   prevSelectedCategories.filter((category) => category.id !== categoryId)
      // );
    } else {
      formRef.current = {
        ...formRef.current,
        categories: [...formRef.current.categories, { id: categoryId }],
      };
      // setSelectedCategories((prevSelectedCategories) => [
      //   ...prevSelectedCategories,
      //   { id: categoryId, name: categoryName },
      // ]);
    }
    console.log(productData?.categories);
  };

  const handleSpecificationsChange = (index, type, value) => {
    const updatedSpecifications = [...productData.specifications];

    updatedSpecifications[index] = {
      ...updatedSpecifications[index],
      [type]: value,
    };

    // Cập nhật state với mảng specifications mới
    formRef.current = {
      ...formRef.current,
      specifications: updatedSpecifications,
    };
  };

  const addSpecifications = () => {
    const newSpec = {
      name: `Title ${productData.specifications.length + 1}`,
      content: `Content ${productData.specifications.length + 1}`
    };

    // Cập nhật mảng specifications trong productData
    formRef.current = {
      ...formRef.current,
      specifications: [...formRef.current.specifications, newSpec],
    };
  };

  // console.log(productData.categories);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.put('/product/update/' + id, formRef.current);
      if (response.ok) {
        console.log('Product created successfully!');
      } else {
        console.error('Failed to create product:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    console.log("Submitted Product Data:", formRef.current);
    // navigate('/admin/list-products');
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
            {data?.data?.map((item) => (
              <li key={item.id}>
                {item.name && (
                  <>
                    <input
                      type="checkbox"
                      checked={productData?.categories?.find((selectedCategory) => selectedCategory?.id === item.id)}
                      onChange={() => handleCategoryToggle(item.id, item.name)}
                    /> {item.name}
                  </>
                )}
                {item.categories && item.categories.length > 0 && (
                  <>
                    <ul>
                      {item?.categories?.map((category) => (
                        <li key={category.id}>
                          <input
                            type="checkbox"
                            checked={productData.categories?.find((selectedCategory) => selectedCategory?.id === category.id)}
                            onChange={() => handleCategoryToggle(category.id, category.name)}
                          /> {category.name}

                          {category.categories && category.categories.length > 0 && (
                            <>
                              <ul>
                                {category.categories.map((category, index) => (
                                  <li key={index}>
                                    <input
                                      type="checkbox"
                                      checked={productData.categories?.find((selectedCategory) => selectedCategory?.id === category.id)}
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

        </div>)
    }

  }

  const renderFormSpecifications = () => {
    return (
      <div className={clsx(Styles.other_information)}>
        <table>
          <tr>
            <th>title</th>
            <th>content</th>
          </tr>
          {productData?.specifications?.map((specification, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name={`title_${index}`}
                  placeholder={specification.name}

                  onChange={(e) => handleSpecificationsChange(index, "name", e.target.value)}
                /></td>
              <td>
                <input
                  type="text"
                  name={`content_${index}`}
                  placeholder={specification.content}
                  onChange={(e) => handleSpecificationsChange(index, "content", e.target.value)}
                /></td>
            </tr>
          ))}
        </table>

        <button type="button" onClick={addSpecifications}>Thêm Specifications</button>

      </div>
    )
  }

  // const renderDemo = ({productData}) => {
  //   return (
  //     <div>
  //       <h2>{productData.title}</h2>
  //       <p>Warranty Period: {productData.warrantyPeriod}</p>
  //       <p>Cost: {productData.cost}</p>
  //       <p>Promotional: {productData.promotional}</p>
  //       <p>Video: {productData.video}</p>

  //       <h3>Specifications:</h3>
  //       <ul>
  //         {productData.specifications.map((spec, index) => (
  //           <li key={index}>
  //             {spec.name}: {spec.content}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  return (
    <div className={clsx(Styles.add_product, Styles.text)}>
      <form onSubmit={handleSubmit} className={clsx(Styles.flex)}>
        {/* Các trường nhập liệu cho sản phẩm */}
        <div className={clsx(Styles.basic_information)}>
          <div className={clsx(Styles.title_form)}>Basic product information</div>
          <div className={clsx(Styles.input)}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              defaultValue={productData?.title}
              onChange={handleChange}
            />
          </div>

          <div className={clsx(Styles.input)}>
            <label>warranty period:</label>
            <input
              type="text"
              name="warrantyPeriod"
              defaultValue={productData?.warrantyPeriod}
              onChange={handleChange}
            />
          </div>
          <div className={clsx(Styles.input)}>
            <label>cost:</label>
            <input
              type="number"
              name="cost"
              defaultValue={productData?.cost}
              onChange={handleChange}
            />
          </div>
          <div className={clsx(Styles.input)}>
            <label>promotional:</label>
            <input
              type="number"
              name="promotional"
              defaultValue={productData?.promotional}
              onChange={handleChange}
            />
          </div>
          <div className={clsx(Styles.input)}>
            <label>video :</label>
            <input
              type="text"
              name="video"
              defaultValue={productData?.video}
              onChange={handleChange}
            />
          </div>
          <div className={clsx(Styles.demo)}>
            <div>demo</div>
            <ul className={clsx(Styles.selected_type)}>
              {selectedCategories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
            {/* {renderDemo()} */}
          </div>
        </div>


        <div >

          {renderFormSpecifications()}
          {renderFormCategory()}
          <button type="submit">Submit</button>
        </div>


      </form>
    </div>
  );
}
