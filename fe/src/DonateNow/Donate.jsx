import React, { useState } from 'react';
import rocketImage from "../assets/images/alec_rocket.png";
import fireFightersImage from "../assets/images/fire_helpers.png";
import "../css/pages/donation.css";

export default function Donate() {
  const [progress, setProgress] = useState(30);
  const [inputData, setInputData] = useState({
    amount: 25,
    name: "",
  });

  function handleChangeInput(e, amount) {
    const { name, value } = e.target;
    if (name === "name") {
      setInputData({
        ...inputData,
        name: value,
      });
    } else if (name === "amount") {
      setInputData({
        ...inputData,
        amount,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Donation successful", data);
      })
      .catch((error) => {
        console.error("Error donating:", error);
      });
  }

  return (
    <main className='main'>
      <section className='donation-outer'>
        <div className="donation-box-outer">
          <div className="donation-visuals-outer">
            <div className="raised">500 RAISED</div>
            <div className="progress-container">
              <div className="progress-bar animate-on-scroll" style={{ width: `${progress}%` }} data-percentage={progress}>
                <img
                  src={rocketImage}
                  height="30px"
                  alt="Progress"
                />
              </div>
            </div>
            <div className="donation-img-outer">
              <picture>
                <source
                  media="(max-width:768px)"
                  srcSet={fireFightersImage}
                />
                <img
                  srcSet={fireFightersImage}
                  className="donation-img"
                  alt="Firefighters"
                />
              </picture>
            </div>
          </div>
          <form className="donation-from" onSubmit={handleSubmit}>
            <div>
              <h2 className="donation-form-heading">EVERY DOLLAR SAVES LIVES.</h2>
              <p className="donation-form-sub-text">
                Make a difference in the lives of Los Angeles’ underprivileged
                youth at our inspiring charity event! Together, we’ll provide
                opportunities, resources, and joy to children in need.
              </p>
            </div>
            <div className="donation-amount-box-outer">
              <p className="donation-amount-head-text">Choose a donation amount</p>
              <label className="donation-amount-box-label">
                <input
                  className="donation-input-radio"
                  checked={inputData.amount === 25}
                  type="radio"
                  name="amount"
                  onChange={(e) => handleChangeInput(e, 25)}
                  value="25"
                />
                $25
              </label>
              <label className="donation-amount-box-label">
                <input
                  className="donation-input-radio"
                  type="radio"
                  checked={inputData.amount === 50}
                  onChange={(e) => handleChangeInput(e, 50)}
                  name="amount"
                  value="50"
                />
                $50
              </label>
              <label className="donation-amount-box-label">
                <input
                  className="donation-input-radio"
                  type="radio"
                  checked={inputData.amount === 100}
                  name="amount"
                  value="100"
                  onChange={(e) => handleChangeInput(e, 100)}
                />
                $100
              </label>
            </div>
            <div className="donation-name-box-outer">
              <label className="donation-name-label">
                Enter your name
                <input
                  className="donation-name-input"
                  name="name"
                  onChange={handleChangeInput}
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="button-filled donation-submit-button"
            >
              Donate now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
