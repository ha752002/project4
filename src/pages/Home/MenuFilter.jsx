import useSwr from "swr"
import { apiClient } from "../../services/API"
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
            title: " hãng sản xuất ",
            items: [
                { content: "Apple" },
                { content: "ASUS" },
                { content: "dell" },
                { content: "INTEL" },
            ]
        },
        {
            title: "KHOẢNG GIÁ",
            items: [
                { content: "2 triệu - 3 triệu" },
                { content: "3 triệu - 6 triệu" },
                { content: "6 triệu - 12 triệu" },
                { content: "trên 12 triệu" },
            ]
        },
        {
            title: " Dung lượng RAM ",
            items: [
                { content: "16G" },
                { content: "24G" },
                { content: "32G" },
                { content: "8G" },
            ]
        },
    ]

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