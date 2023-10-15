import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Gallery = ({ setShowGallery, showGallery }) => {
  const handleOpenClose = () => setShowGallery(!showGallery);
  const data = useSelector((state) => state.data) || [];
  return (
    <Modal
      show={showGallery}
      onHide={handleOpenClose}
      fullscreen={true}
      autoFocus
    >
      <Modal.Header>
        <Modal.Title style={{ color: "black" }}>
          Gallery
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {data?.map((item, index) => (
              <React.Fragment>
                <Col sm={4}>
                  <Card
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={
                        "https://adminmurugan.ashifsadiq.in/CatImage/" +
                        item.category_image
                      }
                      style={{
                        borderRadius: 10,
                        width: 300,
                        height:300,
                        objectFit:'cover',
                        margin:10
                      }}
                    />
                    <span style={{ color: "#000", textAlign: "center",fontWeight:"bold" }}>
                    {item.category_eng_name}
                  </span>
                  </Card>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleOpenClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Gallery;
