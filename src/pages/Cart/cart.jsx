import React from "react";
import "./cart.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Form from "react-bootstrap/Form";
import lap001 from "@/assets/home/product/lap001.jpg";
import { Link } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../redux/slice/cartSlice.js";

const { amountIncrement, amountDecrement } = cartSlice.actions;
export default function Cart() {
  const [allchecked, setAllChecked] = React.useState([]);
  const { productList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }

  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "#db1644", fontSize: "15px" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1
                          className="fw-bold mb-0 text-black"
                          style={{ fontSize: "23px" }}
                        >
                          THÔNG TIN GIỎ HÀNG
                        </h1>
                      </div>
                      <hr className="my-4" />

                      {productList &&
                        productList.map((product, index) => {
                          console.log(index);
                          return (
                            <div
                              key={product.id ?? index}
                              className="row mb-4 d-flex justify-content-between align-items-center"
                            >
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={lap001} alt="" />
                              </div>
                              <div
                                className="col-md-3 col-lg-3 col-xl-3"
                                style={{ fontSize: "15px" }}
                              >
                                <h6 className="text-black mb-0">
                                  {product.name}
                                </h6>
                                <h6 className="text-muted">
                                  Bảo hành: 36 tháng
                                </h6>
                                <h6 className="text-muted">
                                  Mã sản phẩm: MACG1
                                </h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  className="btn btn-link px-2"
                                  onClick={() =>
                                    dispatch(amountDecrement(product))
                                  }
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={product.amount}
                                  type="number"
                                  className="form-control form-control-sm"
                                />

                                <button
                                  className="btn btn-link px-2"
                                  onClick={() =>
                                    dispatch(amountIncrement(product))
                                  }
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">{product.price}VND</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted">
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to="/">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4"></div>
                      <h5 className="text-uppercase mb-3">
                        <div>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-credit-card"
                            viewBox="0 0 16 16"
                            style={{
                              float: "left",
                              marginRight: "10px",
                              color: "red",
                            }}
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                          </svg>{" "}
                        </div>
                        <h1 style={{ color: "red" }}> HÌNH THỨC THANH TOÁN</h1>
                      </h5>
                      <div className="mb-4 pb-2">
                        <div>
                          {" "}
                          <Form>
                            {["radio"].map((type) => (
                              <div
                                key={`reverse-${type}`}
                                className="mb-3"
                                style={{ width: "100%" }}
                              >
                                <Form.Check
                                  reverse
                                  label="Thanh toán tiền mặt khi nhận hàng"
                                  name="group1"
                                  type={type}
                                  id={`reverse-${type}-1`}
                                />
                                <Form.Check
                                  reverse
                                  label="Thanh toán chuyển khoản qua tk ngân hàng"
                                  name="group1"
                                  type={type}
                                  id={`reverse-${type}-2`}
                                />
                              </div>
                            ))}
                          </Form>
                        </div>
                      </div>
                      <div className="mb-5">
                        <div className="form-outline">
                          <div>
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                              placeholder="Mã Voucher"
                            />
                          </div>
                          <div>
                            {" "}
                            <button
                              style={{
                                width: "100%",
                                height: "30px",
                                background: "#db1644",
                                marginTop: "10px",
                                color: "white",
                              }}
                            >
                              Nhập mã Voucher
                            </button>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>
                          {productList.reduce((result, product) => {
                            return (result += product.price * product.amount);
                          }, 0)}
                          VND
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
