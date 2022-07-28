import React, { useState, useEffect } from "react";
import Events from "./Events";
import AddEvent from "./AddEvent";
import { Routes, Route } from "react-router-dom";
import Basket from "./Basket";
import Main from "./Main";
import Ticket from "./Ticket";
import Navi from "./Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import app from "./firebase";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import Reports from "./Reports";
import Success from "./Success";
import Welcome from "./Welcome";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [list, setList] = useState([]);

  const addEvent = (event) => {
    event.id = list.length + 1;
    setList([...list, event]);
  };
  let navigate = useNavigate();

  const db = getFirestore(app);
  const getList = async () => {
    const list = await getDocs(collection(db, "event"));
    let listaNoua = list.docs.map((doc) => {
      let e = doc.data();
      e.id = doc.id;
      return e;
    });
    setList(listaNoua);
  };

  useEffect(() => {
    getList();
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [edit, setEdit] = useState({
    id: 0,
    name: "",
    hour: "",
    date: "",
    title: "",
    place: "",
    description: "",
    price: "",
    quantity: "",
  });

  const editEvent = (id) => {
    var object = list.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10);
    });

    if (object) {
      setEdit({
        id: object.id,
        name: object.name,
        hour: object.hour,
        date: object.date,
        title: object.title,
        place: object.place,
        description: object.description,
        price: object.price,
        quantity: object.quantity,
      });
      navigate("/AddEvent");
    }
  };

  return (
    <>
      <div>
        <Navi countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/AddEvent"
            element={<AddEvent add={addEvent} objectedit={edit} />}
          />
          <Route
            path="/AddEvent/:id"
            element={<AddEvent add={addEvent} objectedit={edit} />}
          />
          <Route path="/ticket" element={<Ticket />} />

          <Route
            path="/events"
            element={<Events events={list} editEvent={editEvent} />}
          />
          <Route
            path="/Main"
            element={
              <div className="row">
                <Main onAdd={onAdd} products={list} />
                <Basket
                  eventList={list}
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </div>
            }
          />

          <Route path="/Reports" element={<Reports list={list} />} />
          <Route path="/BarChart" element={<BarChart />} />
          <Route path="/LineChart" element={<LineChart />} />
          {/* <Route path="/PieChart" element={<PieChart />} /> */}
          <Route path="/Success" element={<Success />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
