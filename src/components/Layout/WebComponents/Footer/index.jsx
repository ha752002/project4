import classNames from "classnames/bind";
import Styles from "./Footer.module.scss";
import clsx from "clsx";
import {MDBFooter , MDBContainer ,MDBRow ,MDBCol} from "mdb-react-ui-kit"
function Footer() {

  const myStyle = {
    color: "blue",
    fontSize: "16px",
  };
  const red = {
    color: "red",
  };

  return (
    <footer >
       <div className={clsx(Styles.flex)}>
            <MDBFooter className=" text-black mt-5 ">
              <MDBContainer className="p-4">
                <MDBRow>
                  <MDBCol lg="3" md="12" className="mb-4 mb-md-0">
                    {/* <img src={logo_mac} alt="" className="mb-4" /> */}

                    <ul className="list-unstyled ">
                      <li>
                        <a href="#!" className="">
                          <p>
                            {" "}
                            VPGD & Showroom: 91 Nguyễn Xiển, Thanh Xuân, Hà Nội
                          </p>
                        </a>
                        <a href="#!" className="">
                          <p>
                            Showroom TP.HCM: 415A Trường Chinh, Tân Bình, TP Hồ
                            Chí Minh
                          </p>
                        </a>

                        <a href="#!" className="">
                          <p>Email: mac@minhancomputer.com</p>
                        </a>
                        <a href="#!" className="">
                          <p>Thời gian mở cửa: 8h15 - 17h45 hàng ngày</p>
                        </a>
                        <a href="#!" className="">
                          <p>Thời gian mở cửa: 8h15 - 17h45 hàng ngày</p>
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-md-0 ">
                    <h5 className="text-uppercase ">
                      Đường dây nóng (Click Để Gọi)
                    </h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!">
                          <p>
                            Tổng đài tư vấn kinh doanh (miễn phí):
                            <a style={red}> 1800.6321</a>
                          </p>
                        </a>
                        <a href="#!">
                          <p>
                            Chăm sóc khách hàng: <a style={red}>02438.777.777 </a>
                            - Nhánh 0
                          </p>
                        </a>
                        <a href="#!">
                          <p>
                            {" "}
                            Kỹ thuật - bảo hành Hà Nội:{" "}
                            <a style={red}>02438.777.777 </a>- Nhánh 1
                          </p>
                        </a>
                        <a href="#!" className="">
                          <p>
                            {" "}
                            Kỹ thuật - bảo hành TP.HCM:{" "}
                            <a style={red}>02438.777.777 </a> - Nhánh 2
                          </p>
                        </a>
                        <a href="#!" className="">
                          <p>
                            {" "}
                            Kế toán: <a style={red}>02438.777.777</a> - Nhánh 3
                          </p>
                        </a>
                        <a href="#!" className="">
                          <p style={myStyle}>
                            Góp ý - Khiếu nại: 0989.360.308 - Mr. Huấn
                          </p>
                        </a>
                        <a href="#!" className="text-black fs-4">
                          <p> Hỗ trợ khách hàng</p>
                        </a>
                        <a href="#!" className="">
                          <p> Hướng dẫn mua hàng online</p>
                        </a>
                        <a href="#!" className="">
                          <p> Phương thức thanh toán</p>
                        </a>
                        <a href="#!" className="">
                          <p> Hướng dẫn mua hàng trả góp</p>
                        </a>
                        <a href="#!" className="">
                          {/* <img style={bo_cong_thuong} src={bocongthuong} /> */}
                          {/* <img src={bocongthuong1} /> */}
                        </a>{" "}
                        <a href="#!" className="">
                          {/* <img style={tinnhiemmang} src={bocongthuong2} /> */}
                        </a>
                        <a href="#!" className="">
                          {/* <img src={footer_payment} /> */}
                        </a>
                      </li>
                    </ul>
                  </MDBCol>

                  <MDBCol lg="3" md="6" className="mb-4 mb-md-0 ">
                    <h5 className="text-uppercase mb-0">Chính sách chung</h5>

                    <ul className="list-unstyled ">
                      <li>
                        <a href="#!" className="">
                          <p> Quy định truy cập Website</p>
                        </a>
                        <a href="#!" className="">
                          <p> Chính sách bảo mật thông tin</p>
                        </a>
                        <a href="#!" className="">
                          <p> Chính sách vận chuyển, giao nhận</p>
                        </a>
                        <a href="#!" className="">
                          <p> Chính sách cho doanh nghiệp</p>
                        </a>
                        <a href="#!" className="">
                          <p>Chính sách bảo hành, đổi trả</p>
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                  <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-0">Thông tin chung</h5>

                    <ul className="list-unstyled ">
                      <li>
                        <a href="#!" className="">
                          <p> Giới thiệu công ty</p>
                        </a>
                        <a href="#!" className="">
                          <p>Thông tin liên hệ</p>
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              >
                Copyright ©
                <a className="" href="">
                  CÔNG TY CỔ PHẦN DỊCH VỤ THƯƠNG MẠI MINH AN GROUP. Giấy phép kinh
                  doanh: 0108588845 - do sở KH & ĐT TP. Hà Nội cấp ngày
                  16/01/2019, đăng ký thay đổi lần 2 ngày 12/05/2022. All rights
                  reserved.
                </a>
              </div>
            </MDBFooter>
          </div>
    </footer>
  );
}

export default Footer;
