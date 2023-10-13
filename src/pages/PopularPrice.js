import React from "react";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";

function PopularPrice () {
  return (
    <Container>
      <h2 className="title">Популярные услуги</h2>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={"https://www.rabstol.net/uploads/gallery/main/50/rabstol_net_texture_28.jpg"}
              alt={""}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={"https://www.rabstol.net/uploads/gallery/main/50/rabstol_net_texture_28.jpg"}
              alt={""}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={"https://www.rabstol.net/uploads/gallery/main/50/rabstol_net_texture_28.jpg"}
              alt={""}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};

export default PopularPrice;
