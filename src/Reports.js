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
        label: "Band Name",
        data: list.map((item) => 500 - item.quantity),
        backgroundColor: [
          "#ADD8E6",
          "#FFB6C1",
          "#6495ED",
          "#FF7F50",
          "#00BFFF",
          "#DAA520",
          "#008000",
          "#CD5C5C",
          "#20B2AA",
          "#FFF0F5",
          "#FF8C00",
          "#66CDAA",
          "#66CDAA",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="row">
      <div className="block1 col-2">
        <div style={{ width: 800 }}>
          <h2 style={{ paddingBottom: 150 }}>Reports Tickets Sold:</h2>
          <BarChart chartData={userData} />
        </div>
      </div>
      <div className="block2 col-2">
        <div style={{ width: 800 }}>
          <h2 style={({ paddingBottom: 30 }, { paddingLeft: 30 })}>
            Reports Tickets Sold:{" "}
          </h2>
          <PieChart chartData={userData} />
        </div>
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
