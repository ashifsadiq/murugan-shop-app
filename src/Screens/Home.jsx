import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, createData } from "../redux/action";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import CartScreen from "./CartScreen";
const Home = () => {
  const homeData = useSelector((state) => state.homeData) || [];
  const currentCatIndex = useSelector((state) => state.currentCatIndex) || 0;
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  // const dispatch = useDispatch();
  const fetchData = () => {
    fetch(
      "https://adminmurugan.ashifsadiq.in/api/products_with_categories.php"
    )
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(createData(resJson));
      });
  };
  useEffect(fetchData, []);
  return (
    <React.Fragment>
      <CustomNavbar onOrderConform={fetchData}  />
      <Container className="justify-content-md-center">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          {homeData.category_eng_name} {homeData.category_tam_name}
        </h3>
        <Row className="justify-content-md-center" key={refresh}>
          {homeData.products?.length > 0 &&
            homeData.products.map((item, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <Card style={{ width: "18rem" }}>
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
                    {item.discount != "" && (
                      <Card.Subtitle className="mb-2 text-muted">
                        <span style={{ color: "green" }}>
                          {item.discount}% Discount
                        </span>
                      </Card.Subtitle>
                    )}
                    {item.qty <= 0 ? (
                      <Button
                        variant="primary"
                        onClick={() => {
                          dispatch(
                            increment({ cat: currentCatIndex, item: index })
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
                              decrement({ cat: currentCatIndex, item: index })
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
                              increment({ cat: currentCatIndex, item: index })
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
      </Container>
    </React.Fragment>
  );
};

export default Home;
