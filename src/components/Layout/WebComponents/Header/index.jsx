import classNames from "classnames/bind";
import Styles from "./Header.module.scss";

import clsx from "clsx";


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
      title: "Promotion information",
    },
    {
      title: "Technology news",
    },
    {
      title: "Recruitment",
    }
  ];

  return (
    <header className={clsx(Styles.header, Styles.text)}>
      <div>
        <div>
        <nav>
        <ul className={clsx(Styles.menu)}>
          {menu.map((menuItem, index) => (
            <li key={index} className={clsx(Styles.menuItem)}>
              <div>{menuItem.title}</div>
              {menuItem.content && (
                <ul className={clsx(Styles.subMenu)}>
                  {menuItem.content.map((subMenuItem, subIndex) => (
                    <li key={subIndex} className={clsx(Styles.newSubMenuItemClass)}>
                      <div>{subMenuItem.title}</div>
                      {subMenuItem.item && (
                        <ul className={clsx(Styles.subMenuItem)}>
                          {subMenuItem.item.map((item, itemIndex) => (
                            <li key={itemIndex} className={clsx(Styles.newSubMenuItemClass)}>
                              <span>{item.phone}</span>
                              <span>{item.staff}</span>
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
        </div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
