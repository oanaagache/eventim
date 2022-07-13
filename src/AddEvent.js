import React, { useState } from "react";
import app from "./firebase";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

export const updateTickets = (event, ticketsQuantity) => {
  const db = getFirestore(app);
  const docRef = doc(db, "event", event.id);
  const data = {
    name: event.name,
    hour: event.hour,
    date: event.date,
    title: event.title,
    place: event.place,
    description: event.description,
    price: event.price,
    quantity: ticketsQuantity,
  };
  console.log(data);
  setDoc(docRef, data)
    .then((docRef) => {
      console.log("Entire Document has been updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteEvent = async (id) => {
  const db = getFirestore(app);
  await deleteDoc(doc(db, "event", id));
  console.log("Entire Document has been deleted successfully");
};

export const updateEvent = (id, object) => {
  const db = getFirestore(app);
  const docRef = doc(db, "event", id);
  console.log("object:");
  console.log(object);
  setDoc(docRef, object)
    .then((docRef) => {
      console.log("Entire Document has been updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

const AddEvent = (props) => {
  // const [name, setName] = useState("");
  // const [hour, setHour] = useState("");
  // const [date, setDate] = useState("");
  // const [title, setTitle] = useState("");
  // const [place, setPlace] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");

  let navigate = useNavigate();

  const style = {
    h2: { textAlign: "center" },
  };

  const styleH = {
    h2: { textAlign: "center" },
  };

  const [name, setName] = useState(props.objectedit.name);
  const [hour, setHour] = useState(props.objectedit.hour);
  const [date, setDate] = useState(props.objectedit.date);
  const [title, setTitle] = useState(props.objectedit.title);
  const [place, setPlace] = useState(props.objectedit.place);
  const [description, setDescription] = useState(props.objectedit.description);
  const [price, setPrice] = useState(props.objectedit.price);
  const [quantity, setQuantity] = useState(props.objectedit.quantity);

  const { id } = useParams();

  const formSubmit = (evt) => {
    evt.preventDefault();

    const event = {
      name,
      hour,
      date,
      title,
      place,
      description,
      price,
      quantity,
    };

    if (id > 0) {
      props.editEvent(event);
    } else {
      props.add(event);
    }

    // setName("");
    // setHour("");
    // setDate("");
    // setTitle("");
    // setPlace("");
    // setDescription("");
    // setPrice("");
    // setQuantity("");

    const db = getFirestore(app);
    addDoc(collection(db, "event"), {
      name: name,
      hour: hour,
      date: date,
      title: title,
      place: place,
      description: description,
      price: price,
      quantity: quantity,
    })
      .then(() => {
        alert("The event was added");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container style={style}>
      <h2 className="mt-4" style={styleH}>
        {id > 0 ? "Edit event" : "New Event"}
      </h2>
      <hr />
      <Form onSubmit={formSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Place:</Form.Label>
          <Form.Control
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Hour:</Form.Label>
          <Form.Control
            type="text"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddEvent;
