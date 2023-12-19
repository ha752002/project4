import useSwr from "swr";
import { apiClient } from "../../services/API";
import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./HomePage.module.scss";

export default function MenuFilter(props) {
  //   const { data, isLoading, error } = useSwr('/category/getAll', (endpoint) => apiClient.get(endpoint).then(data => data))
  //   if (isLoading) {
  //     return <div>...loading</div>
  //   }
  const dataFilter = [
    {
      title: " HÃNG SẢN XUẤT",
      items: [
        { content: "Apple(21)" },
        { content: "ASUS(18)" },
        { content: "DELL(16)" },
        { content: "INTEL(11)" },
      ],
    },
    {
      title: "KHOẢNG GIÁ",
      items: [
        { content: " Dưới 20 triệu" },
        { content: " 20 triệu - 30 triệu (4)" },
        { content: " 30 triệu - 40 triệu (5)" },
        { content: " 40 triệu - 60 triệu (5)" },
      ],
    },
    {
      title: " Dung lượng RAM ",
      items: [
        { content: "16G" },
        { content: "24G" },
        { content: "32G" },
        { content: "8G" },
      ],
    },
    {
      title: "VGA TRANG BỊ",
      items: [
        { content: " NVIDIA RTX (13)" },
        { content: "  NVIDIA GTX (1)" },
        { content: "  Onboard (7)" },
      ],
    },
    {
      title: "LOẠI CASE",
      items: [{ content: " Case lắp ráp(21)" }],
    },
  ];

  const Filter = "";

  if (dataFilter) {
    // console.log(data);
    return (
      <div className={clsx(Styles.menu_filter)}>
        {dataFilter.map((category, index) => (
          <div key={index} className={clsx(Styles.group_filter)}>
            <div className={clsx(Styles.title_filter)}>{category.title}</div>
            <div className={clsx(Styles.item_filter)}>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className={clsx(Styles.filter)}>
                  <input type="checkbox" value={item.content} readOnly />
                  <label>{item.content}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
