// components/Home.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, createData } from "../redux/action";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import CustomNavbar from "./CustomNavbar";
import CartScreen from "./CartScreen";

const Home = () => {
  const homeData = useSelector((state) => state.homeData) || [];
  const currentCatIndex = useSelector((state) => state.currentCatIndex);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    fetch("https://adminmurugan.ashifsadiq.in/api/products_with_categories.php")
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(createData(resJson));
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentCatIndex]); // Fetch data when currentCatIndex changes

  return (
    <React.Fragment>
      <style>
        {`
          body {
            background-color: #ddd;
            color: white;
          }
        `}
      </style>
      <div className="col-md-12 px-0 py-0">
        <div
          className="py-2 px-2 marquee L"
          style={{ backgroundColor: "#000000", color: "red" }}
        >
          <div className="marquee-content">60 % Discount</div>
        </div>
      </div>
      <CustomNavbar onOrderConform={fetchData} />

      <Container className="justify-content-md-center">
        {Array.isArray(homeData) && homeData.length > 0 ? (
          currentCatIndex > 0 ? ( // Display a specific category
            <React.Fragment>
              <h3
                style={{
                  textAlign: "center",
                  color: "black",
                  fontFamily: "initial",
                }}
              >
                {homeData[currentCatIndex].category_eng_name}{" "}
                {homeData[currentCatIndex].category_tam_name}
              </h3>
              <Row className="justify-content-md-center" key={refresh}>
                {homeData[currentCatIndex].products.map((item, index) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card style={{ width: "18rem", margin: 6 }}>
                      <Card.Body>
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
                          <span>{` ${(
                            (parseInt(item.price) / 100) *
                            parseInt(item.discount)
                          ).toFixed(2)} `}</span>
                        </Card.Subtitle>
                        {/* {item.discount !== "" && (
                          <Card.Subtitle className="mb-2 text-muted">
                            <span style={{ color: "green" }}>
                              {item.discount}% Discount
                            </span>
                          </Card.Subtitle>
                        )} */}
                        {item.qty <= 0 ? (
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
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </React.Fragment>
          ) : (
            // Display all categories
            homeData.map((category, catIndex) => (
              <React.Fragment key={catIndex}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                  <h3
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontFamily: "initial",
                    }}
                  >
                    {category.category_eng_name} {category.category_tam_name}
                  </h3>
                </div>
                <Row className="justify-content-md-center" key={refresh}>
                  {category.products.map((item, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}>
                      <Card style={{ width: "18rem", margin: 6 }}>
                        <Card.Body>
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
                            <span>{` ${(
                              (parseFloat(item.price) / 100) *
                              parseFloat(item.discount)
                            ).toFixed(2)} `}</span>
                          </Card.Subtitle>
                          {/* {item.discount !== "" && (
                            <Card.Subtitle className="mb-2 text-muted">
                              <span style={{ color: "green" }}>
                                {item.discount}% Discount
                              </span>
                            </Card.Subtitle>
                          )} */}
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
                                    decrement({ cat: catIndex, item: index })
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
                                    increment({ cat: catIndex, item: index })
                                  );
                                  setRefresh((b) => !b);
                                }}
                              >
                                +
                              </Button>
                            </React.Fragment>
                          )}
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
      </Container>
    </React.Fragment>
  );
};

export default Home;
