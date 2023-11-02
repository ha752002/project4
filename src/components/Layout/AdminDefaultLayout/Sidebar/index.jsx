import React, { Component } from "react";
import Styles from "./Sidebar.module.scss";
import clsx from "clsx";
import mapImage from "../../../../assets/images/sidebar/map.svg";
import dropdown from "../../../../assets/images/sidebar/ic_Chevron.svg";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      titleSidebarData: [
        {
          name: "HOME",
          sidebarData: [
            {
              name: "Dashboard",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "/admin/dashboard",
              items: [],
            },
            // Add more items here
          ],
        },
        {
          name: "PAGE",
          sidebarData: [
            {
              name: "Users",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "User Profile",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/admin/users-profile",
                },
                {
                  name: "Add User",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/admin/add-users",
                },
                {
                  name: "User List",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/admin/list-users",
                },
              ],
            },
            {
              name: "Admin",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "Admin Role",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/admin/admin-role",
                },
              ],
            },
            {
              name: "Products",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "Add products",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/admin/add-products",
                },
                {
                  name: "List Products",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/admin/list-products",
                },

                // {
                //   name: "Edit products",
                //   img: "../../../assets/svg/bulk.svg",
                //   url: "/admin/edit-products",
                // },
                // {
                //   name: "Delete products",
                //   img: "../../../assets/svg/bulk.svg",
                //   url: "/admin/delete-products",
                // },
              ],
            },
            // Add more items here
          ],
        },
        {
          name: "ELEMENT",
          sidebarData: [
            {
              name: "Maps",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "Map",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/admin/map",
                },
              ],
            },
            // Add more items here
          ],
        },
      ],
    };
  }

  // toggleSidebar = () => {
  //   this.setState((prevState) => ({
  //     isSidebarOpen: !prevState.isSidebarOpen,
  //   }));
  // };

  toggleContent = (item) => {
    const { titleSidebarData } = this.state;
    const updatedData = titleSidebarData.map((titleSidebar) => {
      // Toggle the first-level item
      if (titleSidebar === item) {
        titleSidebar.showChildItem = !titleSidebar.showChildItem;
      } else {
        titleSidebar.showChildItem = false;
      }

      // Toggle the second-level items
      titleSidebar.sidebarData.forEach((secondLevelItem) => {
        if (secondLevelItem === item) {
          secondLevelItem.showChildItem = !secondLevelItem.showChildItem;
        } else {
          secondLevelItem.showChildItem = false;
        }
      });

      return titleSidebar;
    });

    this.setState({ titleSidebarData: updatedData });
  };

  render() {
    const { isSidebarOpen, titleSidebarData } = this.state;

    return (
      <div className={clsx(isSidebarOpen ? Styles.sidebar : Styles.hidden)}>
        <div
          className={clsx(
            Styles.main_logo,
            Styles.text,
            Styles.logo,
            Styles.logo_name
          )}
        >
          <img src="../../../assets/svg/Frame 453.svg" alt="" />
          Admin
          <div
            className={clsx(Styles.close_sidebar)}
            // onClick={this.toggleSidebar}
          >
            <img
              src="../../../../assets/images/sidebar/left_arrow.svg"
              alt=""
            />
          </div>
        </div>

        <div className={clsx(Styles.main, Styles.text)}>
          {titleSidebarData.map((titleItem, titleIndex) => (
            <div key={titleIndex} className={clsx(Styles.wrapper)}>
              <div className={Styles.title}>{titleItem.name}</div>
              <ul>
                {titleItem.sidebarData.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.url}>
                      <div
                        className={clsx(Styles.Sidebar_Items, {
                          [Styles.click_color]: item.showChildItem,
                        })}
                        onClick={() => this.toggleContent(item)}
                      >
                        <div
                          className={clsx(
                            Styles.content,
                            Styles.content_group,
                            {
                              [Styles.click_img]: item.showChildItem,
                            }
                          )}
                        >
                          <div className={Styles.tile}>
                            <img src={item.img_1} alt="" />
                            {item.name}
                          </div>
                          {item.items.length > 0 && (
                            <div className={Styles.title__img}>
                              <img
                                className={clsx({
                                  [Styles.rotate]: item.showChildItem,
                                })}
                                src={item.img_2}
                                alt=""
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </NavLink>
                    {item.showChildItem && (
                      <ul>
                        {item.items.map((childItem, childIndex) => (
                          <li key={childIndex}>
                            <NavLink to={childItem.url}>
                              <div className={Styles.Sidebar_Items}>
                                <div className={Styles.conten}>
                                  <div className={Styles.tile}>
                                    <img src={childItem.img} alt="" />
                                    {childItem.name}
                                  </div>
                                </div>
                              </div>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;
