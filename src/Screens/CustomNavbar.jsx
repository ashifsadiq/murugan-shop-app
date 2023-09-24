import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button, Form } from "react-bootstrap";
import { BRAND_NAME } from "../Global";
import SideBar from "./SideBar";
import React, { useEffect, useState } from "react";
import CartScreen from "./CartScreen";
import { useSelector } from "react-redux";

function CustomNavbar({ onOrderConform }) {
  const [openSideBase, setOpenSideBase] = useState(false);
  const data = useSelector((state) => state.data) || [];
  const [showCart, setShowCart] = useState(false);
  const [count, setCount] = useState(0);
  const handleShow = () => setOpenSideBase((s) => !s);
  const handleCart = () => setShowCart((s) => !s);
  useEffect(() => {
    let temp = 0;
    data.map((item, index) =>
      item.products.map((product) => {
        if (product.qty > 0) {
          temp += product.qty;
        }
      })
    );
    setCount(temp);
  }, [data]);
  return (
    <Navbar className="bg-body-tertiary">
      <SideBar show={openSideBase} setOpenSideBase={setOpenSideBase} />
      <CartScreen
        showCart={showCart}
        setShowCart={setShowCart}
        onOrderConform={onOrderConform}
      />
      <Container>
        <Navbar.Brand href="/">{BRAND_NAME}</Navbar.Brand>
        <div>
          <Button type="submit" onClick={handleCart}>
            <i className="bi bi-bag-fill"></i> Cart {count > 0 && count}
          </Button>{" "}
          <Button onClick={handleShow}>More</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
