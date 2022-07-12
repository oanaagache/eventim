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
import { getFirestore, collection, getDocs } from "firebase/firestore";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
//import { UserData } from "./charts/Data";
import Reports from "./Reports";
import Success from "./Success";
import Welcome from "./Welcome";

const App = () => {
  const [list, setList] = useState([]);

  const addEvent = (event) => {
    event.id = list.length + 1;
    setList([...list, event]);
  };

  // const deleteEvent = (id) => {
  //   const newList = list.filter((item) => {
  //     if (item.id !== parseInt(id, 10)) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   setList([...newList]);
  // };

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

  return (
    <>
      <div>
        <Navi countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/AddEvent" element={<AddEvent send={addEvent} />} />

          <Route path="/ticket" element={<Ticket />} />

          <Route path="/events" element={<Events events={list} />} />
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
          <Route path="/PieChart" element={<PieChart />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2022, 6, 6);
//     }
//   }
// }
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
// }
