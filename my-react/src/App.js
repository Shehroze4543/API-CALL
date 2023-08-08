import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import List from "./components/List";
function App() {
  const [data, setData] = useState("");

  const [address, setAddress] = useState("");
  const [site, setSite] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const emp_arr = [];
  const searchFor = "BROOKLYN";

  // function handle_submit() {}
  const handle_change = function (event) {
    setData(event.target.value);
  };
  const handle_submit = (event) => {
    event.preventDefault();
    Axios.get("https://data.cityofnewyork.us/resource/mifw-tguq.json").then(
      (response) => {
        response.data.flatMap((e) => console.log(e));
      }
    );
  };
  return (
    <>
      <div className="App">
        <h1>Find Your Voting/Poll Site in NYC</h1>
        <form onSubmit={(event) => handle_submit(event)}>
          <h2>What borough do you live in?</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Borough"
            value={data}
            onChange={(event) => {
              handle_change(event);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {data === "QUEENS" ? null : null}
    </>
  );
}

export default App;
// (response) => response.data.flatMap((e) => emp_arr.push(e)),
// emp_arr.filter((obj) =>
//       Object.values(obj).some((val) =>
//         String(val).includes("QUEENS")
//           ? Object.keys(obj).map((e) => console.log(obj))

//? Object.keys(obj).map((e) => console.log(e))
//: null
