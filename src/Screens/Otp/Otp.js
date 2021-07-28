import React from "react";
import { Row, Col } from "antd";
import {ArrowLeftOutlined} from  "@ant-design/icons";
import "./style.css";

// import "./style.css";
// import Loginform from "./Loginform";
const backgroundURL = "/images/ab.png";
const backgroundStyle = {
  backgroundImage: `url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  height: "100vh",
};
const backgroundURL1 = "/images/react.png";
const backgroundStyle1 = {
  backgroundImage: `url(${backgroundURL1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  height: "100vh",
};

function Otp() {
  return (
    <div style={{ height: "100vh" }}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={20} sm={20} md={24} lg={12}>
          <div className="otp1">
            <div>
              <img src="/log.png" alt="" />
            </div>
            <div className="otp2">
       <p className="otp3"> < ArrowLeftOutlined style={{ fontSize: "1.4em"}} />    Go back </p>
            </div>
            <div>
              <p className="otp4">Enter 4 digit OTP send to your email </p>
            </div>
          </div>
        </Col>
        <Col style={backgroundStyle} xs={0} sm={0} md={0} lg={12}>
          <div
            className="d-flex flex-column justify-content-between h-100 px-4 "
            style={backgroundStyle1}
          ></div>
        </Col>
      </Row>
    </div>  
  );
}
export default Otp;
