import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function CartScreen({ showCart = false, setShowCart, onOrderConform }) {
  const data = useSelector((state) => state.data) || [];
  const handleOpenClose = () => setShowCart(!showCart);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [userInput, setUserInput] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [errorText, setErrorText] = useState("");
  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];
  const handleSubmitOrder = () => {
    if (
      userInput.state != undefined &&
      userInput.name != undefined &&
      userInput.number != undefined &&
      // userInput.email != undefined &&
      // userInput.alt_number != undefined &&
      userInput.city != undefined &&
      userInput.address != undefined &&
      userInput.pin != undefined
    ) {
      setShowAlert(false);
      const tempArray = [];
      data.map((item, index) =>
        item.products.map((product, productIndex) => {
          if (product.qty > 0) {
            tempArray.push({
              product_id: product.product_id,
              qty: product.qty,
            });
          }
        })
      );

      fetch(`https://adminmurugan.ashifsadiq.in/api/placeOrder.php?userData=${JSON.stringify(userInput)}&products=${JSON.stringify(tempArray)}`)
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson)
          if(resJson.success == 1){
            onOrderConform(resJson)
            
            handleOpenClose()
            setErrorText("")
          }else{
            setErrorText(resJson.message)
          }
        });
      // handle order
    } else setShowAlert(true);
  };

  
  useEffect(() => {
    let tempQty = 0;
    let tempPrice = 0;
    data.map((item, index) =>
      item.products.map((product) => {
        if (product.qty > 0) {
          if(parseFloat(product.discount)>0){
            tempPrice += ((parseFloat(product.price)/100)*(product.discount))*(parseFloat(product.qty))
          }
          tempQty += product.qty;
        }
      })
    );
    setPrice((tempPrice));
    setCount(tempQty);
  }, [data]);

  
  return (
    <>
      <Modal
        show={showCart}
        onHide={handleOpenClose}
        fullscreen={true}
        autoFocus
      >
        <Modal.Header  style={{ backgroundColor: '#00ffbf' }}>
          <Modal.Title style={{color:'black'}}>Ready To Check Out ! </Modal.Title>
          <Button variant="secondary" onClick={()=>setShowCart(false)}>
            Back
          </Button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#00ffbf' }}>
          <Container>
           
            <Row>
              <Col>
                <InputGroup
                  size="2m"
                  style={{
                    margin: 10,
                  }}
                >
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Name
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) =>
                      setUserInput((s) => ({ ...s, name: e.target.value }))
                    }
                  />
                </InputGroup>
                <InputGroup
                  size="2m"
                  style={{
                    margin: 10,
                  }}
                >
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Contact Number
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) =>
                      setUserInput((s) => ({ ...s, number: e.target.value }))
                    }
                  />
                </InputGroup>
                <InputGroup
                  size="2m"
                  style={{
                    margin: 10,
                  }}
                >
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Alternate Number
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    type="number"
                    onChange={(e) =>
                      setUserInput((s) => ({
                        ...s,
                        alt_number: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup
                  size="2m"
                  style={{
                    margin: 10,
                  }}
                >
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Email
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    type="email"
                    onChange={(e) =>
                      setUserInput((s) => ({ ...s, email: e.target.value }))
                    }
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup
                  size="2m"
                  style={{
                    margin: 10,
                  }}
                >
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Address
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) =>
                      setUserInput((s) => ({ ...s, address: e.target.value }))
                    }
                  />
                </InputGroup>
                <InputGroup
                  size="2m"
                  style={{
                    margin: 10,
                  }}
                >
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Near by Delivery City
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) =>
                      setUserInput((s) => ({ ...s, city: e.target.value }))
                    }
                  />
                </InputGroup>
                <InputGroup
                  size="2m"
                  style={{
                    margin: 10,
                  }}
                >
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Pincode
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    type="number"
                    onChange={(e) =>
                      setUserInput((s) => ({ ...s, pin: e.target.value }))
                    }
                  />
                </InputGroup>
                <InputGroup size="2m" style={{ margin: 10 }}>
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    State
                  </InputGroup.Text>
                  <Form.Control
                    as="select"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) =>
                      setUserInput((s) => ({ ...s, state: e.target.value }))
                    }
                  >
                    <option value="">Select a State</option>
                    {statesInIndia.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </Form.Control>
                </InputGroup>
         
              </Col>
                     <p style={{color:"#f00", textAlign:'center'}}>{errorText}</p>
            {showAlert && (
              <p style={{ color: "#f00", textAlign: "center" }}>
                Please fill all the delivery details
              </p>
            )}
            </Row>
            {(count>0 && price>0) && <h3>{count} items | Rs.{Math.round(price)}</h3>}
            <Row className="">
              {data.map((item, index) =>
                item.products.map(
                  (product, productIndex) =>
                    product.qty > 0 && (
                      <Col xs={12} sm={6} md={4} lg={3} key={productIndex}>
                        <Card style={{ width: "18rem" }}>
                          <Card.Body>
                            <Card.Title>{product.english_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {product.tamil_name}
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                              ₹{" "}
                              <span
                                style={{
                                  textDecoration: "line-through",
                                }}
                              >
                                {product.price}
                              </span>
                              <span style={{ color: "#000" }}>{` ${Math.round(
                                (parseFloat(product.price) / 100) *
                                parseFloat(product.discount)
                              )} `}</span>
                            </Card.Subtitle>
                            {/* {product.discount != "" && (
                              <Card.Subtitle className="mb-2 text-muted">
                                <span style={{ color: "green" }}>
                                  {product.discount}% Discount
                                </span>
                              </Card.Subtitle>
                            )} */}
                            <Button variant="primary">
                              {product.qty} piece(s).
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                )
              )}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#00ffbf' }}>
          <Button variant="secondary" onClick={handleOpenClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitOrder}>
            Submit Order
          </Button>
        </Modal.Footer>
       
      </Modal>
    </>
  );
}

export default CartScreen;
