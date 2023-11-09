import React, { useState, useReducer } from "react";
import "@/../node_modules/bootstrap/dist/css/bootstrap.css";
import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { handleRegister, handleLogin } from "@/helpers/authHelpers";
import { signUpFormSchema } from "@/validation/signUpValidation";
import { facebook, google, instagram, linkedin, auth5 } from "@/assets/images";
import { toast } from "react-toastify";
import Card from "@/components/Card";
import { reduce } from "./reduce";

export const SignUp = () => {
  const navigate = useNavigate();
  const [signUpState, dispatch] = useReducer(reduce, {
    form: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      reEnterPassword: "",
      isAgree: false,
    },

    errors: {},
  });

  const handleOnChange = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    dispatch({
      type: "form/change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const validateForm = async () => {
    console.log(signUpState);
    try {
      const result = await signUpFormSchema.validate(signUpState.form, {
        abortEarly: false,
      });
      console.log(result);
      return null;
    } catch (error) {
      return error.inner;
    }
  };

  // event Submit Register
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm()
      .then((errors) => {
        const formError = {};
        if (errors) {
          errors.forEach((error) => {
            formError[error.path] = error.message;
          });
          // console.log("formError:", formError);
          // console.log("Errors:", errors);
        } else {
          handleRegister(signUpState.form)
            .then((response) => {
              toast.success(response.message);
              navigate("/user/signIn");
            })
            .catch((error) => {
              toast.warn(error.message);
            });
        }
        dispatch({
          type: "error/set",
          payload: formError,
        });
      })
      .catch((error) => {
        console.error("Validation error:", error);
      });
    // handleRegister();
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
                      <Row style={{ display: "flex" }}>
                        <Col lg="12" style={{ margin: "4px 0px " }}>
                          <Form.Group className="form-group">
                            <Form.Label
                              htmlFor="email"
                              className=""
                              style={{ fontWeight: "600", fontSize: "1.2rem" }}
                            >
                              Email
                            </Form.Label>
                            <Form.Control
                              type="text"
                              onChange={handleOnChange}
                              name="email"
                              value={signUpState.form.email}
                              id="email"
                              placeholder=" "
                            />
                            {signUpState.errors.email && (
                              <div
                                // className="invalid-feedback"
                                style={{
                                  color: "red",
                                  display: "block",
                                }}
                              >
                                {signUpState.errors.email}
                              </div>
                            )}
                          </Form.Group>
                        </Col>

                        {/* fullName */}
                        <Col lg="6" style={{ margin: "4px 0px " }}>
                          <Form.Group className="form-group">
                            <Form.Label
                              htmlFor="fullName"
                              className=""
                              style={{ fontWeight: "600", fontSize: "1.2rem" }}
                            >
                              Full Name
                            </Form.Label>
                            <Form.Control
                              type="fullName"
                              name="fullName"
                              value={signUpState.form.fullName}
                              id="full-name"
                              placeholder=" "
                              onChange={handleOnChange}
                            />
                            <div
                              // className="invalid-feedback"
                              style={{
                                color: "red",
                                display: "block",
                              }}
                            >
                              {signUpState.errors.fullName}
                            </div>
                          </Form.Group>
                        </Col>

                        <Col lg="6" style={{ margin: "4px 0px " }}>
                          <Form.Group className="form-group">
                            <Form.Label
                              htmlFor="phone"
                              className=""
                              style={{ fontWeight: "600", fontSize: "1.2rem" }}
                            >
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
                            {signUpState.errors.phone && (
                              <div
                                // className="invalid-feedback"
                                style={{
                                  color: "red",
                                  display: "block",
                                }}
                              >
                                {signUpState.errors.phone}
                              </div>
                            )}
                          </Form.Group>
                        </Col>
                        <Col lg="6" style={{ margin: "4px 0px " }}>
                          <Form.Group className="form-group">
                            <Form.Label
                              htmlFor="password"
                              className=""
                              style={{ fontWeight: "600", fontSize: "1.2rem" }}
                            >
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              value={signUpState.form.password}
                              id="password"
                              onKeyDown={(e) => {
                                console.log(e.keyCode);
                              }}
                              placeholder=" "
                              onChange={handleOnChange}
                            />
                            {signUpState.errors.password && (
                              <div
                                // className="invalid-feedback"
                                style={{
                                  color: "red",
                                  display: "block",
                                }}
                              >
                                {signUpState.errors.password}
                              </div>
                            )}
                          </Form.Group>
                        </Col>
                        <Col lg="6" style={{ margin: "4px 0px " }}>
                          <Form.Group className="form-group">
                            <Form.Label
                              htmlFor="confirmpw"
                              className=""
                              style={{ fontWeight: "600", fontSize: "1.2rem" }}
                            >
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
                            {signUpState.errors.reEnterPassword && (
                              // <span>{signUpState.errors.reEnterPassword}</span>
                              <div
                                // className="invalid-feedback"
                                style={{
                                  color: "red",
                                  display: "block",
                                }}
                              >
                                {signUpState.errors.reEnterPassword}
                              </div>
                            )}
                          </Form.Group>
                        </Col>
                        <Col
                          lg="12"
                          className="d-flex justify-content-center"
                          style={{
                            flexDirection: "column",
                            margin: "4px 0px ",
                          }}
                        >
                          <Form.Check
                            className="form-check"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              gap: "6px",
                            }}
                          >
                            <Form.Check.Input
                              type="checkbox"
                              id="customCheck1"
                              onChange={() => {
                                dispatch({
                                  type: "agree/toggle",
                                });
                              }}
                              checked={signUpState.form.isAgree}
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              I agree with the terms of use
                            </Form.Check.Label>
                          </Form.Check>

                          {signUpState.errors.isAgree && (
                            <div
                              // className="invalid-feedback"
                              style={{
                                color: "red",
                                display: "block",
                                textAlign: "center",
                              }}
                            >
                              {signUpState.errors.isAgree}
                            </div>
                          )}
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
