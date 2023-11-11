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

  const ConveyorBelt = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true);
    const data = ["Item 1", "Item 2", "Item 3", "Item 4"];

    useEffect(() => {
      const interval = setInterval(() => {
        if (autoScroll) {
          setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 2000);

      return () => clearInterval(interval);
    }, [autoScroll, data.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
      setAutoScroll(false);
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
      setAutoScroll(false);
    };
  }

  return (
    <>
      <div className={clsx(Styles.home, Styles.text, Styles.flex ,Styles.center)}>
        <div className={clsx( Styles.flex , Styles.center )}>
          <div className={clsx(Styles.list_menu)}>
            <ul className={clsx(Styles.generalGenre)}>
              {datas.map((data, index) => (
                <li key={index}>
                  <div>{data.name}</div>
                  <div className={clsx(Styles.content)}>
                    <ul className={clsx(Styles.genre, Styles.text_16)}>

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
            <div className={clsx(Styles.grid_container,)} >
              <div className={clsx(Styles.griditem)} style={{ display: "flex", overflow: "hidden" }}>
                1
              </div>
              <div className={clsx(Styles.griditem)}>
                <div>
                  <img src="https://img.youtube.com/vi/XLKyi9fr6xg/hqdefault.jpg" />
                </div>
              </div>
              <div className={clsx(Styles.griditem)}>
                <div>
                  <img src="https://minhancomputercdn.com/media/banner/23_Mar86808f6800978cc520e5d1b24500383a.jpg" alt="" />

                </div>
              </div>
              <div className={clsx(Styles.griditem)}>
                <div>
                  <img border="0" src="https://minhancomputercdn.com/media/banner/03_Novdbc0b33d35957c674adf38e9446326ea.jpg" />

                </div>
              </div>
              <div className={clsx(Styles.griditem)}>
                <div>
                  <img border="0" src="https://minhancomputercdn.com/media/banner/25_Mayc9dd50be1b9af2aca10a24604af47d55.png" />

                </div>
              </div>
              <div className={clsx(Styles.griditem)}>
                <div>
                  <img border="0" src="https://minhancomputercdn.com/media/banner/21_Noved65093503c03b511522c0e2ab3ad2fb.jpg" />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// export default Home;
