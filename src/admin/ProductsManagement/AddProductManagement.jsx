import React, { useState } from "react";

const AddProductManagement = () => {
  const [productData, setProductData] = useState({
    title: "",
    productCode: "",
    warrantyPeriod: "",
    cost: 0,
    promotional: 0,
    video: "",
    specifications: [],
    categories: [{ id: "" }],
  });

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

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;

    setProductData((prevData) => ({
      ...prevData,
      categories: [{ id: value }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Đưa dữ liệu tạo sản phẩm về server hoặc thực hiện các tác vụ cần thiết
    console.log("Submitted Product Data:", productData);
  };

  return (
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          {/* Các trường nhập liệu cho sản phẩm */}
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

          {/* ...Thêm các trường khác tương tự */}

          {/* Trường nhập liệu cho Specifications */}
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

          {/* Trường nhập liệu cho Categories */}
          <div>
            <label>Category:</label>
            <input
                type="text"
                name="category"
                value={productData.categories[0].id}
                onChange={handleCategoryChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default AddProductManagement;