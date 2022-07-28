import React from "react";
import Event from "./Event";

const Events = (props) => {
  const { events, deleteEvent, updateEvent } = props;
  const list = events.map((item) => (
    <Event
      name={item.name}
      hour={item.hour}
      date={item.date}
      title={item.title}
      place={item.place}
      description={item.description}
      price={item.price}
      quantity={item.quantity}
      id={item.id}
      key={item.id}
      deleteEvent={deleteEvent}
      editEvent={props.editEvent}
    />
  ));

  const style = {
    h2: { textAlign: "center" },
  };

  return (
    <>
      <h2 className="mt-4" style={style.h2}>
        List of Events
      </h2>
      <hr></hr>

      <div>{list}</div>
    </>
  );
};

export default Events;
