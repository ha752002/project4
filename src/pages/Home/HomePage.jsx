import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./HomePage.module.scss";

import dropdown from "@/assets/images/sidebar/ic_Chevron.svg";
import hqdefault from "@/assets/home/hqdefault.jpg";
import qk001 from "@/assets/home/qk001.jpg";
import qk002 from "@/assets/home/qk002.jpg";
import qk003 from "@/assets/home/qk003.png";
import qk004 from "@/assets/home/qk004.jpg";
import qk005 from "@/assets/home/qk005.jpg";
import qk006 from "@/assets/home/qk006.jpg";
import qk007 from "@/assets/home/qk007.jpg";
import qk008 from "@/assets/home/qk008.png";
import lap001 from "@/assets/home/product/lap001.jpg";
import lap002 from "@/assets/home/product/lap002.jpg";

export default function Home(props) {
  const datas = [
    {
      name: " Laptop - Máy Tính Xách Tay aaaaaaaaaaaaaaaaa",
      img: "",
      generalGenre: [
        {
          title: " Laptop Dell 123 ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: [],
            },
            {
              category: " Laptop Dell Vostro ",
              items: [],
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: [],
            },
          ],
        },
        {
          title: " Laptop ASUS  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: [],
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming ",
                },
                {
                  category: " Laptop ASUS TUF Dash ",
                },
              ],
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: [],
            },
          ],
        },
      ],
    },
    {
      name: " Máy Tính Chơi Game ",
      img: "",
      generalGenre: [
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: [],
        },
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: [],
        },
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: [],
        },
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: [],
        },
        {
          title: " PC Gaming 10 - 20 Triệu  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: [],
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming ",
                },
                {
                  category: " Laptop ASUS TUF Dash ",
                },
              ],
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: [],
            },
          ],
        },
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
              items: [],
            },
            {
              category: " Laptop Dell Vostro ",
              items: [],
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: [],
            },
          ],
        },
        {
          title: " Laptop ASUS  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: [],
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming ",
                },
                {
                  category: " Laptop ASUS TUF Dash ",
                },
              ],
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: [],
            },
          ],
        },
      ],
    },
    {
      name: " Máy Tính Chơi Game ",
      img: "",
      generalGenre: [
        {
          title: " PC Gaming Dưới 10 Triệu  ",
          content: [],
        },
        {
          title: " PC Gaming 10 - 20 Triệu  ",
          content: [
            {
              category: " Laptop Dell XPS ",
              items: [],
            },
            {
              category: " Laptop ASUS TUF Series ",
              items: [
                {
                  category: " Laptop ASUS TUF Gaming ",
                },
                {
                  category: " Laptop ASUS TUF Dash ",
                },
              ],
            },
            {
              category: "  Laptop Dell Latitude  ",
              items: [],
            },
          ],
        },
      ],
    },
  ];

  const products = [
    {
      name: " PC Gaming Intel Core i5-12400F | RTX 3060 Ti | RAM 16GB ",
      img: lap001,
      price: 21456000,
      guarantee: "12 Tháng",
      Evaluate: 4.5,
      productCode: "PCGM09",
      discount: 23,
      status: true,
      hot: true,
      productParameters: [
        {
          parameters:
            "CPU: Intel Core i5-12400F (2.50GHz turbo 4.40GHz | 6 nhân 12 luồng | 18MB Cache | LGA 1700)",
        },
        {
          parameters:
            "Bo mạch chủ: Colorful BATTLE-AX B660M-HD DELUXE V20 (Socket 1700 | mATX | 2 Khe RAM DDR4)",
        },
        {
          parameters:
            "RAM: 2x Apacer TEX 8GB UNB (8GB x 1 | 3000MHz | CL16 | DDR4)",
        },
        {
          parameters:
            "VGA: Asus Dual GeForce RTX 3060 TI OC (DUAL-RTX3060TI-O8G-V2)",
        },
      ],
      Promotion:
        "Gói khuyến mãi : 3.318.000đ (Không quy đổi thành tiền mặt và không áp dụng cùng các chương trình khuyến mại khác)",
      Promotions: [
        {
          Promotion:
            "Bàn phím cơ TOMATO S220 + Chuột máy tính Galax Slider - 04 Black + Phần mềm diệt virus BKAV Pro + Tai nghe TOMATO SK29 Jack 7.1",
          promotionPackage: [],
        },
        {
          Promotion: "Bàn di chuột MINH AN 3mm (Kích thước 30x80)",
          promotionPackage: [],
        },
        { Promotion: "Gói bảo hành Vàng 6 tháng", promotionPackage: [] },
        {
          Promotion: "Gói vệ sinh máy miễn phí (Trọn đời máy)",
          promotionPackage: [],
        },
      ],
    },
    {
      name: " Bộ PC Intel Core i7-13700 | RTX 4070Ti | RAM 64GB ",
      img: lap002,
      price: 55508000,
      guarantee: "18 Tháng",
      Evaluate: 5,
      productCode: "0",
      discount: 15,
      status: true,
      hot: false,
      productParameters: [
        {
          parameters:
            "CPU: Intel Core i7-13700 (16 Nhân / 24 Luồng | Turbo 5.2 GHz | 30MB Cache | LGA1700)",
        },
        {
          parameters:
            "Bo mạch chủ: ASUS ProArt B760-Creator DDR4 (LGA 1700 | ATX | 4 khe RAM DDR4)",
        },
        {
          parameters:
            "RAM: Corsair Vengeance RS RGB 64GB (2x32GB | 3200MHz | C16 | DDR4 | CMG64GX4M2E3200C16)",
        },
        { parameters: " GALAX GeForce RTX 4070 Ti EX Gamer 12GB GDDR6X" },
      ],
      Promotion:
        "Gói khuyến mại : 4.288.000đ (Không quy đổi thành tiền mặt và không áp dụng cùng các chương trình khuyến mại khác)",
      Promotions: [
        {
          Promotion:
            "Bàn phím XIBERIA XS3100 + Chuột Gigabyte Aorus M4 + Tai nghe XIBERIA X20 Iron Grey",
          promotionPackage: [],
        },
        {
          Promotion: "GÓI KHUYẾN MÃI 1:",
          promotionPackage: [
            { promotion: "- Chuột Máy Tính Không Dây" },
            { promotion: "- Bộ Vệ Sinh Laptop" },
            { promotion: "- Pad Chuột Minh An " },
            { promotion: "- Balo Laptop " },
          ],
        },
        {
          Promotion: "GÓI KHUYẾN MÃI 2:",
          promotionPackage: [
            {
              promotion:
                "- Voucher Giảm Giá 10% Khi Mua Phụ Kiện (Tối Đa 100k): Chuột, Bàn Phím, Tai Nghe, USB",
            },
            {
              promotion:
                "- Gói Bảo Trì, Bảo Dưỡng Miễn Phí TRỌN ĐỜI Tại Minh An Computer",
            },
            { promotion: "- Phần Mềm Diệt Virus ESET NOD32 (1 Năm)" },
            {
              promotion:
                "- Voucher Giảm Giá 10% Khi Mua Phụ Kiện (Tối Đa 100k): Chuột, Bàn Phím, Tai Nghe, USB",
            },
          ],
        },
      ],
    },
    {
      name: " PC Gaming Intel Core i5-12400F | RTX 3060 Ti | RAM 16GB ",
      img: lap001,
      price: 21456000,
      guarantee: "12 Tháng",
      Evaluate: 4.5,
      productCode: "PCGM09",
      discount: 23,
      status: false,
      hot: false,
      productParameters: [
        {
          parameters:
            "CPU: Intel Core i5-12400F (2.50GHz turbo 4.40GHz | 6 nhân 12 luồng | 18MB Cache | LGA 1700)",
        },
        {
          parameters:
            "Bo mạch chủ: Colorful BATTLE-AX B660M-HD DELUXE V20 (Socket 1700 | mATX | 2 Khe RAM DDR4)",
        },
        {
          parameters:
            "RAM: 2x Apacer TEX 8GB UNB (8GB x 1 | 3000MHz | CL16 | DDR4)",
        },
        {
          parameters:
            "VGA: Asus Dual GeForce RTX 3060 TI OC (DUAL-RTX3060TI-O8G-V2)",
        },
      ],
      Promotion:
        "Gói khuyến mãi : 3.318.000đ (Không quy đổi thành tiền mặt và không áp dụng cùng các chương trình khuyến mại khác)",
      Promotions: [
        {
          Promotion:
            "Bàn phím cơ TOMATO S220 + Chuột máy tính Galax Slider - 04 Black + Phần mềm diệt virus BKAV Pro + Tai nghe TOMATO SK29 Jack 7.1",
          promotionPackage: [],
        },
        {
          Promotion: "Bàn di chuột MINH AN 3mm (Kích thước 30x80)",
          promotionPackage: [],
        },
        { Promotion: "Gói bảo hành Vàng 6 tháng", promotionPackage: [] },
        {
          Promotion: "Gói vệ sinh máy miễn phí (Trọn đời máy)",
          promotionPackage: [],
        },
      ],
    },
    {
      name: " Bộ PC Intel Core i7-13700 | RTX 4070Ti | RAM 64GB ",
      img: lap002,
      price: 55508000,
      guarantee: "18 Tháng",
      Evaluate: 5,
      productCode: "0",
      discount: 15,
      status: true,
      hot: false,
      productParameters: [
        {
          parameters:
            "CPU: Intel Core i7-13700 (16 Nhân / 24 Luồng | Turbo 5.2 GHz | 30MB Cache | LGA1700)",
        },
        {
          parameters:
            "Bo mạch chủ: ASUS ProArt B760-Creator DDR4 (LGA 1700 | ATX | 4 khe RAM DDR4)",
        },
        {
          parameters:
            "RAM: Corsair Vengeance RS RGB 64GB (2x32GB | 3200MHz | C16 | DDR4 | CMG64GX4M2E3200C16)",
        },
        { parameters: " GALAX GeForce RTX 4070 Ti EX Gamer 12GB GDDR6X" },
      ],
      Promotion:
        "Gói khuyến mại : 4.288.000đ (Không quy đổi thành tiền mặt và không áp dụng cùng các chương trình khuyến mại khác)",
      Promotions: [
        {
          Promotion:
            "Bàn phím XIBERIA XS3100 + Chuột Gigabyte Aorus M4 + Tai nghe XIBERIA X20 Iron Grey",
          promotionPackage: [],
        },
        {
          Promotion: "GÓI KHUYẾN MÃI 1:",
          promotionPackage: [
            { promotion: "- Chuột Máy Tính Không Dây" },
            { promotion: "- Bộ Vệ Sinh Laptop" },
            { promotion: "- Pad Chuột Minh An " },
            { promotion: "- Balo Laptop " },
          ],
        },
        {
          Promotion: "GÓI KHUYẾN MÃI 2:",
          promotionPackage: [
            {
              promotion:
                "- Voucher Giảm Giá 10% Khi Mua Phụ Kiện (Tối Đa 100k): Chuột, Bàn Phím, Tai Nghe, USB",
            },
            {
              promotion:
                "- Gói Bảo Trì, Bảo Dưỡng Miễn Phí TRỌN ĐỜI Tại Minh An Computer",
            },
            { promotion: "- Phần Mềm Diệt Virus ESET NOD32 (1 Năm)" },
            {
              promotion:
                "- Voucher Giảm Giá 10% Khi Mua Phụ Kiện (Tối Đa 100k): Chuột, Bàn Phím, Tai Nghe, USB",
            },
          ],
        },
      ],
    },
    {
      name: " PC Gaming Intel Core i5-12400F | RTX 3060 Ti | RAM 16GB ",
      img: lap001,
      price: 21456000,
      guarantee: "12 Tháng",
      Evaluate: 4.5,
      productCode: "PCGM09",
      discount: 23,
      status: false,
      hot: false,
      productParameters: [
        {
          parameters:
            "CPU: Intel Core i5-12400F (2.50GHz turbo 4.40GHz | 6 nhân 12 luồng | 18MB Cache | LGA 1700)",
        },
        {
          parameters:
            "Bo mạch chủ: Colorful BATTLE-AX B660M-HD DELUXE V20 (Socket 1700 | mATX | 2 Khe RAM DDR4)",
        },
        {
          parameters:
            "RAM: 2x Apacer TEX 8GB UNB (8GB x 1 | 3000MHz | CL16 | DDR4)",
        },
        {
          parameters:
            "VGA: Asus Dual GeForce RTX 3060 TI OC (DUAL-RTX3060TI-O8G-V2)",
        },
      ],
      Promotion:
        "Gói khuyến mãi : 3.318.000đ (Không quy đổi thành tiền mặt và không áp dụng cùng các chương trình khuyến mại khác)",
      Promotions: [
        {
          Promotion:
            "Bàn phím cơ TOMATO S220 + Chuột máy tính Galax Slider - 04 Black + Phần mềm diệt virus BKAV Pro + Tai nghe TOMATO SK29 Jack 7.1",
          promotionPackage: [],
        },
        {
          Promotion: "Bàn di chuột MINH AN 3mm (Kích thước 30x80)",
          promotionPackage: [],
        },
        { Promotion: "Gói bảo hành Vàng 6 tháng", promotionPackage: [] },
        {
          Promotion: "Gói vệ sinh máy miễn phí (Trọn đời máy)",
          promotionPackage: [],
        },
      ],
    },
  ];

  let [productPromotion, setProductPromotion] = useState([
    {
      title: "TOP PC GAMING HOT",
      select: true,
    },

    {
      title: "LAPTOP GIÁ SỐC",
      select: false,
    },
    {
      title: "MÀN HÌNH SALE OFF",
      select: false,
    },
    {
      title: "GAMING GEAR SALE OFF",
      select: false,
    },
    {
      title: "CAMERA SIÊU KHUYẾN MẠI",
      select: false,
    },
  ]);

  const toggleProductPromotion = (index) => {
    const updatedData = productPromotion.map((productPromotion) => {
      // Toggle the first-level item
      if (productPromotion == index) {
        productPromotion.select = !productPromotion.select;
        console.log(true + index);
      } else {
        productPromotion.select = false;
        console.log(false + index + productPromotion);
      }
      return productPromotion;
    });
    productPromotion = updatedData;
  };

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

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
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      setAutoScroll(false);
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
      setAutoScroll(false);
    };
  };

  const renderProduct = () => {
    return (
      <div className={clsx(Styles.group_product, Styles.flex)}>
        {products.map((product, index) => (
          <div key={index} className={clsx(Styles.product)}>
            <div className={clsx(Styles.hover_detail)}>
              <img src={product.img} alt="" />
              <div className={clsx(Styles.detail_product)}>
                <div className={clsx(Styles.name_product)}>{product.name}</div>
                <ul>
                  <li className={clsx(Styles.price_product)}>
                    price :{" "}
                    {formattedPrice.format(
                      product.price - (product.price * product.discount) / 100
                    )}
                  </li>
                  <li>
                    cost : <del>{formattedPrice.format(product.price)}</del>
                  </li>
                  <li>guarantee : {product.guarantee}</li>
                  <li>
                    status :{" "}
                    {product.status ? (
                      <span style={{ color: "green" }}>In Stock</span>
                    ) : (
                      <span style={{ color: "red" }}>Out of Stock</span>
                    )}
                  </li>
                </ul>
                <div>
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
                              <div>{Promotions.promotion}</div>
                            )
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={clsx(Styles.flex, Styles.information)}>
              <div className={clsx(Styles.flex, Styles.other_information)}>
                <span>Evaluate: {product.Evaluate}/5 </span>
                <span className={clsx(Styles.flex)}>
                  Code:<p>{product.productCode}</p>
                </span>
              </div>
              <span className={clsx(Styles.name_product)}>{product.name}</span>
              <span className={clsx(Styles.price_product)}>
                {formattedPrice.format(
                  product.price - (product.price * product.discount) / 100
                )}
              </span>
              <del>{formattedPrice.format(product.price)}</del>
              <div>
                {product.status ? (
                  <span style={{ color: "green" }}>In Stock</span>
                ) : (
                  <span style={{ color: "red" }}>Out of Stock</span>
                )}
              </div>
            </div>
            <div className={clsx(Styles.discount_product)}>
              {product.discount}%
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div
        className={clsx(Styles.home, Styles.text, Styles.flex, Styles.center)}
      >
        <div className={clsx(Styles.flex, Styles.center, Styles.layout)}>
          <div className={clsx(Styles.flex)}>
            <div className={clsx(Styles.list_menu)}>
              <ul className={clsx(Styles.generalGenre)}>
                {datas.map((data, index) => (
                  <li key={index}>
                    <div className={clsx(Styles.name)}>{data.name}</div>
                    <div className={clsx(Styles.content)}>
                      <ul className={clsx(Styles.genre, Styles.text_16)}>
                        {data.generalGenre.map((genre, genreIndex) => (
                          <li key={genreIndex}>
                            <div className={clsx(Styles.title)}>
                              {genre.title}{" "}
                            </div>
                            <ul>
                              {genre.content.map((content, contentIndex) => (
                                <li
                                  key={contentIndex}
                                  className={clsx(Styles.showItem)}
                                >
                                  <div className={clsx(Styles.flex)}>
                                    {content.category}
                                    {content.items.length > 0 && (
                                      <img src={dropdown} alt="" />
                                    )}
                                  </div>
                                  <ul className={clsx(Styles.items)}>
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
              <div className={clsx(Styles.group_advertisement)}>
                <div
                  className={clsx(
                    Styles.advertisement_big_item,
                    Styles.advertisement_item
                  )}
                  style={{ display: "flex", overflow: "hidden" }}
                >
                  <div>1</div>
                </div>
                <div className={clsx(Styles.advertisement_item)}>
                  <div>
                    <img src={hqdefault} />
                  </div>
                </div>
                <div className={clsx(Styles.advertisement_item)}>
                  <div>
                    <img src={qk001} alt="" />
                  </div>
                </div>
                <div className={clsx(Styles.advertisement_item)}>
                  <div>
                    <img src={qk002} alt="" />
                  </div>
                </div>
                <div className={clsx(Styles.advertisement_item)}>
                  <div>
                    <img src={qk003} alt="" />
                  </div>
                </div>
                <div className={clsx(Styles.advertisement_item)}>
                  <div>
                    <img src={qk004} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(Styles.flex)}>
            <div className={clsx(Styles.group_advertisement_02)}>
              <div className={clsx(Styles.advertisement_item)}>
                <div>
                  <img src={qk005} alt="" />
                </div>
              </div>
              <div className={clsx(Styles.advertisement_item)}>
                <div>
                  <img src={qk006} alt="" />
                </div>
              </div>
              <div className={clsx(Styles.advertisement_item)}>
                <div>
                  <img src={qk007} alt="" />
                </div>
              </div>
              <div className={clsx(Styles.advertisement_item)}>
                <div>
                  <img src={qk008} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(Styles.products, Styles.product_promotion)}>
            <ul className={clsx(Styles.title_product_promotion)}>
              {productPromotion.map((title, index) => (
                <li
                  key={index}
                  className={clsx({ [Styles.click_color]: title.select })}
                  onClick={() => toggleProductPromotion(index)}
                >
                  {title.title}
                </li>
              ))}
            </ul>

            <div className={clsx(Styles.background, Styles.flex)}>
              {renderProduct()}
            </div>

            {datas.map((data, index) => (
              <div className={clsx(Styles.flex, Styles.category_product)}>
                <div className={clsx(Styles.category)}>
                  <div className={clsx(Styles.title_category)}>
                    <div className={clsx(Styles.category_name)}>
                      {data.name}
                    </div>
                    <ul className={clsx(Styles.group_item_category)}>
                      {data.generalGenre
                        .slice(0, 3)
                        .map((generalGenre, index) => (
                          <li> {generalGenre.title}</li>
                        ))}

                      <li>see more</li>
                    </ul>
                  </div>
                  <div>{renderProduct()}</div>
                </div>
              </div>
            ))}

            <div className={clsx(Styles.flex)}></div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Home;
