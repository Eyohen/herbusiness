import React from "react";
import {
  AppstoreOutlined,
  CreditCardOutlined,
  BankOutlined,
  EditOutlined,
  WalletOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";

function Stuff() {
  return (
    <div
      style={{
        height: 200,
        width: 1000,
        backgroundColor: "#FFEBCD",
        //   opacity: 0.4,
        marginLeft: 300,
        marginTop: 100,
        borderRadius: 15,
        boxShadow: ` 0px 20px 50px ${"#C0C0C0"}`,
        marginBottom: 40,
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
        alt=""
        style={{
          width: 250,
          height: 150,
          marginTop: 25,
          marginLeft: 25,
          borderRadius: 10,
        }}
      ></img>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: -160,
          marginLeft: 280,
        }}
      >
        <div
          style={{
            color: "#3C3C3C",
            fontSize: 22,
            fontWeight: "500",
            //   marginTop: 20,
            marginLeft: 25,
          }}
        >
          VolkWagen Motors Inc.
        </div>
        <div
          style={{
            color: "#3C3C3C",
            fontSize: 18,
            fontWeight: "600",
            //   marginTop: 20,
            marginLeft: 280,
          }}
        >
          +234-905-123456
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 280,
        }}
      >
        <div>
          <h6
            style={{
              color: "#3C3C3C",
              fontSize: 18,
              fontWeight: "600",
              marginTop: 0,
              marginLeft: 25,
            }}
          >
            Zip Code
          </h6>
          <h6 className="zipcode">100378</h6>
        </div>
        <div>
          <h6
            style={{
              color: "#3C3C3C",
              fontSize: 18,
              fontWeight: "600",
              marginTop: 0,
              marginLeft: 100,
            }}
          >
            Email
          </h6>
          <h6 className="email">herbusiness@gmailoryahoo.com</h6>
        </div>

        <div>
          <h6
            style={{
              color: "#3C3C3C",
              fontSize: 18,
              fontWeight: "600",
              marginTop: 0,
              marginLeft: 100,
            }}
          >
            Website
          </h6>
          <h6 className="website">www.herbusiness.com</h6>
        </div>
      </div>
      <h6 className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor
        molestie vulputate.
        <br /> Aenean a imperdiet sem, non faucibus mauris. Nullam tempor leo ut
        metus cursus mattis.
        <br />
      </h6>
    </div>
  );
}

function Personal() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="smalltag">
          <h6 className="location">location</h6>
        </div>

        <div
          className="smalltag"
          style={{
            height: 50,
            width: 200,
            backgroundColor: "#FFEBCD",
            opacity: 0.4,
            marginLeft: 30,
            marginTop: 200,
            borderRadius: 15,
            boxShadow: ` 0px 20px 50px ${"#000000"}`,
          }}
        >
          <h6 className="location">location</h6>
          <div style={{ color: "000", marginLeft: -90, marginTop: -60 }}>
            <SearchOutlined />
          </div>
        </div>
        <div
          className="smalltag"
          style={{
            height: 50,
            width: 200,
            backgroundColor: "#FFEBCD",
            opacity: 0.4,
            marginLeft: 30,
            marginTop: 200,
            borderRadius: 15,
            boxShadow: ` 0px 20px 50px ${"#000000"}`,
          }}
        >
          <h6 className="location">Services</h6>
          <div style={{ color: "000", marginLeft: -90, marginTop: -60 }}>
            <DownOutlined />
          </div>
        </div>
        <div
          className="smalltag"
          style={{
            height: 50,
            width: 200,
            backgroundColor: "#FFEBCD",
            opacity: 0.4,
            marginLeft: 30,
            marginTop: 200,
            borderRadius: 15,
            boxShadow: ` 0px 20px 50px ${"#000000"}`,
          }}
        >
          <h6 className="location">type</h6>
          <div style={{ color: "000", marginLeft: -90, marginTop: -60 }}>
            <DownOutlined />
          </div>
        </div>
      </div>

      <Stuff />
      <Stuff />
      <Stuff />
      <Stuff />
      <Stuff />
      <Stuff />
      {/* <div
        style={{
          height: 200,
          width: 1000,
          backgroundColor: "#FFEBCD",
          //   opacity: 0.4,
          marginLeft: 300,
          marginTop: 100,
          borderRadius: 15,
          boxShadow: ` 0px 20px 50px ${"#C0C0C0"}`,
          marginBottom: 45,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
          alt=""
          style={{
            width: 250,
            height: 150,
            marginTop: 25,
            marginLeft: 25,
            borderRadius: 10,
          }}
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: -160,
            marginLeft: 280,
          }}
        >
          <div
            style={{
              color: "#3C3C3C",
              fontSize: 22,
              fontWeight: "500",
              //   marginTop: 20,
              marginLeft: 25,
            }}
          >
            VolkWagen Motors Inc.
          </div>
          <div
            style={{
              color: "#3C3C3C",
              fontSize: 18,
              fontWeight: "600",
              //   marginTop: 20,
              marginLeft: 280,
            }}
          >
            +234-905-123456
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 280,
          }}
        >
          <div>
            <h6
              style={{
                color: "#3C3C3C",
                fontSize: 18,
                fontWeight: "600",
                marginTop: 0,
                marginLeft: 25,
              }}
            >
              Zip Code
            </h6>
            <h6 className="zipcode">100378</h6>
          </div>
          <div>
            <h6
              style={{
                color: "#3C3C3C",
                fontSize: 18,
                fontWeight: "600",
                marginTop: 0,
                marginLeft: 100,
              }}
            >
              Email
            </h6>
            <h6 className="email">herbusiness@gmailoryahoo.com</h6>
          </div>

          <div>
            <h6
              style={{
                color: "#3C3C3C",
                fontSize: 18,
                fontWeight: "600",
                marginTop: 0,
                marginLeft: 100,
              }}
            >
              Website
            </h6>
            <h6 className="website">www.herbusiness.com</h6>
          </div>
        </div>
        <h6 className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor
          molestie vulputate.
          <br /> Aenean a imperdiet sem, non faucibus mauris. Nullam tempor leo
          ut metus cursus mattis.
          <br />
        </h6>
      </div> */}
    </div>
  );
}

export default Personal;
