import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";
import { BRAND_NAME } from "../Global";
import SideBar from "./SideBar";
import React, { useState } from "react";
import CartScreen from "./CartScreen";

function CustomNavbar({onOrderConform}) {
  const [openSideBase, setOpenSideBase] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleShow = () => setOpenSideBase((s) => !s);
  const handleCart = ()=>setShowCart((s) => !s);
  return (
    <Navbar className="bg-body-tertiary">
      <SideBar show={openSideBase} setOpenSideBase={setOpenSideBase} />
      <CartScreen showCart={showCart} setShowCart={setShowCart} onOrderConform={onOrderConform} />
      <Container>
        <Navbar.Brand href="/">{BRAND_NAME}</Navbar.Brand>
        <div>
          <Button type="submit" onClick={handleCart}>
            <i className="bi bi-bag-fill"></i> Cart
          </Button>
          {" "}
          <Button onClick={handleShow}>More</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
