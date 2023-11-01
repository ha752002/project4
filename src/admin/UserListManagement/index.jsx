import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Styles from "./UserList.module.scss";
import clsx from "clsx";
// img
import avatars1 from "../../assets/images/avatars/01.png";
import avatars2 from "../../assets/images/avatars/avtar_1.png";
import avatars3 from "../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../assets/images/avatars/avtar_5.png";
import { Style } from "@mui/icons-material";

export default function UsersList() {
  const userlist = [
    {
      img: `${avatars1}`,
      name: "Tuan Anh",
      phone: "0836668336",
      email: "phamtuananh2101@gmail.com",
      country: "VN",
      status: "Active",
      company: "Acme Corporation",
      joindate: "2023/11/30",
      color: "bg-primary",
    },
    {
      img: `${avatars2}`,
      name: "Tuan Anh",
      phone: "0836668336",
      email: "phamtuananh2101@gmail.com",
      country: "VN",
      status: "Active",
      company: "Acme Corporation",
      joindate: "2023/11/30",
      color: "bg-primary",
    },
    {
      img: `${avatars3}`,
      name: "Tuan Anh",
      phone: "0836668336",
      email: "phamtuananh2101@gmail.com",
      country: "VN",
      status: "Active",
      company: "Acme Corporation",
      joindate: "2023/11/30",
      color: "bg-primary",
    },
    {
      img: `${avatars4}`,
      name: "Tuan Anh",
      phone: "0836668336",
      email: "phamtuananh2101@gmail.com",
      country: "VN",
      status: "Active",
      company: "Acme Corporation",
      joindate: "2023/11/30",
      color: "bg-primary",
    },
    {
      img: `${avatars5}`,
      name: "Tuan Anh",
      phone: "0836668336",
      email: "phamtuananh2101@gmail.com",
      country: "VN",
      status: "Active",
      company: "Acme Corporation",
      joindate: "2023/11/30",
      color: "bg-primary",
    },
  ];

  return (
    <div className="user_list">
      {" "}
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className={(`card_title`, clsx(Styles.card_title))}>
                  User List
                </h4>
              </div>
            </Card.Header>
            <Card.Body className="px-0">
              <div className="table-responsive">
                <table
                  id="user-list-table"
                  className="table table-striped"
                  role="grid"
                  data-toggle="data-table"
                >
                  <thead>
                    <tr className={(`ligth`, clsx(Styles.ligth))}>
                      <th>Profile</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>Status</th>
                      <th>Company</th>
                      <th>Join Date</th>
                      <th min-width="100px">Action</th>
                    </tr>
                  </thead>
                  <tbody className={clsx(Styles.user_list)}>
                    {userlist.map((item, idx) => (
                      <tr key={idx}>
                        <td className="text-center">
                          <Image
                            className="bg-soft-primary rounded img-fluid avatar-40 me-3"
                            src={item.img}
                            alt="profile"
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.country}</td>
                        <td>
                          <span className={`badge ${item.color}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>{item.company}</td>
                        <td>{item.joindate}</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <Link
                              className="btn btn-sm btn-icon btn-success"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add"
                              data-original-title="Add"
                              to="#"
                            >
                              <span className="btn-inner">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M19.2036 8.66919V12.6792"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M21.2497 10.6741H17.1597"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </Link>{" "}
                            <Link
                              className="btn btn-sm btn-icon btn-warning"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              data-original-title="Edit"
                              to="#"
                            >
                              <span className="btn-inner">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M15.1655 4.60254L19.7315 9.16854"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </Link>{" "}
                            <Link
                              className="btn btn-sm btn-icon btn-danger"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              data-original-title="Delete"
                              to="#"
                            >
                              <span className="btn-inner">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="currentColor"
                                >
                                  <path
                                    d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M20.708 6.23975H3.75"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </Link>{" "}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}