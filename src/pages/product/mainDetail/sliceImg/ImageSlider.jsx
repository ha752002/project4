import React, { useState } from "react";
import clsx from "clsx";
import Styles from "./ImageSlider.module.scss";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const imageList = [
    "https://minhancomputercdn.com/media/product/13701_lenovo_ideapad_3_14iau7_82rj001cvn_04.jpg",
    "https://minhancomputercdn.com/media/product/13701_lenovo_ideapad_3_14iau7_82rj001cvn_03.jpg",
    "https://minhancomputercdn.com/media/product/13701_lenovo_ideapad_3_14iau7_82rj001cvn_01.jpg",
  ];

  const handleThumbnailHover = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className={clsx(Styles["product__info-left"])}>
      <div className={clsx(Styles["product__info-img"])}>
        <a href="#">
          <img src={imageList[currentImage]} alt="Laptop" />
        </a>
      </div>
      <div className={clsx(Styles["product__info-galley"])}>
        <div className={clsx(Styles["galley-list"])}>
          {imageList.map((image, index) => (
            <a
              key={index}
              href="#"
              onMouseEnter={() => handleThumbnailHover(index)}
              className={clsx({ [Styles.active]: index === currentImage })}
            >
              <img src={image} alt="Laptop" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
