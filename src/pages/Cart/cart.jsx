import React from "react";
import "./cart.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import lap001 from "@/assets/home/product/lap001.jpg";
import {Link} from "react-router-dom";
import {Checkbox} from "@material-tailwind/react";
import {useDispatch, useSelector} from "react-redux";
import {cartSlice} from "../../redux/slice/cartSlice.js";

const {amountIncrement, amountDecrement} = cartSlice.actions;
export default function Cart() {
    const [allchecked, setAllChecked] = React.useState([]);
    const {productList} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    function handleChange(e) {
        if (e.target.checked) {
            setAllChecked([...allchecked, e.target.value]);
        } else {
            setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
    }

    return (<section
            className="h-100 h-custom"
            style={{backgroundColor: "#db1644", fontSize: "15px"}}
        >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div
                            className="card card-registration card-registration-2"
                            style={{borderRadius: "15px"}}
                        >
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1
                                                    className="fw-bold mb-0 text-black"
                                                    style={{fontSize: "23px"}}
                                                >
                                                    THÔNG TIN GIỎ HÀNG
                                                </h1>
                                            </div>
                                            <hr className="my-4"/>

                                            {productList && productList.map((product, index) => {
                                                console.log(index)
                                                return (<div key={product.id ?? index}
                                                             className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img src={lap001} alt=""/>
                                                        </div>
                                                        <div
                                                            className="col-md-3 col-lg-3 col-xl-3"
                                                            style={{fontSize: "15px"}}
                                                        >
                                                            <h6 className="text-black mb-0">
                                                                {product.name}
                                                            </h6>
                                                            <h6 className="text-muted">Bảo hành: 36 tháng</h6>
                                                            <h6 className="text-muted">Mã sản phẩm: MACG1</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                            <button
                                                                className="btn btn-link px-2"
                                                                onClick={() => dispatch(amountDecrement(product))}
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
                                                                onClick={() => dispatch(amountIncrement(product))}
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
                                                    </div>)

                                            })}
                                            <hr className="my-4"/>

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
                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">items 3</h5>
                                                <h5>€ 132.00</h5>
                                            </div>

                                            <h5 className="text-uppercase mb-3">
                                                HÌNH THỨC THANH TOÁN
                                            </h5>

                                            <div className="mb-4 pb-2">
                                                <div>
                                                    <div>
                                                        <input
                                                            value="Thanh toán khi nhận hàng"
                                                            type="radio"
                                                            onChange={handleChange}
                                                            style={{marginRight: "7px"}}
                                                        />
                                                        <span>Thanh toán khi nhận hàng </span>
                                                    </div>

                                                    <div>
                                                        <input
                                                            value="Thanh toán chuyển khoản qua tài khoản ngân hàng"
                                                            type="radio"
                                                            onChange={handleChange}
                                                            style={{marginRight: "7px"}}
                                                        />
                                                        <span>
                              Thanh toán chuyển khoản qua tài khoản ngân hàng{" "}
                            </span>
                                                    </div>

                                                    <div>Bạn đã chọn: {allchecked.join(" , ")}</div>
                                                </div>
                                            </div>

                                            <h5 className="text-uppercase mb-3">Give code</h5>

                                            <div className="mb-5">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Examplea2"
                                                        className="form-control form-control-lg"
                                                    />
                                                    <label className="form-label" for="form3Examplea2">
                                                        Enter your code
                                                    </label>
                                                </div>
                                            </div>

                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>{productList.reduce((result, product) => {
                                                    return result += (product.price * product.amount)
                                                }, 0)}VND</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
