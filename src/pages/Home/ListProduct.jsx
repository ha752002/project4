
import useSwr from "swr"
import { apiClient } from "../../services/API"
import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./HomePage.module.scss";
import cart from "../../assets/icon_svg/cart.svg";
import lap002 from "@/assets/home/product/lap002.jpg";


export default function ListProduct(props) {

  const { data, isLoading, error } = useSwr('/product/getAll', (endpoint) => apiClient.get(endpoint).then(data => data))
  if (isLoading) {
    return <div>...loading</div>
  }
  if (data) {
    console.log(data);
    return (
        <div className={clsx(Styles.group_product, Styles.flex)}>
        {data.data.map((product, index) => (
            <div key={index} className={clsx(Styles.product)}>
              <div className={clsx(Styles.hover_detail)}>
                <img src={lap002} alt="" />
                <div className={clsx(Styles.detail_product)}>
                  <div className={clsx(Styles.name_product)}>{product.title}</div>
                  <ul>
                    <li className={clsx(Styles.price_product)}>
                      price :{product.promotional}
                      {/* {formattedPrice.format(
                          product.price - (product.price * product.discount) / 100
                      )} */}
                    </li>
                    <li>
                      cost : <del>{product.cost}</del>
                    </li>
                    {/* <li>guarantee : {product.guarantee}</li> */}
                    <li>
                      status :
                      {product.status ? (
                          <span style={{ color: "green" }}>In Stock</span>
                      ) : (
                          <span style={{ color: "red" }}>Out of Stock</span>
                      )}
                    </li>
                  </ul>
                  {/* <div>
                    <div className={clsx(Styles.title_product)}>
                      product parameters
                    </div>
                    <ul className={clsx(Styles.parameter_product)}>
                      {product.productParameters.map((Parameter, index) => (
                          <li key={index}>+ {Parameter.parameters}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className={clsx(Styles.title_product)}>Promotions</div>
                    <div className={clsx(Styles.title_promotion_product)}>
                      {product.Promotion}
                    </div>
                    <ul className={clsx(Styles.promotions_product)}>
                      {product.Promotions.map((Promotions, index) => (
                          <li key={index}>
                            + {Promotions.Promotion}
                            <div className={clsx(Styles.promotion_package_product)}>
                              {Promotions.promotionPackage.map(
                                  (Promotions, index) => (
                                      <div key={index}>{Promotions.promotion}</div>
                                  )
                              )}
                            </div>
                          </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className={clsx(Styles.flex, Styles.information)}>
                <div className={clsx(Styles.flex, Styles.other_information)}>
                  <span>Evaluate: ?/5 </span>
                  <span className={clsx(Styles.flex)}>
                Code:<p>{product.productCode}</p>
              </span>
                </div>
                <span className={clsx(Styles.name_product)}>{product.title}</span>
                <span className={clsx(Styles.price_product)}>{product.promotional}
              {/* {formattedPrice.format(
                  product.price - (product.price * product.discount) / 100
              )} */}
            </span>
                <del>{product.cost}</del>
                <div>
                  {product.status ? (
                      <span style={{ color: "green" }}>In Stock</span>
                  ) : (
                      <span style={{ color: "red" }}>Out of Stock</span>
                  )}
                </div>
              </div>
              {/* <div className={clsx(Styles.discount_product)}>
                {product.discount}%
              </div> */}
              <div className={clsx(Styles.cart)}>
                <img
                    onClick={() => onAddtoCartHandler(products)}
                    src={cart}
                    alt=""
                    className={clsx(Styles.icon_white)}
                />
              </div>
            </div>
        ))}
      </div>
    );
  }

  
} 