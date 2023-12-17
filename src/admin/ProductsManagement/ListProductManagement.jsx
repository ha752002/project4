import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Styles from "./List.module.scss";
import ListProduct from "../../pages/Home/ListProduct";

const ListProductManagement = () => {
  

  return (
    <div className="container mt-5">
      <ListProduct></ListProduct>
    </div>
  );
};

export default ListProductManagement;
