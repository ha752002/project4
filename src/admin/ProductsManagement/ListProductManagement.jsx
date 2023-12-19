import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import {NavLink} from "react-router-dom";import clsx from "clsx";
import Styles from "./List.module.scss";
import useSwr from "swr";
import { apiClient } from "../../services/API";

const ListProductManagement = () => {
  const { data, isLoading, error } = useSwr("/product/getAll", (endpoint) =>
    apiClient.get(endpoint).then((data) => data)
  );

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (data) {
    console.log(data);
    return (
      <div className={clsx(Styles.list_product, Styles.flex)}>
        <table>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Title</th>
              <th>Warranty Period</th>
              <th>Cost</th>
              <th>Promotional</th>
              <th>Video</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((product, index) => (
              
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.warrantyPeriod}</td>
                <td>{product.cost}</td>
                <td>{product.promotional}</td>
                <td>{product.video}</td>
                <td><NavLink to="/admin/edit-products">edit</NavLink></td>
                <td><NavLink to="/admin/delete-products">delete</NavLink></td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // return <div className="container mt-5">Loading...</div>;
};

export default ListProductManagement;
