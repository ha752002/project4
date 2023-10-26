import React, { Component } from "react";
import Styles from "./Sidebar.module.scss";
import clsx from "clsx";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      sidebarData: [
        {
          name: "Exercises",
          img_1: "../../../assets/svg/map.svg",
          img_2: "../../../assets/svg/Dropdown.svg",
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
            {
              name: "Created Exercises",
              img: "../../../assets/svg/bulk.svg",
              url: "/user/createdExercises",
            },
            {
              name: "Create Exercises",
              img: "../../../assets/svg/bulk.svg",
              url: "/user/createExercises",
            },
          ],
        },
        {
          name: "Item 2",
          img_1: "../../../assets/svg/map.svg",
          img_2: "../../../assets/svg/Dropdown.svg",
          showChildItem: false,
          url: "/main/about",
          items: [
            {
              name: "About Us",
              img: "../../../assets/svg/bulk.svg",
              url: "/main/about-us",
            },
            {
              name: "Our Team",
              img: "../../../assets/svg/bulk.svg",
              url: "/main/our-team",
            },
          ],
        },
        {
          name: "Item 3",
          img_1: "../../../assets/svg/map.svg",
          img_2: "../../../assets/svg/Dropdown.svg",
          showChildItem: false,
          url: "/main/contact",
          items: [
            {
              name: "Contact",
              img: "../../../assets/svg/bulk.svg",
              url: "/main/contact-us",
            },
            {
              name: "Location",
              img: "../../../assets/svg/bulk.svg",
              url: "/main/location",
            },
            {
              name: "Hours",
              img: "../../../assets/svg/bulk.svg",
              url: "/main/hours",
            },
          ],
        },
        {
          name: "Item 4",
          img_1: "../../../assets/svg/map.svg",
          img_2: "../../../assets/svg/Dropdown.svg",
          showChildItem: false,
          url: "/main/contact",
          items: [],
        },
        // Add more sidebar items here
      ],
    };
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  toggleContent = (item) => {
    const { sidebarData } = this.state;
    const updatedData = sidebarData.map((dataItem) => {
      if (dataItem === item) {
        dataItem.showChildItem = !dataItem.showChildItem;
      } else {
        dataItem.showChildItem = false;
      }
      return dataItem;
    });

    this.setState({ sidebarData: updatedData });
  };

  render() {
    const { isSidebarOpen, sidebarData } = this.state;

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
            <img src="../../../assets/svg/left_arrow.svg" alt="" />
          </div>
        </div>

        <div className={clsx(Styles.main, Styles.text)}>
          <div className={Styles.title}>home</div>
          <ul>
            {sidebarData.map((item, index) => (
              <li key={index}>
                <div
                  className={clsx(Styles.Sidebar_Items, {
                    [Styles.click_color]: item.showChildItem,
                  })}
                  onClick={() => this.toggleContent(item)}
                >
                  <div
                    className={clsx(Styles.conten, {
                      [Styles.click_img]: item.showChildItem,
                    })}
                  >
                    <div className={Styles.tile}>
                      <img src={item.img_1} alt="" />
                      {item.name}
                    </div>
                    {item.items.length > 0 && (
                      <div>
                        <img
                          className={clsx(Styles.rotate, {
                            [Styles[""]]: !item.showChildItem,
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
      </div>
    );
  }
}

export default Sidebar;
