import useSwr from "swr"
import { apiClient } from "../../services/API"
import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./HomePage.module.scss";

export default function MenuCategory(props) {

  const { data, isLoading, error } = useSwr('/category/getAll', (endpoint) => apiClient.get(endpoint).then(data => data))
  if (isLoading) {
    return <div>...loading</div>
  }
  if (data) {
    console.log(data);
    return (
      <div>
        <button>aaaaaa</button>
        <button>aaaaaa</button>
        {/* {renderSelectedItemPath()} */}
        <ul className={clsx(Styles.generalGenre)}>
          {data.data.map((data, index) => (
            <li key={index} >
              <div className={clsx(Styles.name)} >{data.name}</div>
              <div className={clsx(Styles.content)}>
                <ul className={clsx(Styles.genre, Styles.text_16)}>
                  {data.categories && data.categories.length > 0 ? (data.categories.map((categorie, categorieIndex) => (
                    <li key={categorieIndex}>
                      <div
                        className={clsx(Styles.title)}

                      >
                        {categorie.name}
                      </div>
                      <ul>
                        {categorie.categories && categorie.categories.length > 0 ? (categorie.categories.map((categorie, contentIndex) => (
                          <li key={contentIndex} className={clsx(Styles.showItem)}>
                            <div className={clsx(Styles.flex)}>
                              <div

                              >
                                {categorie.name}
                              </div>
                              {/* {content.items.length > 0 && <img src={dropdown} alt="" />} */}
                            </div>
                            {/* <ul className={clsx(Styles.items)}>
                              {content.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <p>{item.category}</p>
                                </li>
                              ))}
                            </ul> */}
                          </li>
                        )))
                          : (
                            <li></li>
                          )
                        }
                      </ul>
                    </li>

                  )))
                    : (
                      <li>No categories available</li>
                    )
                  }
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}