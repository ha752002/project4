import clsx from "clsx";
import Styles from "../home/HomePage.module.scss";
import list from "../../assets/icon_svg/list-ul.svg";
import MenuCategory from "../home/MenuCategory.jsx";
import MenuFilter from "../home/MenuFilter.jsx";
import sliders from "../../assets/icon_svg/sliders.svg";
import grid_3 from "../../assets/icon_svg/grid-3x3-gap.svg";
import grid from "../../assets/icon_svg/grid.svg";
import React, {useState} from "react";
import ListProduct from "../home/ListProduct.jsx";

function Category() {
    const [viewType, setViewType] = useState(false);

    return (
        <div style={{width: "80%", margin: "20px auto"}}>
            <div
                className={clsx(
                    Styles.flex,
                    Styles.center,
                    Styles.tile_list_product
                )}
            >
                <div className={clsx(Styles.product_portfolio)}>
                    <div className={clsx(Styles.flex, Styles.center)}>
                        <img src={list} alt="" className={clsx(Styles.icon_white)}/>
                        Danh mục sản phẩm
                    </div>
                    <div className={clsx(Styles.menu_Category)}>
                        <MenuCategory></MenuCategory>
                    </div>
                </div>
            </div>
            <div className={clsx(Styles.flex, Styles.main_list_product)}>
                <div className={clsx(Styles.block_filter)}>
                    <MenuFilter></MenuFilter>
                </div>
                <div className={clsx(Styles.block_list_product)}>
                    <div
                        className={clsx(
                            Styles.list_product,
                            // viewType && Styles.view_type
                        )}
                    >
                        <div className={clsx(Styles.arrange, Styles.flex)}>
                            <div className={clsx(Styles.flex, Styles.tile_arrange)}>
                                <img
                                    src={sliders}
                                    alt=""
                                    className={clsx(Styles.icon_white)}
                                />
                                SẮP XẾP SẢN PHẨM
                            </div>
                            <div>
                                <ul>
                                    <li>mới nhất</li>
                                    <li>xem nhiều</li>
                                    <li>Giảm nhiều</li>
                                    <li>còn hàng</li>
                                </ul>
                                <ul>
                                    <li>
                                        <select name="price" id="price">
                                            <option value="">Giá tăng dần</option>
                                            <option value="">Giá giảm dần</option>
                                        </select>
                                    </li>
                                    <li
                                        // onClick={handleViewTypeClick(false)}
                                        className={clsx(!viewType && Styles.viewType)}
                                    >
                                        <img
                                            className={clsx(Styles.icon_white)}
                                            src={grid_3}
                                            alt=""
                                        />
                                    </li>
                                    <li
                                        // onClick={handleViewTypeClick(true)}
                                        className={clsx(viewType && Styles.viewType)}
                                    >
                                        <img
                                            className={clsx(Styles.icon_white)}
                                            src={grid}
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ListProduct></ListProduct>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;