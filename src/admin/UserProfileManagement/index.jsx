import React, {Fragment, useState} from "react";

import Styles from "./UsersProfile.module.scss";
import clsx from "clsx";
import avatar from "../../assets/images/avatars/avata_001.png"
import top_image from "../../assets/images/dashboard/top-image.jpg"
import facebook from "../../assets/icon_svg/facebook.svg"
import instagram from "../../assets/icon_svg/instagram.svg"
import envelope from "../../assets/icon_svg/envelope.svg"
import pinterest from "../../assets/icon_svg/pinterest.svg"

export default function UsersProfile() {
    // const [toggler, setToggler] = useState();
    return (
        <div className={clsx(Styles.users_profile, Styles.text)}>
            <div className={clsx(Styles.user)}>
                <div className={clsx(Styles.background_user)}>
                    <img src={top_image} alt=""/>
                </div>
                <div className={clsx(Styles.flex, Styles.detail_user)}>
                    <img className={clsx(Styles.avatar_user)} src={avatar} alt=""/>
                    <div className={clsx(Styles.base_information)}>
                        <span className={clsx(Styles.name)}>Nguyen Thi Hong Ha</span>
                        <span>Admin</span>
                    </div>
                </div>
            </div>
            <div className={clsx(Styles.flex, Styles.details)}>
                <div className={clsx(Styles.other_information)}>
                    <div className={clsx(Styles.title)}> information</div>

                    <ul>
                        <li><img src={facebook} alt=""/><span>HongHa</span></li>
                        <li><img src={instagram} alt=""/><span>honggha_02</span></li>
                        <li><img src={envelope} alt=""/><span>ha@gmail.com</span></li>
                        <li><img src={pinterest} alt=""/><span>Hongha02</span></li>
                    </ul>


                </div>
                <div className={clsx(Styles.main_information)}>
                    <div className={clsx(Styles.title)}>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                    </div>

                </div>
            </div>
            <div></div>
        </div>
    );
}
