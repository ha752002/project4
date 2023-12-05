import Styles from "./Header.module.scss";
import clsx from "clsx";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../../assets/logo/logo.png";
import ButtonLogin from "../../../Button/ButtonLogin.jsx";
import {useNavigate} from "react-router-dom";
import ButtonRegister from "../../../Button/ButtonRegister.jsx";

function Header() {
  const menu = [
    {
      title: "Khách hàng cá nhân",
      content: [
        {
          title: " KHÁCH HÀNG CÁ NHÂN (Miền Bắc)",
          item: [
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "bảo hành Hà Nội",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              // position: "bảo hành Hà Nội",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              // position: "bảo hành Hà Nội",
              zalo: true,
            },
          ],
        },
        {
          title: " KHÁCH HÀNG CÁ NHÂN (Miền Nam)",
          item: [
            {
              phone: "18006321",
              staff: "",
              position: "Tổng đài miễn phí:",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "Zalo",
              zalo: true,
            },
          ],
        },
        {
          title: " TƯ VẤN CAMERA, THIẾT BỊ VĂN PHÒNG",
          item: [
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              // position: "bảo hành Hà Nội",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              // position: "bảo hành Hà Nội",
              zalo: true,
            },
          ],
        },
      ],
    },
    {
      title: "Khách hàng doanh nghiệp,game net",
      content: [
        {
          title: " KHÁCH HÀNG GAME NET - ICAFE",
          item: [
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "bảo hành Hà Nội",
              zalo: true,
            },
          ],
        },
        {
          title: "KHÁCH HÀNG ĐẠI LÝ (BÁN BUÔN)",
          item: [
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "bảo hành Hà Nội",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "bảo hành Hà Nội",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "bảo hành Hà Nội",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "bảo hành Hà Nội",
              zalo: true,
            },
            {
              phone: "0836668336",
              staff: "Mr.Tuấn Anh",
              position: "bảo hành Hà Nội",
              zalo: true,
            },
          ],
        },
      ],
    },
    { title: "" + "Promotion information" },
    {
      title: "Tin tức công nghệ",
    },
    {
      title: "Recruitment",
    },
  ];

  const categorys = [
    { name: " Laptop - Máy Tính Xách Tay 1" },
    { name: " Laptop - Máy Tính Xách Tay 2" },
    { name: " Laptop - Máy Tính Xách Tay 3" },
    { name: " Laptop - Máy Tính Xách Tay 4" },
    { name: " Laptop - Máy Tính Xách Tay 5" },
    { name: " Laptop - Máy Tính Xách Tay 6" },
    { name: " Laptop - Máy Tính Xách Tay 7" },
    { name: " Laptop - Máy Tính Xách Tay 8" },
  ];
  const navigate = useNavigate();
  const  handleCLickLogin = () => {
    navigate('/signIn')
  }

  const  handleCLickRegister = () => {
    navigate('/signUp')
  }


  return (
    <header className={clsx(Styles.header, Styles.text)}>
      <div className={clsx(Styles.header_menu)}>
        <div className={clsx(Styles.flex)}>
          <nav>
            <ul className={clsx(Styles.menu)}>
              {menu.map((menuItem, index) => (
                <li key={index} className={clsx(Styles.menuItem)}>
                  <div>{menuItem.title}</div>
                  {menuItem.content && (
                    <ul className={clsx(Styles.subMenu)}>
                      {menuItem.content.map((subMenuItem, subIndex) => (
                        <li key={subIndex} className={clsx()}>
                          <div>
                            <div className={clsx(Styles.item_number)}>
                              0{subIndex + 1}
                            </div>
                            {subMenuItem.title}
                          </div>
                          {subMenuItem.item && (
                            <ul className={clsx(Styles.subMenuItem)}>
                              {subMenuItem.item.map((item, itemIndex) => (
                                <li key={itemIndex} className={clsx()}>
                                  <span className={clsx(Styles.staff)}>
                                    {" "}
                                    {item.position}{" "}
                                  </span>

                                  <span className={clsx(Styles.phone)}>
                                    {" "}
                                    {item.phone}{" "}
                                  </span>
                                  <span className={clsx(Styles.staff)}>
                                    {" "}
                                    {item.staff}{" "}
                                  </span>
                                  {/* Add other item properties as needed */}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <ul className={clsx(Styles.register_login)}>
            <ButtonLogin onclick={handleCLickLogin} />
            <ButtonRegister onclick={handleCLickRegister}/>
          </ul>
        </div>
      </div>
      <div className={clsx(Styles.header_2)}>
        <div className={clsx(Styles.group_header_2)}>
          <a src="">
            <img src={logo} alt="" />
          </a>
          <div>
            <ul className={clsx(Styles.item_hot)}>
              <li>Ghế gaming</li>
              <li>Màn hình máy tính</li>
              <li>Laptop</li>
              <li>PC Gaming</li>
              <li>CPU</li>
              <li>Card màn hình</li>
            </ul>
            <div className={clsx(Styles.group_search)}>
              <div className={clsx(Styles.search_by_category)}>
                Tất cả danh mục
                <div className={clsx(Styles.item_category)}>
                  {categorys.map((category, index) => (
                    <span key={index}>{category.name}</span>
                  ))}
                </div>
              </div>
              <div className={clsx(Styles.search)}>
                <input type="text" placeholder="Nhập từ khóa tìm kiếm..." />
              </div>
              <div className={clsx(Styles.icon_search)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </div>
          </div>
          <div className={clsx(Styles.group_other)}>
            <div className={clsx(Styles.flex)}>
              <div>
                <div className={clsx(Styles.title)}> Hotline </div>
                <div className={clsx(Styles.content)}> 1899.6321 </div>
              </div>
              <div className={clsx(Styles.img)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
            </div>
            <div className={clsx(Styles.flex)}>
              <div>
                <div className={clsx(Styles.title)}> Xây dựng </div>
                <div className={clsx(Styles.content)}> Cấu hình PC </div>
              </div>
              <div className={clsx(Styles.img)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-pc-display"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z" />
                </svg>
              </div>
            </div>
            <div className={clsx(Styles.flex)}>
              <div>
                <div className={clsx(Styles.content)}> giỏ hàng </div>
              </div>
              <div className={clsx(Styles.img)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-bag-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                  />
                </svg>
                <span className={clsx(Styles.cart_count)}>02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
