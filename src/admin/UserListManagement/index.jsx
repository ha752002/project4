import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Styles from "./UserList.module.scss";
import clsx from "clsx";

import useSwr from "swr";
import { apiClient } from "../../services/API";
// img


export default function UsersList() {

  const { data, isLoading, error } = useSwr("/user/getAllUser", (endpoint) =>
    apiClient.get(endpoint).then((data) => data)
  );

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (data) {
    console.log(data);
    return (
      <div className={clsx(Styles.list_user, Styles.flex)}>
        <table>
          <thead>
            <tr>
              <th>Stt</th>

              <th>email</th>

            </tr>
          </thead>
          <tbody>
            {data.data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{user.email}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
