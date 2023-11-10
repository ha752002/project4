import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./HomePage.module.scss";

import dropdown from "@/assets/images/sidebar/ic_Chevron.svg";


export default function Home(props) {

  const datas = [
    {
      name: " Laptop - Máy Tính Xách Tay ",
      img: "",
      generalGenre: [
        {
          title: " Laptop Dell 123 ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: []
            },
            {
              category: " Laptop Dell Vostro ",
              items: []
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: []
            }
          ]
        },
        {
          title: " Laptop ASUS  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: []
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming "
                },
                {
                  category: " Laptop ASUS TUF Dash "
                },
              ]
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: []
            }
          ]
        }
      ],
    },
    {
      name: " Máy Tính Chơi Game ",
      img: "",
      generalGenre: [
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: []
        },
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: []
        },
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: []
        },
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: []
        },
        {
          title: " PC Gaming 10 - 20 Triệu  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: [ ]
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming "
                },
                {
                  category: " Laptop ASUS TUF Dash "
                },
              ]
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: []
            }
          ]
        }
      ],
    },
    {
      name: " Laptop - Máy Tính Xách Tay ",
      img: "",
      generalGenre: [
        {
          title: " Laptop Dell 123 ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: []
            },
            {
              category: " Laptop Dell Vostro ",
              items: []
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: []
            }
          ]
        },
        {
          title: " Laptop ASUS  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: []
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming "
                },
                {
                  category: " Laptop ASUS TUF Dash "
                },
              ]
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: []
            }
          ]
        }
      ],
    },
    {
      name: " Máy Tính Chơi Game ",
      img: "",
      generalGenre: [
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: []
        },
        {
          title: " PC Gaming 10 - 20 Triệu  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: []
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming "
                },
                {
                  category: " Laptop ASUS TUF Dash "
                },
              ]
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: [
              ]
            }
          ]
        }
      ],
    },

  ];

  return (
    <>
      <div className={clsx(Styles.home, Styles.text, Styles.flex)}>
        <div className={clsx(Styles.list_menu)}>
          <ul className={clsx(Styles.generalGenre)}>
            {datas.map((data, index) => (
              <li key={index}>
                <div>{data.name}</div>
                <div className={clsx(Styles.content)}>
                  <ul className={clsx(Styles.genre, Styles.text)}>

                    {data.generalGenre.map((genre, genreIndex) => (
                      <li key={genreIndex}>
                        <div className={clsx(Styles.title)} >{genre.title} </div>
                        <ul >

                          {genre.content.map((content, contentIndex) => (
                            <li key={contentIndex} className={clsx(Styles.showItem)}>
                              <div className={clsx(Styles.flex)}>
                                {content.category}
                                {content.items.length > 0 && <img src={dropdown} alt="" />}
                              </div>
                              <ul className={clsx(Styles.items,)}>

                                {content.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <p>{item.category}</p>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={clsx(Styles.grid_container)} >
            <div className={clsx(Styles.griditem)} >1</div>
            <div className={clsx(Styles.griditem)}>2</div>
            <div className={clsx(Styles.griditem)}>3</div>
            <div className={clsx(Styles.griditem)}>4</div>
            <div className={clsx(Styles.griditem)}>5</div>
            <div className={clsx(Styles.griditem)}>6</div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Home;
