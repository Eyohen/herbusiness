import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const personal = () => {
    navigate("/personal");
  };
  const food = () => {
    navigate("/food");
  };
  const home = () => {
    navigate("/home");
  };
  return (
    <div className="products">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h3
            style={{
              fontSize: 64,
              fontWeight: "400",
              marginLeft: 100,
              marginTop: 276,
              fontFamily: "Goudy Old Style Regular",
            }}
          >
            Featured Products
          </h3>
          <h4
            style={{
              fontSize: 40,
              fontWeight: "400",
              marginLeft: 100,
              fontFamily: "Book Antiqua",
            }}
          >
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit. Non lacus <br />
            cursus ut nec non id aliquam nibh <br />
            libero. Tortor quam pharetra neque.
          </h4>
        </div>

        <img
          alt="#"
          src="https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          style={{ width: 597, height: 726, marginTop: 56, marginLeft: 151 }}
        ></img>
      </div>
      <div
        style={{
          color: "#CAB8A2",
          fontSize: 250,
          fontWeight: "600",
          marginLeft: 501,
        }}
      >
        Products
      </div>
      <div style={{ marginLeft: 30, marginBottom: 50 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            id="personal"
            onClick={personal}
            className="smallimage"
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          ></img>
          <h6 className="personal">PERSONAL CARE</h6>
          <img
            id="food"
            onClick={food}
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="food">FOOD</h6>
          <img
            id="home"
            onClick={home}
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="home">HOME</h6>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="health">HEALTH</h6>
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="clothing">CLOTHING</h6>
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="accessories">ACCESSORIES</h6>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="kids">KIDS</h6>
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="cleaning">CLEANING</h6>
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="smallimage"
          ></img>
          <h6 className="hair">HAIR</h6>
        </div>
      </div>
    </div>
  );
}

export default Product;
