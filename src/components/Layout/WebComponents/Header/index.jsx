import classNames from "classnames/bind";
import Styles from "./Header.module.scss";

import clsx from "clsx";
import lock from "../../../../assets/icon_svg/lock.svg"
import unlock from "../../../../assets/icon_svg/unlock.svg"
import search from "../../../../assets/icon_svg/search.svg"
import pc from "../../../../assets/icon_svg/pc.svg"
import telephone from "../../../../assets/icon_svg/telephone.svg"
import cart from "../../../../assets/icon_svg/cart.svg"
import logo from "../../../../assets/logo/logo.png"


function Header() {

  const menu = [
    {
      title: "individual customers",
      content: [
        {
          title: " KHÁCH HÀNG CÁ NHÂN (Miền Bắc)",
          item: [
            {
              phone: "0897654321",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            },
            {
              phone: "0937588888",
              staff: "Mr.Hoang",
              // position: "bảo hành Hà Nội",
              zalo: true
            },
            {
              phone: "0937588888",
              staff: "Mr.Hoang",
              // position: "bảo hành Hà Nội",
              zalo: true
            }
          ]
        },
        {
          title: " KHÁCH HÀNG CÁ NHÂN (Miền Nam)",
          item: [
            {
              phone: "0937588888",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            }
          ]
        }
      ]
    },
    {
      title: "corporate customers, net games",
      content: [
        {
          title: " KHÁCH HÀNG GAME NET - ICAFE",
          item: [
            {
              phone: "0897654321",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            }
          ]
        },
        {
          title: "KHÁCH HÀNG ĐẠI LÝ (BÁN BUÔN)",
          item: [
            {
              phone: "0897654321",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            },
            {
              phone: "0897654321",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            },
            {
              phone: "0897654321",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            },
            {
              phone: "0897654321",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            },
            {
              phone: "0897654321",
              staff: "Mr.Hoang",
              position: "bảo hành Hà Nội",
              zalo: true
            }

          ]
        }
      ]
    },
    {
      title: "" +
          "Promotion information",
    },
    {
      title: "Technology news",
    },
    {
      title: "Recruitment",
    }
  ];

  const categorys = [
    { name: " Laptop - Máy Tính Xách Tay 1", },
    { name: " Laptop - Máy Tính Xách Tay 2", },
    { name: " Laptop - Máy Tính Xách Tay 3", },
    { name: " Laptop - Máy Tính Xách Tay 4", },
    { name: " Laptop - Máy Tính Xách Tay 5", },
    { name: " Laptop - Máy Tính Xách Tay 6", },
    { name: " Laptop - Máy Tính Xách Tay 7", },
    { name: " Laptop - Máy Tính Xách Tay 8", },

  ]
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
                                <li key={itemIndex} className={clsx(Styles.newSubMenuItemClass)}>
                                  <span className={clsx(Styles.phone)}>{item.phone}</span>
                                  <span className={clsx(Styles.staff)}> {item.staff}</span>
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
            <li> <img src={unlock} alt="" /> đăng nhập</li>
            <li> <img src={lock} alt="" /> đăng kí</li>
          </ul>
        </div>

      </div>
      <div className={clsx(Styles.header_2)}>
        <div className={clsx(Styles.group_header_2)}>
          <img src={logo} alt="" />
          <div >
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
                tất cả danh mục
                <div className={clsx(Styles.item_category)}>
                  {categorys.map((category, index) => (
                    <span>{category.name}</span>
                  ))}
                </div>
              </div>
              <div className={clsx(Styles.search)}>
                <input type="text" placeholder="Search" />
              </div>
              <div className={clsx(Styles.icon_search)}>
                <img src={search} alt="" />
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
                <img src={telephone} alt="" />
              </div>
            </div>
            <div className={clsx(Styles.flex)}>
              <div>
                <div className={clsx(Styles.title)}> Xây dựng </div>
                <div className={clsx(Styles.content)}> Cấu hình pc </div>
              </div>
              <div className={clsx(Styles.img)}>
                <img src={pc} alt="" />
              </div>
            </div>
            <div className={clsx(Styles.flex)}>
              <div>
                {/* <div className={clsx(Styles.title)}> Hotline </div> */}
                <div className={clsx(Styles.content)}> giỏ hàng </div>
              </div>
              <div className={clsx(Styles.img)}>
                <img src={cart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
