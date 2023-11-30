import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./Rating.module.scss";
import clsx from "clsx";

const Rating = () => {
  const [rating, setRating] = useState(5);

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  const getReviewText = () => {
    switch (rating) {
      case 1:
        return "Không thích";
      case 2:
        return "Tạm được";
      case 3:
        return "Bình thường";
      case 4:
        return "Rất tốt";
      case 5:
        return "Quá tuyệt vời";
      default:
        return "Quá tuyệt vời";
    }
  };

  return (
    <div className={clsx(Styles["star-rank"])}>
      <span>Chọn đánh giá của bạn</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => handleClick(star)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className={clsx(Styles[star <= rating ? "star" : ""])}
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        </span>
      ))}
      <span className={clsx(Styles["star-rank-text"])}>{getReviewText()}</span>
    </div>
  );
};

export default Rating;
