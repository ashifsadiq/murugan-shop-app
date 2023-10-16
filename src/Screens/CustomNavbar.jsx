import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../Global";
import SideBar from "./SideBar";
import React, { useEffect, useState } from "react";
import CartScreen from "./CartScreen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";

function CustomNavbar({ onOrderConform }) {
  const [openSideBase, setOpenSideBase] = useState(false);
  const data = useSelector((state) => state.data) || [];
  const [showCart, setShowCart] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [count, setCount] = useState(0);
  const handleShow = () => setOpenSideBase((s) => !s);
  const handleCart = () => setShowCart((s) => !s);
  const handleGallery = () => setShowGallery((s) => !s);
  const navigate = useNavigate();
  const [TotalPrice, setTotalPrice] = useState("");
  const handleAbout = () => {
    navigate("/about");
  };
  const handledoanddont = () => {
    navigate("/DoandDont");
  };

  useEffect(() => {
    let temp = 0;
    let totalPrice = 0;
    data.forEach((category) => {
      category.products.forEach((product) => {
        if (product.qty > 0) {
          temp += product.qty;
          // const productTotal = product.qty * parseFloat(product.price);
          const productTotal =
            product.qty *
            (
              (parseFloat(product.price) / 100) *
              parseFloat(product.discount)
            );
          totalPrice += productTotal;
        }
      });
    });
    setTotalPrice(totalPrice);
    setCount(temp);
  }, [data]);

  
  return (
    <Navbar  style={{ backgroundColor: "#701f47" }}  expand="lg">
      <SideBar show={openSideBase} setOpenSideBase={setOpenSideBase} />
      <CartScreen
        showCart={showCart}
        setShowCart={setShowCart}
        onOrderConform={onOrderConform}
      />
      <Gallery setShowGallery={setShowGallery} showGallery={showGallery} />
      <Container style={{
        display:'flex'
      }}>

        <Navbar.Brand href="/" style={{ fontFamily: "revert-layer" ,color:"#ddd" }}>
          {BRAND_NAME}
        </Navbar.Brand>
        <div style={{flex:10}} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <div className="d-flex"  >
            <Button
              variant="outline-light"
              className="me-3"
              onClick={handleCart}
            >
              <i className="bi bi-bag-fill"></i> Cart {count > 0 && count} |{" "}
              <strong>RS.{Math.round(TotalPrice)}</strong>
            </Button>
            {""}
            {/* <Button variant="outline-light" className="me-3" onClick={handleShow}>
            <i className="bi bi-arrow-right-circle"></i> More category
          </Button> */}
            <Button
              variant="outline-light"
              className="me-3"
              onClick={handleGallery}
            >
              Gallery
            </Button>
            <Button
              variant="outline-light"
              className="me-3"
              onClick={handledoanddont}
            >
              Do's & Don’ts
            </Button>
            <Button
              variant="outline-light"
              className="me-3"
              onClick={handleAbout}
            >
              <i className="bi bi-info-circle"></i> About
            </Button>
            <Button
              variant="outline-light"
              className="me-3"
              onClick={() =>
                window.open(
                  "https://wa.me/+917010448281?text=Hi, I like to celebrate this Diwali with Murugan crackers and I have something to clarify with you! Reply me",
                  "_blank"
                )
              }
            >
              <img
                src={require("../images/WhatsApp_icon.png")}
                width={25}
                style={{
                  objectFit: "contain",
                }}
              />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
