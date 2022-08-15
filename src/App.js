import "./App.css";
import { useState } from "react";
import Chip from "./assets/chip.png";

function App() {
  const [number, setNumber] = useState("#### #### #### ####");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YYYY");
  const [cvv, setCvv] = useState("###");

  const handleNumberChange = (event) => {
    const limit = 16;
    setNumber(
      event.target.value
        .replace(/[^\dA-Z]/g, " ")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, limit)
    );
  };
  const handleNameChange = (event) => {
    setName(event.target.value.toUpperCase());
  };
  const handleMonthChange = (event) => {
    const limit = 2;
    setMonth(event.target.value.slice(0, limit));
  };
  const handleYearChange = (event) => {
    const limit = 4;
    setYear(event.target.value.slice(0, limit));
  };
  const handleCvvChange = (event) => {
    const limit = 3;
    setCvv(event.target.value.slice(0, limit));
  };

  return (
    <div className="App">
      <div className="card">
        <img className="chip-image" src={Chip} />
        <h1 className="show-number">{number}</h1>
        <div className="show-name">
          {name.length > 0 ? `${name}` : "YOUR FULL NAME"}
        </div>
        <div className="show-date">
          <h1 className="show-month">DATE {month} /</h1>
          <h1 className="show-year">{year}</h1>
        </div>
        <h1 className="show-cvv">CVV {cvv}</h1>
      </div>
      <div className="container">
        <form className="form">
          <div className="row1">
            <label htmlFor="number" className="card-data card-number">
              Card Number
            </label>
            <input
              id="number"
              name="number"
              value={number}
              onChange={handleNumberChange}
              type="number"
              placeholder="#### #### #### ####"
              autocomplete="off"
              required
            />
          </div>

          <div className="row2">
            <label htmlFor="name" className="card-data card-name">
              Card Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              type="text"
              minLength="05"
              placeholder="Full Name"
              autocomplete="off"
              required
            />
          </div>

          <div className="row3">
            <div className="expiration-container">
              <label htmlFor="expiration" className="card-data card-expiration">
                Expiration Date
              </label>
              <input
                id="expiration"
                name="expiration"
                value={month}
                onChange={handleMonthChange}
                type="number"
                min="01"
                max="12"
                placeholder="Month"
                autocomplete="off"
                required
              />
              <input
                id="expiration"
                name="expiration"
                value={year}
                onChange={handleYearChange}
                type="number"
                min="1900"
                max="2099"
                placeholder="Year"
                autocomplete="off"
                required
              />
            </div>

            <div className="cvv-container">
              <label htmlFor="cvv" className="card-data card-cvv">
                CVV
              </label>
              <input
                id="cvv"
                name="cvv"
                value={cvv}
                onChange={handleCvvChange}
                type="number"
                placeholder="###"
                autocomplete="off"
                required
              />
            </div>
          </div>

          <div className="row4">
            <input value="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
