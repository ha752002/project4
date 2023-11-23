import React, {useState, useReducer, useEffect} from "react";
import "@/../node_modules/bootstrap/dist/css/bootstrap.css";
import {Row, Col, Image, Form, Button, ListGroup} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {facebook, google, instagram, linkedin, auth5} from "@/assets/images";
import {toast} from "react-toastify";
import Card from "@/components/Card";
import {useForm} from "react-hook-form";
import {authRegister} from "../../../redux/slice/authSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpFormSchema} from "@/validation/signUpValidation.js";
import {FULFILLED, PENDING, REJECTED} from "../../../constants/apiStatus.js";
import {loadingSlice} from "../../../redux/slice/loadingSlice.js";


export const SignUp = () => {
    const navigate = useNavigate();
    const {turnOn, turnOff} = loadingSlice.actions;
    const {status, error} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {
        handleSubmit, register, formState: {errors, dirtyFields}
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signUpFormSchema),
        defaultValues: {
            fullName: "", email: "", phone: "", password: "", reEnterPassword: "", isAgree: false,
        }, criteriaMode: "all"
    });

    useEffect(() => {
        status === PENDING ? dispatch(turnOn()) : dispatch(turnOff());
    }, [status]);

    const onSubmit = (data, e) => {
        e.preventDefault();
        // console.log(data)
        dispatch(authRegister(data))
    };

    useEffect(() => {
        if (status === REJECTED && error && error.code === 401) {
            toast(error.message)
        } else if (status === FULFILLED) {
            toast("Đăng Kí thành công")
            navigate("/user/signin")
        }
    }, [status]);

    return (<>
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
                            <Card
                                className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0 border-0">
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

                                    {/*Form SignUp*/}
                                    <Form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <Row style={{display: "flex"}}>

                                            {/*email*/}
                                            <Col lg="12" style={{margin: "4px 0px "}}>
                                                <Form.Group className="form-group">
                                                    <Form.Label
                                                        htmlFor="email"
                                                        className=""
                                                        style={{fontWeight: "600", fontSize: "1.2rem"}}
                                                    >
                                                        Email
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        autoComplete="off"
                                                        placeholder=" "
                                                        {...register("email", {
                                                            required: "Please enter your email address", pattern: {
                                                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                message: "Invalid email address"
                                                            }
                                                        })}
                                                    />
                                                    <span>{errors.email?.message}</span>
                                                </Form.Group>
                                            </Col>

                                            {/*fullName*/}
                                            <Col lg="6" style={{margin: "4px 0px "}}>
                                                <Form.Group className="form-group">
                                                    <Form.Label
                                                        htmlFor="fullName"
                                                        className=""
                                                        style={{fontWeight: "600", fontSize: "1.2rem"}}
                                                    >
                                                        Full Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="fullName"
                                                        name="fullName"
                                                        {...register("fullName")}
                                                        id="full-name"
                                                        placeholder=" "
                                                    />
                                                    <span>{errors.fullName?.message}</span>
                                                </Form.Group>
                                            </Col>

                                            {/*phone*/}
                                            <Col lg="6" style={{margin: "4px 0px "}}>
                                                <Form.Group className="form-group">
                                                    <Form.Label
                                                        htmlFor="phone"
                                                        className=""
                                                        style={{fontWeight: "600", fontSize: "1.2rem"}}
                                                    >
                                                        Phone No.
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        {...register("phone")}
                                                        name="phone"
                                                        id="phone"
                                                        placeholder=" "
                                                    />
                                                    <span>{errors.phone?.message}</span>
                                                </Form.Group>
                                            </Col>

                                            {/*password*/}
                                            <Col lg="6" style={{margin: "4px 0px "}}>
                                                <Form.Group className="form-group">
                                                    <Form.Label
                                                        htmlFor="password"
                                                        className=""
                                                        style={{fontWeight: "600", fontSize: "1.2rem"}}
                                                    >
                                                        Password
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        {...register("password")}
                                                        placeholder=" "
                                                    />
                                                    <span>{errors.password?.message}</span>

                                                </Form.Group>
                                            </Col>

                                            {/*reEnterPassword*/}
                                            <Col lg="6" style={{margin: "4px 0px "}}>
                                                <Form.Group className="form-group">
                                                    <Form.Label
                                                        htmlFor="confirmpw"
                                                        className=""
                                                        style={{fontWeight: "600", fontSize: "1.2rem"}}
                                                    >
                                                        Confirm Password
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        {...register("reEnterPassword")}
                                                        name="reEnterPassword"
                                                        id="confirm-password"
                                                        placeholder=" "
                                                    />
                                                    <span>{errors.reEnterPassword?.message}</span>
                                                </Form.Group>
                                            </Col>

                                            {/*checkbox isAgree*/}
                                            <Col lg="12" className="d-flex justify-content-center" style={{
                                                flexDirection: "column", margin: "4px 0px ",
                                            }}
                                            >
                                                <Form.Check
                                                    className="form-check"
                                                    style={{
                                                        display: "flex", justifyContent: "center", gap: "6px",
                                                    }}
                                                >
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        id="customCheck1"
                                                        {...register("isAgree")}
                                                    />
                                                    <Form.Check.Label htmlFor="customCheck1">
                                                        I agree with the terms of use
                                                    </Form.Check.Label>
                                                </Form.Check>
                                                <span>{errors.reEnterPassword?.message}</span>
                                            </Col>
                                        </Row>

                                        {/*Button  SignUp*/}
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

                                        {/*social*/}
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
                                                        <Image src={facebook} alt="fb"/>
                                                    </Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="list-group-item border-0 pb-0"
                                                >
                                                    <Link to="#">
                                                        <Image src={google} alt="gm"/>
                                                    </Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="list-group-item border-0 pb-0"
                                                >
                                                    <Link to="#">
                                                        <Image src={instagram} alt="im"/>
                                                    </Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="list-group-item border-0 pb-0"
                                                >
                                                    <Link to="#">
                                                        <Image src={linkedin} alt="li"/>
                                                    </Link>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>

                                        {/*Already have an Account*/}
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
    </>);
};

export default SignUp;
