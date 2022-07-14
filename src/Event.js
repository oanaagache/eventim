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
                title: "Concert",
                name: "Coma",
                hour: "20",
                date: "10.07.2022",
                place: "Sala 1",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                price: "100",
                quantity: "500",
              });

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
