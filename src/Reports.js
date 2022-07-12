import React, { useState } from "react";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import { updateTickets } from "./AddEvent";
//import { useParams } from "react-router-dom";

const Reports = (props) => {
  const { list } = props;
  const [userData, setUserData] = useState({
    labels: list.map((item) => item.name),
    datasets: [
      {
        label: "Tickets Sold",
        data: list.map((item) => item.quantity),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default Reports;

// const [userData, setUserData] = useState({
//   labels: UserData.map((data) => data.year),
//   datasets: [
//     {
//       label: "Tickets Sold",
//       data: UserData.map((data) => data.quantity),
//       backgroundColor: [
//         "rgba(75,192,192,1)",
//         "#ecf0f1",
//         "#50AF95",
//         "#f3ba2f",
//         "#2a71d0",
//       ],
//       borderColor: "black",
//       borderWidth: 2,
//     },
//   ],
// });
