import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteEvent, updateEvent } from "./AddEvent";

const Event = (props) => {
  const { name, hour, date, title, place, description, id, price, quantity } =
    props;

  const style = {
    borderBottom: "1px solid #777",
  };

  let navigate = useNavigate();

  return (
    <Container>
      <Row style={style}>
        <Col sm={9}>
          <h3>Type:{title}</h3>
          <h3>Band:{name}</h3>
          <h3>Place:{place}</h3>
          <h3>Hour:{hour}</h3>
          <h3>Date: {date}</h3>
          <h3>Description:{description}</h3>
          <h3>Price: {price}</h3>
          <h3>Quantity: {quantity}</h3>
        </Col>
        <Col sm={3} className="d-flex align-items-center">
          <Button
            variant="primary"
            onClick={(e) => {
              deleteEvent(id);
            }}
          >
            Delete Event
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              updateEvent(id, {
                name: "name",
                hour: "hour",
                date: "date",
                title: "title",
                place: "place",
                description: "description",
                price: "price",
                quantity: "quantity",
              });
              console.log(id);
              console.log(name);
              navigate(`/AddEvent/${id}`);
            }}
          >
            Edit Event
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Event;

// onClick={(e) => {
//   updateEvent(id, {
//     name: "name",
//     hour: "hour",
//     date: "date",
//     title: "title",
//     place: "place",
//     description: "description",
//     price: "price",
//     quantity: "quantity",
//   });

//onClick={() => navigate(`/AddEvent/${id}`)}
