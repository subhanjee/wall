import React from "react";
import { Layout, Menu, Button, Input } from "antd";
import "./Style.css";
import { Link } from "react-router-dom";

const { Header, Sider } = Layout;

export default function Home() {
  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100vw",
            height: "80px",
            backgroundColor: "white",
          }}
        >
          <div className="header1">
            <div >
            <img
              style={{ width: "75px", height: "60px", marginTop: "8px" }}
              src="/log.png"
              alt=""
            />
            </div>
            <div >
              <Input 
                style={{ borderRadius: "32.5px", height: "30%", width: "150%" }}  
                placeholder="Search..." 
              />
            </div>
            <div className="header2">
              <img src="/avatar.png" alt="" />
              <p className="headertext"> Hashir Khan</p>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider
            width={260}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              backgroundColor: "white",
              paddingLeft: "20px",
            }}
          >
            <div
              style={{
                height: "5em",
                backgroundColor: "white",
                zIndex: "1",
                width: "90%",
                borderRadius: "20px",
                marginTop: "5em",
                marginLeft: "1em",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1) ",
              }}
            >
              <div>
                <div className="home">
                  <div className="homelogo">
                    <img src="/avatar.png" alt="" />
                  </div>
                  <div className="home1">
                    <p className="home2"> Hashir Khan</p>
                    <p className="home3">@hashirkhan23</p>
                  </div>
                </div>
              </div>

              <Menu
                style={{
                  marginTop: "2rem",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "20px",
                  width: "100%",
                }}
                mode="inline"
                defaultSelectedKeys={["1"]}
              >
                <Menu.Item className="home4" key="1">
                  <img src="/Vector.png" alt="" /> Home
                </Menu.Item>
                <Menu.Item className="home4" key="2">
                  <img src="/Vector1.png" alt="" /> Profile
                </Menu.Item>
                <Menu.Item className="home4" key="3">
                  <img src="/Vector3.png" alt="" /> Photos
                </Menu.Item>
                <Menu.Item className="home4" key="4">
                  <img src="/Vector2.png" alt="" /> Support
                </Menu.Item>
                <Menu.Item className="home4" key="5">
                  <img src="/Vector4.png" alt="" /> Setting
                </Menu.Item>
              </Menu>
              <div className="home5">
                <p className="home6">INVITATIONS</p>
                <div>
                  <img className="home7" src="/images/sale.png" alt="" />
                </div>
                <div className="home8">
                  <div>
                    <Button
                      style={{
                        backgroundColor: "#627BE0",
                        marginTop: "1.5em",
                        width: "160px",
                        height: "50px",
                        borderRadius: "32.5px",
                        fontFamily: "Poppins",
                        fontWeight: "700",
                      }}
                    >
                      Accept Invitaion
                    </Button>
                  </div>
                  <div className="home9">
                    <Link>
                      <img style={{}} src="/mark.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}
