import React, { Component } from "react";
import Styles from "./Sidebar.module.scss";
import clsx from "clsx";
import mapImage from "../../../../assets/images/sidebar/map.svg";
import dropdown from "../../../../assets/images/sidebar/ic_Chevron.svg";

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
              name: "Test 1",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "My Workout",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/myWorkout",
                },
                {
                  name: "All Exercises",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/allExercises",
                },
              ],
            },
            {
              name: "Test 1.2",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "My Workout",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/myWorkout",
                },
                {
                  name: "All Exercises",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/allExercises",
                },
              ],
            },
            // Add more items here
          ],
        },
        {
          name: "PAGE",
          sidebarData: [
            {
              name: "Test 2.1",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "My Workout",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/myWorkout",
                },
                {
                  name: "All Exercises",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/allExercises",
                },
              ],
            },
            // Add more items here
          ],
        },
        {
          name: "ELEMENT",
          sidebarData: [
            {
              name: "Test3",
              img_1: mapImage,
              img_2: dropdown,
              showChildItem: false,
              url: "",
              items: [
                {
                  name: "My Workout",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/myWorkout",
                },
                {
                  name: "All Exercises",
                  img: "../../../assets/svg/bulk.svg",
                  url: "/user/allExercises",
                },
              ],
            },
            // Add more items here
          ],
        },
      ],
    };
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

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
          gymmax
          <div
            className={clsx(Styles.close_sidebar)}
            onClick={this.toggleSidebar}
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
                    <div
                      className={clsx(Styles.Sidebar_Items, {
                        [Styles.click_color]: item.showChildItem,
                      })}
                      onClick={() => this.toggleContent(item)}
                    >
                      <div
                        className={clsx(Styles.content, Styles.content_group, {
                          [Styles.click_img]: item.showChildItem,
                        })}
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
                    {item.showChildItem && (
                      <ul>
                        {item.items.map((childItem, childIndex) => (
                          <li key={childIndex}>
                            <div className={Styles.Sidebar_Items}>
                              <div className={Styles.conten}>
                                <div className={Styles.tile}>
                                  <img src={childItem.img} alt="" />
                                  {childItem.name}
                                </div>
                              </div>
                            </div>
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
