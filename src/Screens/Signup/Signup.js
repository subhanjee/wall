import React from "react";
import { Row, Col, Button } from "antd";
import "./style.css";
import Signupform from "./Signupform";
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

function Signup() {
  return (
    <div style={{ height: "100vh" }}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={20} sm={20} md={24} lg={12}>
          <div className="log">
            <div>
              <img src="/log.png" alt="" />
            </div>
            <h2 className="text">Get Started with The Wall</h2>
            <p className="text1">Make a wish and get it done.</p>
            <div className="googlediv">
              <Button className="button">
                <img className="logo" src="/googleicon.png" alt="" />
                <p className="text2">Sign in with Google</p>
              </Button>
              <div className="line">
              <hr className="line1"/>
             <p className="text3"> or Sign in with Email</p>
              <hr className="line1"/>
              </div>
              <div style={{width:"50%"}}>
                  <Signupform/>
              </div>
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
export default Signup;
