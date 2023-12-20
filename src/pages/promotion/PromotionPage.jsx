import React from "react";
import Styles from "./PromotionPage.module.scss";
import clsx from "clsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const PromotionPage = () => {
  const promotionList = [1];
  const navigate = useNavigate();
  return (
    <>
      {promotionList.map(() => {
        return (
          <section className={clsx(Styles.promotion)}>
            <div className={clsx(Styles.container)}>
              <div className={clsx(Styles.article__menu)}>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Tin Tức
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Tin tức công nghệ
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Máy tính chơi game
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Máy tính Workstation
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Review sản phẩm
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Máy tính văn phòng
                </a>
                <a
                  href="#"
                  className={clsx(Styles.current, Styles["article__menu-link"])}
                >
                  Tin khuyến mãi
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Tuyển dụng
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Dịch vụ IT văn phòng
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Dự án văn phòng
                </a>
                <a href="#" className={clsx(Styles["article__menu-link"])}>
                  Thông tin hoạt động
                </a>
              </div>
              <div className={clsx(Styles.box__article)}>
                <div className={clsx(Styles.box__left)}>
                  <div className={clsx(Styles.article__list)}>
                    <div className={clsx(Styles.article__title)}>
                      <h1>Tin khuyến mãi</h1>
                    </div>
                    <div className={clsx(Styles.article__item)}>
                      <a href="#" className={clsx(Styles.article__img)}>
                        <img
                          src="https://minhancomputercdn.com/media/news/735_chuong_trinh_khuyen_mai_ai_cong_nghe.png"
                          alt="img"
                        />
                      </a>
                      <div className={clsx(Styles.article__text)}>
                        <a href="#">
                          Chương trình khuyến mãi "AI PC – NHÂN RỘNG CÔNG NGHỆ
                          TRÍ TUỆ NHÂN TẠO "
                        </a>
                        <p className={clsx(Styles.article__time)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className={clsx(
                              Styles.bi,
                              Styles["bi-calendar-check"]
                            )}
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                          </svg>
                          <span>23-11-2023, 5:34 pm</span>
                        </p>
                        <p className={clsx(Styles.article__summary)}>
                          ASUS phối hợp cùng Minh An computer xin gửi tới Quý
                          khách hàng CTKM cho người dùng cuối “ AI PC – NHÂN
                          RỘNG CÔNG NGHỆ TRÍ TUỆ NHÂN TẠO ” nhận ngay quà tặng
                          ...{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={clsx(Styles.box__right)}>
                  <div className={clsx(Styles["box__right-news"])}>
                    <p className={clsx(Styles["box__right-title"])}>
                      Tin tức nổi bật
                    </p>
                    <div className={clsx(Styles["box__right-list"])}>
                      <a href="#" className={clsx(Styles["box__right-item"])}>
                        <span className={clsx(Styles["item-img"])}>
                          <img
                            src="https://minhancomputercdn.com/media/news/120_731_banner_web_sinh_nhat_minh_an_9_tuoi_nhan_qua_chat_1.png"
                            alt="img"
                          />
                        </span>
                        <span className={clsx(Styles["item-text"])}>
                          SINH NHẬT CHẤT - SALE NGÂY NGẤT
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default PromotionPage;
