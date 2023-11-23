import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";
import { facebook, google, instagram, linkedin, auth1 } from "@/assets/images";
import {authLogin, authRegister} from "../../../redux/slice/authSlice.js";
import {FULFILLED, REJECTED} from "../../../constants/apiStatus.js";
import "@/../node_modules/bootstrap/dist/css/bootstrap.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Card from "@/components/Card";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import {useForm} from "react-hook-form";

export const SignIn = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.auth);

  const {
    handleSubmit, register, formState: {errors, dirtyFields}
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "", password: ""},
    criteriaMode: "all"
  });

  useEffect(() => {
    if (status === REJECTED && error && error.code === 401) {
      toast(error.message)
    } else if (status === FULFILLED) {
      toast("Đăng nhập thành công")
    }
  }, [status]);
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    dispatch(authLogin(data));
  };

  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card border-0">
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
                      <h4 className="logo-title ms-3">Hope UI</h4>
                    </Link>
                    <h2 className="mb-2 text-center">Sign In</h2>
                    <p className="text-center">Login to stay connected.</p>

                    {/*form*/}
                    <Form action="" onSubmit={handleSubmit(onSubmit)}>
                      <Row>
                        {/*Email*/}
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              {...register("email", {
                                required: "Please enter your email address", pattern: {
                                  value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: "Invalid email address"
                                }
                              })}
                              id="email"
                              aria-describedby="email"
                              placeholder=" "
                            />
                            <span>{errors.email?.message}</span>
                          </Form.Group>
                        </Col>

                        {/*Password*/}
                        <Col lg="12" className="">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              id="password"
                              {...register("password")}
                              aria-describedby="password"
                              placeholder=" "
                            />
                            <span>{errors.password?.message}</span>
                          </Form.Group>
                        </Col>

                        {/*checkbox*/}
                        <Col lg="12" className="d-flex justify-content-between">
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input
                              type="checkbox"
                              id="customCheck1"
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              Remember Me
                            </Form.Check.Label>
                          </Form.Check>
                          <Link to="/user/recoverpw">Forgot Password?</Link>
                        </Col>
                      </Row>

                      {/*Button*/}
                      <div className="d-flex justify-content-center">
                        <Button
                          className="login_lockscreen "
                          type="submit"
                          variant="btn btn-primary"
                        >
                          Sign in
                        </Button>
                      </div>

                      {/*social*/}
                      <p className="text-center my-3">
                        or sign in with other accounts?
                      </p>
                      <div className="d-flex justify-content-center">
                        <ListGroup
                          as="ul"
                          className="list-group-horizontal list-group-flush"
                        >
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={facebook} alt="fb" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={google} alt="gm" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={instagram} alt="im" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={linkedin} alt="li" />
                            </Link>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <p className="mt-3 text-center">
                        Don’t have an account?{" "}
                        <Link to="/user/signup" className="text-underline ">
                          Click here to Sign up.
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden"
          >
            <Image
              src={auth1}
              className="Image-fluid gradient-main animated-scaleX"
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignIn;
