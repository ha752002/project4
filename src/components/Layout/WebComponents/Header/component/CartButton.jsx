import React from "react";
import clsx from "clsx";
import Styles from "../Header.module.scss";
import { useSelector } from "react-redux";

const CartButton = () => {
  const { productList } = useSelector((state) => state.cart);

  const getAmount = () => {
    return productList.reduce((result, product) => {
      return result + product.amount;
    }, 0);
  };

  return (
    <div className={clsx(Styles.flex)}>
      <div>
        <div className={clsx(Styles.content)}> giỏ hàng</div>
      </div>
      <div className={clsx(Styles.img)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-bag-heart"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
          />
        </svg>
        <span className={clsx(Styles.cart_count)}>{getAmount()}</span>
      </div>
    </div>
  );
};

export default CartButton;
