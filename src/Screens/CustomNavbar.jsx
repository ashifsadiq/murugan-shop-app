import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
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
  const handleGallery = () => setShowGallery(s=>!s)
  const navigate = useNavigate();
  const [TotalPrice,  setTotalPrice] = useState('');
  const handleAbout = () => {
    navigate('/about');
  };

  useEffect(() => {
    let temp = 0;
    let totalPrice = 0;
    data.forEach((category) => {
      category.products.forEach((product) => {
        if (product.qty > 0) {
          temp += product.qty;
          // const productTotal = product.qty * parseFloat(product.price);
           const productTotal = product.qty * ((parseInt(product.price) / 100) *
            parseInt(product.discount)
          ).toFixed(2)
          totalPrice += productTotal;
        }
      });
    });
    setTotalPrice(totalPrice);
    setCount(temp);
  }, [data]);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <SideBar show={openSideBase} setOpenSideBase={setOpenSideBase} />
      <CartScreen
        showCart={showCart}
        setShowCart={setShowCart}
        onOrderConform={onOrderConform}
      />
      <Gallery setShowGallery={setShowGallery} showGallery={showGallery}  />
      <Container>
        <Navbar.Brand href="/" style={{fontFamily:'revert-layer'}}>{BRAND_NAME}</Navbar.Brand>
        <div className="d-flex">
          <Button variant="outline-light" className="me-3" onClick={handleCart}>
            <i className="bi bi-bag-fill" ></i> Cart {count > 0 && count} | <strong>RS.{TotalPrice}</strong> 
          </Button>{""}
          <Button variant="outline-light" className="me-3" onClick={handleShow}>
            <i className="bi bi-arrow-right-circle"></i> More category
          </Button>
          <Button variant="outline-light" className="me-3" onClick={handleGallery}>
            Gallery
          </Button>
          <Button variant="outline-light" className="me-3" onClick={handleAbout}>
            <i className="bi bi-info-circle" ></i> About
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
