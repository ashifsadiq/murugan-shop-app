import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, createData } from "../redux/action";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import CustomNavbar from "./CustomNavbar";
import CartScreen from "./CartScreen";
import "./HomePage.css";

import img1 from "../images/sale.jpg";

const Home = () => {
  const homeData = useSelector((state) => state.homeData) || [];
  const currentCatIndex = useSelector((state) => state.currentCatIndex);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const fetchData = () => {
    fetch("https://adminmurugan.ashifsadiq.in/api/products_with_categories.php")
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(createData(resJson));
      });
  };


  useEffect(() => {
    fetchData();
  }, [currentCatIndex]);

  return (
    <React.Fragment>
      <style>
        {`
    body {
      background: rgb(108,213,212);
background: -moz-linear-gradient(90deg, rgba(108,213,212,1) 1%, rgba(139,168,93,1) 10%, rgba(121,120,198,1) 30%, rgba(105,175,180,1) 44%, rgba(97,246,94,1) 58%, rgba(138,212,205,1) 71%, rgba(188,152,189,1) 84%, rgba(133,119,131,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(108,213,212,1) 1%, rgba(139,168,93,1) 10%, rgba(121,120,198,1) 30%, rgba(105,175,180,1) 44%, rgba(97,246,94,1) 58%, rgba(138,212,205,1) 71%, rgba(188,152,189,1) 84%, rgba(133,119,131,1) 100%);
background: linear-gradient(90deg, rgba(108,213,212,1) 1%, rgba(139,168,93,1) 10%, rgba(121,120,198,1) 30%, rgba(105,175,180,1) 44%, rgba(97,246,94,1) 58%, rgba(138,212,205,1) 71%, rgba(188,152,189,1) 84%, rgba(133,119,131,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6cd5d4",endColorstr="#857783",GradientType=1);  }
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      background-color: #000000;
      color: red;
    }
    .content-container {
      margin-top: 100px;
      overflow: hidden;
    }
  `}
      </style>

      <div className="header">
        <div className="col-md-12 p-5 px-0 py-0">
          <div
            className="py-2 px-2 marquee L"
            style={{
              backgroundColor: "#000000",
              color: "red",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <div
              className="marquee-content"
              style={{ whiteSpace: "nowrap", textOverflow: "clip" }}
            >
              "Diwali Discount 40-85 % Alert! Order now!"
            </div>
          </div>
          <CustomNavbar onOrderConform={fetchData} />
        </div>
      </div>

      <Container
        className="justify-content-md-center padding_top mt-5"
        style={{ marginTop: "20px" }}
      >
        <div>
          <img src={img1} className="page_image p-2"></img>
        </div>

        {Array.isArray(homeData) && homeData.length > 0 ? (
          currentCatIndex > 0 ? (
            <React.Fragment>
              <div >
                <div>
                  <h3
                    style={{
                      color: "black",
                      fontFamily: "Times New Roman, serif",
                      
                    }}
                  >
                    ({homeData[currentCatIndex].category_tam_name})
                  </h3>
                </div>
                <div>
                  <h4
                    style={{
                      color: "black",
                      fontFamily: "Times New Roman, serif",
                    }}
                  >
                    {homeData[currentCatIndex].category_eng_name}
                  </h4>
                </div>
              </div>

              <Row className="justify-content-md-center" key={refresh}>
                {homeData[currentCatIndex].products.map((item, index) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card style={{ width: "18rem", margin: 6 }}>
                      <Card.Body>
                        <div style={{ display: "flex" }}>
                          <div style={{ flex: 1 }}>
                            <Card.Title>{item.english_name} </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {item.tamil_name}
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                              ₹{" "}
                              <span
                                style={{
                                  textDecoration: "line-through",
                                }}
                              >
                                {item.price}
                              </span>
                              <span>{` ${
                                (parseFloat(item.price) / 100) *
                                parseFloat(item.discount)
                              } `}</span>
                            </Card.Subtitle>
                            {item.qty <= 0 ? (
                              <Button
                                variant="primary"
                                onClick={() => {
                                  // onOrderConform(fetchData)
                                  dispatch(
                                    increment({
                                      cat: currentCatIndex,
                                      item: index,
                                    })
                                  );
                                  setRefresh((b) => !b);
                                }}
                              >
                                Add
                              </Button>
                            ) : (
                              <React.Fragment>
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    dispatch(
                                      decrement({
                                        cat: currentCatIndex,
                                        item: index,
                                      })
                                    );
                                    setRefresh((b) => !b);
                                  }}
                                >
                                  -
                                </Button>
                                <Button variant="light">{item.qty}</Button>
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    dispatch(
                                      increment({
                                        cat: currentCatIndex,
                                        item: index,
                                      })
                                    );
                                    setRefresh((b) => !b);
                                  }}
                                >
                                  +
                                </Button>
                              </React.Fragment>
                            )}
                          </div>
                          <div
                            style={{
                              flex: 1,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src={
                                "https://adminmurugan.ashifsadiq.in/CatImage/" +
                                item.category_image
                              }
                              fluid
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </React.Fragment>
          ) : (
            homeData.map((category, catIndex) => (
              <React.Fragment key={catIndex}>
                <Row className="justify-content-md-center">
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <Image
                      style={{
                        borderRadius: 10,
                        width: 100,
                        height: 100,
                        objectFit: "cover",
                        margin: 10,
                      }}
                      src={
                        "https://adminmurugan.ashifsadiq.in/CatImage/" +
                        category.category_image
                      }
                      rounded
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <h3
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontFamily: "initial",
                      }}
                    >
                      {category.category_eng_name} {category.category_tam_name}
                    </h3>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  {category.products.map((item, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}>
                      <Card style={{ width: "18rem", margin: 6 }}>
                        <Card.Body>
                          <div style={{ display: "flex" }}>
                            <div style={{ flex: 1 }}>
                              <Card.Title>{item.english_name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {item.tamil_name}
                              </Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted">
                                ₹{" "}
                                <span
                                  style={{
                                    textDecoration: "line-through",
                                  }}
                                >
                                  {item.price}
                                </span>
                                <span>{` ${Math.round(
                                  (parseFloat(item.price) / 100) *
                                    parseFloat(item.discount)
                                )} `}</span>
                              </Card.Subtitle>
                              {item.qty <= 0 ? (
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    dispatch(
                                      increment({ cat: catIndex, item: index })
                                    );
                                    setRefresh((b) => !b);
                                  }}
                                >
                                  Add
                                </Button>
                              ) : (
                                <React.Fragment>
                                  <Button
                                    variant="primary"
                                    onClick={() => {
                                      dispatch(
                                        decrement({
                                          cat: catIndex,
                                          item: index,
                                        })
                                      );
                                      setRefresh((b) => !b);
                                    }}
                                  >
                                    -
                                  </Button>
                                  <Button variant="light">{item.qty}</Button>
                                  <Button
                                    variant="primary"
                                    onClick={() => {
                                      dispatch(
                                        increment({
                                          cat: catIndex,
                                          item: index,
                                        })
                                      );
                                      setRefresh((b) => !b);
                                    }}
                                  >
                                    +
                                  </Button>
                                </React.Fragment>
                              )}
                            </div>
                            {/* <div style={{ flex: 1 }}>
                              <Image
                                src={
                                  "https://source.unsplash.com/random/800x600" +
                                  item.category_image
                                }
                                fluid
                                style={{ objectFit: "cover" }}
                              />
                            </div> */}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </React.Fragment>
            ))
          )
        ) : (
          <div>No data available.</div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="primary" onClick={() => setShowCart((e) => !e)}>
            Submit
          </Button>
        </div>
        <CartScreen
          showCart={showCart}
          setShowCart={setShowCart}
          onOrderConform={() => fetchData()}
        />
      </Container>
    </React.Fragment>
  );
};

export default Home;
