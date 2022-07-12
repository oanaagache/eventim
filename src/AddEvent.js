import React, { useState } from "react";
import app from "./firebase";
//import { useNavigate } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

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

// export const updateEvent = (id, object) => {
//   const db = getFirestore(app);
//   const docRef = doc(db, "event", id);

//   setDoc(docRef, object)
//     .then((docRef) => {
//       console.log("Entire Document has been updated successfully");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const AddEvent = (props) => {
  const [name, setName] = useState("");
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

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

    props.send(event);

    setName("");
    setHour("");
    setDate("");
    setTitle("");
    setPlace("");
    setDescription("");
    setPrice("");
    setQuantity("");

    const style = {
      h2: { textAlign: "center" },
    };

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

    return (
      <Container style={style}>
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

          {/* <Button variant="primary" type="submit">
            Edit
          </Button> */}
        </Form>
      </Container>
    );
  };
};

export default AddEvent;
