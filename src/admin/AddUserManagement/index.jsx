import React, { useState } from "react";
// import { Row, Col, Image, Form, Button } from "react-bootstrap";
// import Card from "../../components/Card";
import Styles from "./AddUser.module.scss";
import clsx from "clsx";
// import { Link } from "react-router-dom";
// img
import edit from "../../assets/icon_svg/edit.svg";

import avatar001 from "../../assets/images/avatars/avata_001.png";
import avatar002 from "../../assets/images/avatars/avata_002.png";
import avatar003 from "../../assets/images/avatars/avata_003.png";
import avatar004 from "../../assets/images/avatars/avata_004.png";
import avatar005 from "../../assets/images/avatars/avata_005.png";
import avatar006 from "../../assets/images/avatars/avata_006.png";
import avatar007 from "../../assets/images/avatars/avata_007.jpg";
import avatar008 from "../../assets/images/avatars/avata_008.jpg";
import avatar009 from "../../assets/images/avatars/avata_009.jpg";
import avatar010 from "../../assets/images/avatars/avata_010.jpg";
import avatar011 from "../../assets/images/avatars/avata_011.jpg";
import avatar012 from "../../assets/images/avatars/avata_012.jpg";
import avatar013 from "../../assets/images/avatars/avata_013.jpg";
import avatar014 from "../../assets/images/avatars/avata_014.jpg";
import avatar015 from "../../assets/images/avatars/avata_015.jpg";
import avatar016 from "../../assets/images/avatars/avata_016.jpg";
import avatar017 from "../../assets/images/avatars/avata_017.jpg";
import avatar018 from "../../assets/images/avatars/avata_018.jpg";
import avatar019 from "../../assets/images/avatars/avata_019.jpg";
import avatar020 from "../../assets/images/avatars/avata_020.jpg";
import avatar021 from "../../assets/images/avatars/avata_021.jpg";


// function getRandomAvatar() {
//   const randomIndex = Math.floor(Math.random() * avatars.length);
//   return avatars[randomIndex];
// }

export default function AddUser() {

  const initialAvatars = [
    avatar001,
    avatar002,
    avatar003,
    avatar004,
    avatar005,
    avatar006,
    avatar007,
    avatar008,
    avatar009,
    avatar010,
    avatar011,
    avatar012,
    avatar013,
    avatar014,
    avatar015,
    avatar016,
    avatar017,
    avatar018,
    avatar019,
    avatar020,
    avatar021,
  ];
  const [avatars, setAvatars] = useState(initialAvatars);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    address: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    phoneNumber: 0,

  });

  const [AvatarSelectionFormStatus, setAvatarSelectionFormStatus] = useState(false);

  const handleAvatarClick = (newAvatar) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      avatar: newAvatar,
      
    }));
    toggleAvatarSelectionForm()

  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAvatar = e.target.result;
        // Update the avatars array with the new avatar
        setAvatars((prevAvatars) => [...prevAvatars, newAvatar]);
        // Set the new avatar as the selected one
        handleAvatarClick(newAvatar);
      };

      reader.readAsDataURL(file);
    }
    toggleAvatarSelectionForm()

  };

  const toggleAvatarSelectionForm = () => {
    setAvatarSelectionFormStatus((prevStatus) => !prevStatus);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User information submitted:', userInfo);
  };


  return (

    <div className={clsx(Styles.registration_form, Styles.text)}>
      {/* <h1>User Registration Form</h1> */}
      <form onSubmit={handleSubmit}>
        <div className={clsx(Styles.group_information)}>
          <div className={clsx(Styles.group_other_information)}>
            <div className={clsx(Styles.form_avatar)}>
              <div className={clsx(Styles.avatar)}>
                {userInfo.avatar && <img src={userInfo.avatar} alt="Avatar" />}
                <div className={clsx(Styles.edit_avatar)} onClick={toggleAvatarSelectionForm}>
                  <img src={edit} alt="" />
                </div>
              </div>


            </div>
            <div>
              <div className={clsx(Styles.form_input)}>
                <label>Facebook:</label>
                <input
                  type="text"
                  name="facebook"
                  value={userInfo.facebook}
                  onChange={handleChange}
                />
              </div>
              <div className={clsx(Styles.form_input)}>
                <label>Twitter:</label>
                <input
                  type="text"
                  name="twitter"
                  value={userInfo.twitter}
                  onChange={handleChange}
                />
              </div>
              <div className={clsx(Styles.form_input)}>
                <label>Instagram:</label>
                <input
                  type="text"
                  name="instagram"
                  value={userInfo.instagram}
                  onChange={handleChange}
                />
              </div>
              <div className={clsx(Styles.form_input)}>
                <label>LinkedIn:</label>
                <input
                  type="text"
                  name="linkedin"
                  value={userInfo.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={clsx(Styles.group_basic_information)}>
            <div className={clsx(Styles.form_input)}>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={clsx(Styles.form_input)}>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={clsx(Styles.form_input)}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className={clsx(Styles.form_input)}>
              <label>Phone Number:</label>
              <input
                type="number"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className={clsx(Styles.form_input)}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
              />
            </div>
            <div className={clsx(Styles.form_input)}>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
              />
            </div>
            <div className={clsx(Styles.form_button)}>
              <button type="reset">clean</button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div>
        </div>
      </form>

      {AvatarSelectionFormStatus && (
      <div className={clsx(Styles.choose_an_avatar)}>
        <div className={clsx(Styles.form_choose)} >
          <h2>All Avatars</h2>
          <div className={clsx(Styles.list_avatar)}>
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                onClick={() => handleAvatarClick(avatar)}
              />
            ))}
          </div>
          <div>
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
        
      </div>
      )}
    </div>


  );
}
