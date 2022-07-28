import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteEvent, updateEvent } from "./AddEvent";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Event = (props) => {
  const {
    name,
    hour,
    date,
    title,
    place,
    description,
    id,
    price,
    quantity,
    editEvent,
  } = props;

  const style = {
    borderBottom: "1px solid #777",
  };

  const stil = {
    svg: {
      pointerEvents: "none",
    },
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
            variant="link"
            onClick={(e) => {
              deleteEvent(id);
            }}
            style={stil}
          >
            <BsTrashFill />
          </Button>
          <Button
            variant="link"
            onClick={(e) => {
              // updateEvent(id, {
              //   title: "Concert",
              //   name: "Andra",
              //   hour: "20",
              //   date: "10.08.2022",
              //   place: "Sala Palatului",
              //   description:
              //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              //   price: "100",
              //   quantity: "494",
              // });

              editEvent(id);
              navigate("/AddEvent");
            }}
            style={stil}
          >
            <BsPencilSquare />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Event;
