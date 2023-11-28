import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./MainDetail.module.scss";
import clsx from "clsx";
import ImageSlider from "./sliceImg/ImageSlider";
import Rating from "./rateStar/Rating";

export default function Main() {
  const [buttonText, setButtonText] = useState("Xem thêm");
  const handleClick = (e) => {
    e.preventDefault();
    if (buttonText === "Xem thêm") {
      setButtonText("Thu gọn");
    } else {
      setButtonText("Xem thêm");
    }
  };
  const [buttonForm, setButtonFrom] = useState("Gửi đánh giá của bạn");
  const handleClickForm = (e) => {
    e.preventDefault();
    if (buttonForm === "Gửi đánh giá của bạn") {
      setButtonFrom("Đóng lại !");
    } else {
      setButtonFrom("Gửi đánh giá của bạn");
    }
  };

  return (
    <div className={clsx(Styles.product)}>
      <div className={clsx(Styles.container)}>
        <section className={clsx(Styles.global)}>
          <div className={clsx(Styles.global__menu)}>
            <p className={clsx(Styles["global__menu-title"])}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={clsx(
                  Styles.bi,
                  Styles["bi_text_left"],
                  Styles["global__icon"]
                )}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              DANH MỤC SẢN PHẨM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={clsx(
                  Styles.bi,
                  Styles["bi_caret_right_fill"],
                  Styles["global__icon"]
                )}
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </p>
            <div className={clsx(Styles["global__menu-list"])}>
              <div className={clsx(Styles["global__menu-item"])}>
                <a href="#" className={clsx(Styles.cat)} target="_blank">
                  <span className={clsx(Styles["cat-thumb"])}></span>
                  <span className={clsx(Styles["cat-title"])}>
                    Laptop - Máy Tính Xách Tay
                  </span>
                </a>
                <div className={clsx(Styles["sub__menu-list"])}>
                  <div className={clsx(Styles["sub__cat-2"])}>
                    <a
                      href="#"
                      target="blank"
                      className={clsx(Styles["cat-2"])}
                    >
                      Laptop Dell
                    </a>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                  </div>
                  <div className={clsx(Styles["sub__cat-2"])}>
                    <a
                      href="#"
                      target="blank"
                      className={clsx(Styles["cat-2"])}
                    >
                      Laptop Dell
                    </a>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                  </div>
                  <div className={clsx(Styles["sub__cat-2"])}>
                    <a
                      href="#"
                      target="blank"
                      className={clsx(Styles["cat-2"])}
                    >
                      Laptop Dell
                    </a>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                  </div>
                  <div className={clsx(Styles["sub__cat-2"])}>
                    <a
                      href="#"
                      target="blank"
                      className={clsx(Styles["cat-2"])}
                    >
                      Laptop Dell
                    </a>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                    <div className={clsx(Styles["sub__cat-3"])}>
                      <a
                        href="#"
                        target="blank"
                        className={clsx(Styles["cat-3"])}
                      >
                        Laptop Dell XPS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(Styles.global__path)}>
            <ul>
              <li>
                <a href="#" className={clsx(Styles["global__path-title"])}>
                  <span>TRANG CHỦ</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className={clsx(
                      Styles.bi,
                      Styles["bi-chevron-right"],
                      Styles["path__icon"]
                    )}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className={clsx(Styles["global__path-title"])}>
                  <span>LAPTOP - MÁY TÍNH XÁCH TAY</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className={clsx(
                      Styles.bi,
                      Styles["bi-chevron-right"],
                      Styles["path__icon"]
                    )}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className={clsx(Styles["global__path-title"])}>
                  <span>LAPTOP LENOVO</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className={clsx(
                      Styles.bi,
                      Styles["bi-chevron-right"],
                      Styles["path__icon"]
                    )}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className={clsx(Styles["global__path-title"])}>
                  <span> LAPTOP LENOVO IDEAPAD</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className={clsx(
                      Styles.bi,
                      Styles["bi-chevron-right"],
                      Styles["path__icon"]
                    )}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className={clsx(Styles.product__info)}>
          <div className={clsx(Styles["product__info-top"])}>
            <h1 className={clsx(Styles["product__info-name"])}>
              Laptop ASUS TUF Gaming F15 FX507ZU4-LP054W (i7-12700H | RAM 16GB |
              SSD 512GB | RTX 4050 6GB | 15.6-FHD | 144Hz | Win11 | Gray)
            </h1>
            <ImageSlider />
            <div className={clsx(Styles["product__info-middle"])}>
              <div className={clsx(Styles.clearfix)}>
                <p className={clsx(Styles["product__info-sku"])}>
                  Mã SP:
                  <span className={clsx(Styles["text-green"])}>LTLE145</span> |
                  Bảo hành:
                  <span className={clsx(Styles["text-green"])}>24 Tháng </span>|
                  Tình trạng:
                  <span className={clsx(Styles["text-green"])}>Còn hàng</span>
                </p>
              </div>
              <div className={clsx(Styles.evaluate)}>
                <p className={clsx(Styles.evaluate__text)}>
                  Lượt xem: 311 &nbsp;|&nbsp;
                  <span className={clsx(Styles.evaluate__star)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      fill="currentColor"
                      className={clsx(Styles[("bi", " bi-star-fill")])}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      fill="currentColor"
                      className={clsx(Styles[("bi", " bi-star-fill")])}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      fill="currentColor"
                      className={clsx(Styles[("bi", " bi-star-fill")])}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      fill="currentColor"
                      className={clsx(Styles[("bi", " bi-star-fill")])}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      fill="currentColor"
                      className={clsx(Styles[("bi", " bi-star-fill")])}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </span>
                  &nbsp;(0 đánh giá)
                </p>
              </div>
              <div className={clsx(Styles.price)}>
                <div className={clsx(Styles.price__old)}>
                  Giá gốc :
                  <span className={clsx(Styles["price__old-grey"])}>
                    27.590.000 đ
                  </span>
                </div>
                <div className={clsx(Styles.price__new)}>
                  Giá khuyến mại :
                  <span className={clsx(Styles["price__new-num"])}>
                    10.390.000 đ
                  </span>
                  <span className={clsx(Styles["price__new-disc"])}>
                    (Tiết kiệm: 17.200.000 đ)
                  </span>
                </div>
              </div>
              <div className={clsx(Styles.summary)}>
                <b className={clsx(Styles.summary__title)}>
                  Mô tả tóm tắt sản phẩm
                </b>
                <ul className={clsx(Styles.summary__list)}>
                  <li className={clsx(Styles.summary__item)}>
                    CPU: Intel Core i3-1215U 1.2GHz up to 4.4GHz 10MB
                  </li>
                  <li className={clsx(Styles.summary__item)}>
                    RAM: 8GB Onboard DDR4 3200MHz (1x SO-DIMM socket, up to 16GB
                    SDRAM)
                  </li>
                  <li className={clsx(Styles.summary__item)}>
                    Ổ cứng: 512GB SSD M.2 2242 PCIe 4.0x4 NVMe (1 slot)
                  </li>
                  <li className={clsx(Styles.summary__item)}>
                    VGA: Intel UHD Graphics
                  </li>
                  <li className={clsx(Styles.summary__item)}>
                    Màn hình: 14" FHD (1920x1080) TN, 250nits, Anti-glare
                  </li>
                </ul>
              </div>
              <div className={clsx(Styles.offer)}>
                <div className={clsx(Styles.offer__block)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={clsx(Styles.bi, Styles[" bi-gift"])}
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                  </svg>
                  <span className={clsx(Styles["offer__block-text"])}>
                    Quà tặng và Ưu đãi
                  </span>
                </div>
                <div className={clsx(Styles.offer__title)}>
                  <div className={clsx(Styles["offer__title-head"])}>
                    <strong>
                      QUÝ KHÁCH CÓ THỂ CHỌN 1 TRONG 2 GÓI KHUYẾN MẠI SAU
                    </strong>
                  </div>
                  <div className={clsx(Styles["offer__title-promotion"])}>
                    <strong>GÓI KHUYẾN MÃI 1:</strong>
                    <p>- Chuột Máy Tính Không Dây</p>
                    <p>- Bộ Vệ Sinh Laptop</p>
                    <p>- Pad Chuột Minh An</p>
                    <p>- Balo Laptop</p>
                    <p>
                      - Voucher Giảm Giá 10% Khi Mua Phụ Kiện (Tối Đa 100k):
                      Chuột, Bàn Phím, Tai Nghe, USB
                    </p>
                    <p>
                      - Gói Bảo Trì, Bảo Dưỡng Miễn Phí TRỌN ĐỜI Tại Minh An
                      Computer
                    </p>
                  </div>
                  <div className={clsx(Styles["offer__title-promotion"])}>
                    <strong>GÓI KHUYẾN MÃI 2:</strong>
                    <p>- Phần Mềm Diệt Virus ESET NOD32 (1 Năm)</p>
                    <p>- Balo Laptop</p>
                    <p>
                      - Voucher Giảm Giá 10% Khi Mua Phụ Kiện (Tối Đa 100k):
                      Chuột, Bàn Phím, Tai Nghe, USB
                    </p>
                    <p>
                      - Gói Bảo Trì, Bảo Dưỡng Miễn Phí TRỌN ĐỜI Tại Minh An
                      Computer
                    </p>
                  </div>
                </div>
              </div>
              <div className={clsx(Styles.button)}>
                <div className={clsx(Styles.button__quantity)}>
                  <p className={clsx(Styles["button__quantity-text"])}>
                    Số lượng:
                  </p>
                  <div className={clsx(Styles["button__quantity-number"])}>
                    <button className={clsx(Styles["button__quantity-click"])}>
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      className={clsx(Styles["button__quantity-input"])}
                    />
                    <button className={clsx(Styles["button__quantity-click"])}>
                      +
                    </button>
                  </div>
                </div>
                <div className={clsx(Styles.button__type)}>
                  <button className={clsx(Styles["button__type-buy"])}>
                    <b>ĐẶT MUA NGAY</b>
                    <p>Giao hàng tận nơi nhanh chóng, thuận tiện</p>
                  </button>
                  <div className={clsx(Styles["button__type-add"])}>
                    <button className={clsx(Styles["button__type-addCart"])}>
                      <b>THÊM VÀO GIỎ HÀNG</b>
                      <p>Thêm vào giỏ để chọn tiếp</p>
                    </button>
                    <button className={clsx(Styles["button__type-payInstall"])}>
                      <b>TRẢ GÓP CHỈ TỪ 0%</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className={clsx(Styles.support)}>
                <div className={clsx(Styles.support__phone)}>
                  <form className={clsx(Styles.support__form)}>
                    <input
                      type="text"
                      placeholder="Hãy để lại số điện thoại để được tư vấn"
                      className={clsx(Styles["support__form-input"])}
                    />
                    <button className={clsx(Styles["support__form-btn"])}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={clsx(
                          Styles.bi,
                          Styles["bi-arrow-right-circle"]
                        )}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
                <div className={clsx(Styles.support__call)}>
                  <div className={clsx(Styles["support__call-icon"])}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={clsx(Styles.bi, Styles["bi-telephone"])}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </div>
                  <p>
                    Hotline tư vấn <br />
                    <span className={clsx(Styles["support__call-number"])}>
                      1800.6321
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={clsx(Styles["product__info-right"])}>
              <div className={clsx(Styles.address)}>
                <p className={clsx(Styles.address__title)}>
                  SẢN PHẨM CÒN HÀNG TẠI
                </p>
                <div className={clsx(Styles.address__detail)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={clsx(Styles.bi, Styles["bi-house-fill"])}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                  </svg>
                  <p>91 Nguyễn Xiển, Thanh Xuân, HN</p>
                </div>
              </div>
              <div className={clsx(Styles.address)}>
                <p className={clsx(Styles.address__title)}>
                  CHÍNH SÁCH MUA HÀNG
                </p>
                <div className={clsx(Styles.address__policy)}>
                  <p>Bảo hành chính hãng tới 5 năm</p>
                  <p>Bảo hành tận nơi siêu tốc 3h</p>
                  <p>Đổi mới khi lỗi 30 ngày đầu</p>
                  <p>Trả góp lãi suất 0%</p>
                  <p>Giao hàng toàn quốc</p>
                </div>
              </div>
              <div className={clsx(Styles.address)}>
                <p className={clsx(Styles.address__title)}>HOTLINE HỖ TRỢ</p>
                <div className={clsx(Styles.address__hotline)}>
                  <ul className={clsx(Styles["address__hotline-list"])}>
                    <li className={clsx(Styles["address__hotline-item"])}>
                      Tổng đài tư vấn kinh doanh miễn phí:
                      <span className={clsx(Styles["hotline-bold"])}>
                        1800 6321
                      </span>
                    </li>
                    <li className={clsx(Styles["address__hotline-item"])}>
                      Kinh Doanh PC:
                      <span className={clsx(Styles["hotline-bold"])}>
                        0965.698.876
                      </span>
                    </li>
                    <li className={clsx(Styles["address__hotline-item"])}>
                      Tư Vấn Laptop:
                      <span className={clsx(Styles["hotline-bold"])}>
                        0964.812.876
                      </span>
                    </li>
                    <li className={clsx(Styles["address__hotline-item"])}>
                      Kỹ Thuật Hà Nội:
                      <span className={clsx(Styles["hotline-bold"])}>
                        0243.877.7777
                      </span>
                      - Nhánh
                      <span className={clsx(Styles["hotline-bold"])}>1</span>
                    </li>
                    <li className={clsx(Styles["address__hotline-item"])}>
                      Kỹ Thuật TPHCM:
                      <span className={clsx(Styles["hotline-bold"])}>
                        0243.877.7777
                      </span>
                      - Nhánh
                      <span className={clsx(Styles["hotline-bold"])}>2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(Styles["product__info-box"])}>
            <div className={clsx(Styles["box-left"])}>
              <div className={clsx(Styles["box-item"])}>
                <h2 className={clsx(Styles["box-title"])}>
                  Thông tin sản phẩm Laptop LENOVO IdeaPad 3 14IAU7 82RJ001CVN
                  (i3-1215U | 8GD4 | 512GSSD | 14.0FHD | Intel UHD Graphics |
                  Win 11 | XANH)
                </h2>
                <div className={clsx(Styles["box-information"])}>
                  <div
                    className={clsx(
                      Styles[
                        `box-${buttonText === "Xem thêm" ? "hidden" : "list"}`
                      ]
                    )}
                  >
                    <p className={clsx(Styles["box-desc"])}>
                      Với tông màu xanh làm chủ đạo
                      <span className={clsx(Styles["box-bold"])}>
                        Laptop LENOVO IdeaPad 3 14IAU7 82RJ001CVN
                      </span>
                      mang phong cách tối giản, phù hợp dùng trong công sở,
                      doanh nghiệp cho đến trường học. Laptop LENOVO IdeaPad 3
                      14IAU7 82RJ001CVN cũng được trang bị bộ vi xử lý Intel thế
                      hệ thứ 12, 8GB RAM và 512GB SSD để có đủ sức mạnh giúp bạn
                      giải quyết mọi vấn đề.
                    </p>
                    <h3 className={clsx(Styles["box-name"])}>
                      Bộ vi xử lý Intel trứ danh thế hệ thứ 12
                    </h3>
                    <img
                      src="https://minhancomputercdn.com/media/product/13701_lenovo_ideapad_3_14iau7_82rj001cvn_01.jpg"
                      alt="laptop"
                      className={clsx(Styles["box-image"])}
                    />
                    <p className={clsx(Styles["box-desc"])}>
                      Được ưu ái mang cho mình trang bị CPU trứ danh là bộ vi xử
                      lý Intel Core i3-1215U này mang nhiều ưu điểm, sở hữu tốc
                      độ xử lý công việc lí tưởng. Cụ thể là với 6 nhân 8 luồng,
                      trong đó 2 nhân P có tốc độ lên tới 4.40 GHz, LENOVO
                      IdeaPad 3 có thể đảm bảo cho IdeaPad vận hành mượt mà các
                      tác vụ yêu cầu hiệu năng cao, đáp ứng được nhu cầu văn
                      phòng phổ thông.
                    </p>
                    <h3 className={clsx(Styles["box-name"])}>
                      Nâng cao hiệu suất trong công việc
                    </h3>
                    <img
                      src="https://minhancomputercdn.com/media/lib/19-08-2023/lenovoideapad314iau782rj001cvn-4.jpg"
                      alt="laptop"
                      className={clsx(Styles["box-image"])}
                    />
                    <p className={clsx(Styles["box-desc"])}>
                      Bên cạnh vi xử lý xuất sắc, phải kể tới bộ nhớ
                      <span>
                        <a
                          className={clsx(Styles["box-link"])}
                          href="#"
                          target="blank"
                        >
                          RAM
                        </a>
                      </span>
                      , việc có sẵn 8GB DDR4 và 512GB SSD với tốc độ bus cao
                      3200MHz, LENOVO IdeaPad 3 có thể chạy đa nhiệm các chương
                      trình, thoải mái lưu trữ dữ liệu, đồng thời luôn đảm bảo
                      tốc độ cao trong từng tác vụ. Khi làm việc, người dùng có
                      thể mở nhiều tab làm việc hay thực hiện các thao tác
                      chuyển đổi qua lại các phần mềm mà không gặp phải tình
                      trạng giật lag khó chịu. Bộ nhớ lớn 512GB mang đến không
                      gian lưu trữ đủ dùng, đáp ứng nhu cầu làm việc và giải
                      trí, rút ngắn thời gian truy cập ứng dụng và khởi động
                      máy.
                    </p>
                    <h3 className={clsx(Styles["box-name"])}>
                      Màn hình Full HD
                    </h3>
                    <img
                      src="https://minhancomputercdn.com/media/lib/19-08-2023/lenovoideapad314iau782rj001cvn-6.jpg"
                      alt="laptop"
                      className={clsx(Styles["box-image"])}
                    />
                    <p className={clsx(Styles["box-desc"])}>
                      Kích thước màn hình 14 inch, viền màn hình siêu mỏng đem
                      tới góc nhìn rộng lớn, trải nghiệm chìm đắm trong khung
                      hình mãn nhãn hơn.
                    </p>
                    <p className={clsx(Styles["box-desc"])}>
                      Màn hình có độ phân giải FHD (1920x1080) còn được tích hợp
                      với công nghệ chống chói Anti-Glare giúp bạn có thể sử
                      dụng
                      <span>
                        <a
                          className={clsx(Styles["box-link"])}
                          href="#"
                          target="blank"
                        >
                          máy tính
                        </a>
                      </span>
                      trong điều kiện ánh sáng mạnh.
                    </p>
                    <h3 className={clsx(Styles["box-name"])}>
                      Dung lượng pin lớn
                    </h3>
                    <img
                      src="https://minhancomputercdn.com/media/lib/19-08-2023/lenovo-ideapad-3-14iau7-2_result.jpg"
                      alt="laptop"
                      className={clsx(Styles["box-image"])}
                    />
                    <p className={clsx(Styles["box-desc"])}>
                      <span className={clsx(Styles["box-bold"])}>
                        Laptop LENOVO IdeaPad 3 14IAU7 82RJ001CVN
                      </span>
                      sở hữu dung lượng pin lên đến 45Wh, thời gian sử dụng
                      laptop khoảng 6 giờ đồng hồ, thời gian xem video Full HD ở
                      độ sáng 150 nits lên đến 10 giờ. Đem lại thời gian sử dụng
                      cả ngày mà không cần nguồn sạc bên cạnh, giúp bạn tham gia
                      những buổi họp kéo dài hay cày các bộ phim bạn thích.
                    </p>
                  </div>
                  <button
                    className={clsx(Styles["box-btn"])}
                    onClick={handleClick}
                  >
                    {buttonText}
                    {buttonText === "Xem thêm" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        fill="currentColor"
                        className={clsx(Styles.bi, Styles["bi-chevron-down"])}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        fill="currentColor"
                        className={clsx(Styles.bi, Styles["bi-chevron-up"])}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className={clsx(Styles["box-comment"])}>
                <div className={clsx(Styles["product-review"])}>
                  <div className={clsx(Styles["product-title"])}>
                    Đánh giá, nhận xét sản phẩm
                  </div>
                  <div className={clsx(Styles["product-review-content"])}>
                    <div className={clsx(Styles["review-all-star"])}>
                      <div className={clsx(Styles["title-all-star"])}>
                        Sao trung bình
                      </div>
                      <div className={clsx(Styles["sum-all-star"])}>
                        <div className={clsx(Styles["sum-num"])}>0</div>
                        <div className={clsx(Styles["sum-star"])}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className={clsx(
                              Styles.bi,
                              Styles.star,
                              Styles[" bi-star-fill"]
                            )}
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className={clsx(Styles["review-rate-star"])}>
                      <ul>
                        <li>
                          <div className={clsx(Styles["num-star"])}>
                            5
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="11"
                              fill="currentColor"
                              className={clsx(
                                Styles.bi,
                                Styles.star,
                                Styles[" bi-star-fill"]
                              )}
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <div className={clsx(Styles.line)}></div>
                          <div className={clsx(Styles["total-review"])}>
                            0 Đánh giá
                          </div>
                        </li>
                        <li>
                          <div className={clsx(Styles["num-star"])}>
                            4
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="11"
                              fill="currentColor"
                              className={clsx(
                                Styles.bi,
                                Styles.star,
                                Styles[" bi-star-fill"]
                              )}
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <div className={clsx(Styles.line)}></div>
                          <div className={clsx(Styles["total-review"])}>
                            0 Đánh giá
                          </div>
                        </li>
                        <li>
                          <div className={clsx(Styles["num-star"])}>
                            3
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="11"
                              fill="currentColor"
                              className={clsx(
                                Styles.bi,
                                Styles.star,
                                Styles[" bi-star-fill"]
                              )}
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <div className={clsx(Styles.line)}></div>
                          <div className={clsx(Styles["total-review"])}>
                            0 Đánh giá
                          </div>
                        </li>
                        <li>
                          <div className={clsx(Styles["num-star"])}>
                            2
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="11"
                              fill="currentColor"
                              className={clsx(
                                Styles.bi,
                                Styles.star,
                                Styles[" bi-star-fill"]
                              )}
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <div className={clsx(Styles.line)}></div>
                          <div className={clsx(Styles["total-review"])}>
                            0 Đánh giá
                          </div>
                        </li>
                        <li>
                          <div className={clsx(Styles["num-star"])}>
                            1
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="11"
                              fill="currentColor"
                              className={clsx(
                                Styles.bi,
                                Styles.star,
                                Styles[" bi-star-fill"]
                              )}
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <div className={clsx(Styles.line)}></div>
                          <div className={clsx(Styles["total-review"])}>
                            0 Đánh giá
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className={clsx(Styles["review-customer"])}>
                      <button
                        className={clsx(Styles["review-customer-btn"])}
                        onClick={handleClickForm}
                      >
                        {buttonForm}
                      </button>
                    </div>
                    <div
                      className={clsx(
                        Styles[
                          buttonForm === "Đóng lại !"
                            ? "form-review"
                            : "form-none"
                        ]
                      )}
                    >
                      <form action="">
                        <Rating />
                        <div className={clsx(Styles["form-review-left"])}>
                          <textarea
                            cols="30"
                            rows="10"
                            className={clsx(Styles["form-textarea"])}
                          ></textarea>
                        </div>
                        <div className={clsx(Styles["form-review-right"])}>
                          <input
                            type="text"
                            id=""
                            placeholder="Họ tên*"
                            className={clsx(Styles["form-control"])}
                          />
                          <input
                            type="text"
                            id=""
                            placeholder="Số điện thoại*"
                            className={clsx(Styles["form-control"])}
                          />
                          <input
                            type="text"
                            id=""
                            placeholder="Email*"
                            className={clsx(Styles["form-control"])}
                          />
                          <button
                            type="submit"
                            className={clsx(
                              Styles["form-control"],
                              Styles["form-btn"]
                            )}
                          >
                            Gửi đánh giá
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className={clsx(Styles["product-comment"])}>
                  <div className={clsx(Styles["product-title"])}>
                    Hỏi và Đáp ( 0 Bình luận )
                  </div>
                  <div className={clsx(Styles["form-comment"])}>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Xin mời để lại câu hỏi, Minh An Computer sẽ trả lời trong 1h từ 8h15 - 21h mỗi ngày."
                    ></textarea>
                    <div className={clsx(Styles["send-comment"])}>
                      <p>Quy định đăng bình luận</p>
                      <button>Gửi</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(Styles["box-right"])}>
              <div className={clsx(Styles["box-right-item"])}>
                <h2 className={clsx(Styles["box-right-title"])}>
                  Thông số kỹ thuật
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
