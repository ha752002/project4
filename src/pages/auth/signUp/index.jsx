import React, { useState, useReducer } from "react";
import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

import { toast } from "react-toastify";
import { handleRegister, handleLogin } from "../../../helpers/authHelpers";
import { formSchema } from "../../../validation/signUpValidation";
// img

import facebook from "../../../assets/images/brands/fb.svg";
import google from "../../../assets/images/brands/gm.svg";
import instagram from "../../../assets/images/brands/im.svg";
import linkedin from "../../../assets/images/brands/li.svg";
import auth5 from "../../../assets/images/auth/05.png";

// handleRegister(data);
export const SignUp = () => {
  const navigate = useNavigate();
  const reduce = (prev, action = {}) => {
    switch (action.type) {
      case "form/change":
        return {
          ...prev,
          form: { ...prev.form, [action.payload.name]: action.payload.value },
        };

      case "agree/toggle":
        return {
          ...prev,
          isAgree: !prev.isAgree,
        };

      default:
        return prev;
    }
  };

  const [signUpState, dispatch] = useReducer(reduce, {
    form: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      reEnterPassword: "",
    },

    errors: {},

    isAgree: false,
  });

  const handleOnChange = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    dispatch({
      type: "form/change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const validateForm = () => {
    const resultValidate = formSchema
      .validate(signUpState.form)
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };

  // event Submit Register
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signUpState.isAgree) {
        validateForm();
        const response = await handleRegister(signUpState.form);
        console.log(signUpState);

        navigate("/user/signIn");
        toast.success(response.message);
      }
    } catch (error) {
      toast.warn(error.message);
    }
  };

  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <div className="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden ">
            <Image
              src={auth5}
              className="Image-fluid gradient-main animated-scaleX"
              alt="images"
            />
          </div>
          <Col md="6">
            <Row className="justify-content-center ">
              <Col md="10">
                <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0 border-0">
                  <Card.Body>
                    <Link
                      to="/admin"
                      className="navbar-brand d-flex align-items-center mb-3"
                    >
                      <svg
                        width="30"
                        className="text-primary"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-0.757324"
                          y="19.2427"
                          width="28"
                          height="4"
                          rx="2"
                          transform="rotate(-45 -0.757324 19.2427)"
                          fill="currentColor"
                        />
                        <rect
                          x="7.72803"
                          y="27.728"
                          width="28"
                          height="4"
                          rx="2"
                          transform="rotate(-45 7.72803 27.728)"
                          fill="currentColor"
                        />
                        <rect
                          x="10.5366"
                          y="16.3945"
                          width="16"
                          height="4"
                          rx="2"
                          transform="rotate(45 10.5366 16.3945)"
                          fill="currentColor"
                        />
                        <rect
                          x="10.5562"
                          y="-0.556152"
                          width="28"
                          height="4"
                          rx="2"
                          transform="rotate(45 10.5562 -0.556152)"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="logo-title ms-4">Hope UI</h4>
                    </Link>
                    <h2 className="mb-2 text-center">Sign Up</h2>
                    <p className="text-center">Create your Hope UI account.</p>
                    <Form action="" onSubmit={handleSubmit}>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              onChange={handleOnChange}
                              name="email"
                              value={signUpState.form.email}
                              id="email"
                              placeholder=" "
                            />
                            {/* {errors.email && <span>{errors.email}</span>} */}
                          </Form.Group>
                        </Col>
                        {/* fullName */}
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="fullname" className="">
                              Full Name
                            </Form.Label>
                            <Form.Control
                              type="fullname"
                              name="fullname"
                              value={signUpState.form.fullname}
                              id="full-name"
                              placeholder=" "
                              onChange={handleOnChange}
                            />
                            {/* {errors.fullname && <span>{errors.fullname}</span>} */}
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="phone" className="">
                              Phone No.
                            </Form.Label>
                            <Form.Control
                              type="text"
                              value={signUpState.form.phone}
                              name="phone"
                              id="phone"
                              placeholder=" "
                              onChange={handleOnChange}
                            />
                            {/* {errors.phone && <span>{errors.phone}</span>} */}
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              value={signUpState.form.password}
                              id="password"
                              placeholder=" "
                              onChange={handleOnChange}
                            />
                            {/* {errors.password && <span>{errors.password}</span>} */}
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="confirmpw" className="">
                              Confirm Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              value={signUpState.form.reEnterPassword}
                              name="reEnterPassword"
                              id="confirm-password"
                              onChange={handleOnChange}
                              placeholder=" "
                            />
                            {/* {errors.reEnterPassword && (
                              <span>{errors.reEnterPassword}</span>
                            )} */}
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-center">
                          <Form.Check className="mb-3 form-check">
                            <Form.Check.Input
                              type="checkbox"
                              id="customCheck1"
                              onChange={() => {
                                dispatch({
                                  type: "agree/toggle",
                                });
                              }}
                              checked={signUpState.isAgree}
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              I agree with the terms of use
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button
                          className="login_lockscreen"
                          type="submit"
                          variant="primary"
                        >
                          Sign Up
                        </Button>
                      </div>
                      <p className="text-center my-3">
                        or sign in with other accounts?
                      </p>
                      <div className="d-flex justify-content-center">
                        <ListGroup
                          as="ul"
                          className="list-group-horizontal list-group-flush"
                        >
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={facebook} alt="fb" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={google} alt="gm" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={instagram} alt="im" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={linkedin} alt="li" />
                            </Link>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <p className="mt-3 text-center">
                        Already have an Account{" "}
                        <Link
                          to="/user/signin"
                          className="text-underline link-signup color-signin"
                        >
                          Sign In
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignUp;
