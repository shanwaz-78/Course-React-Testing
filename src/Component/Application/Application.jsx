import React from "react";
import "./application.css";

const Application = () => {
  return (
    <div>
      <h1 name="kyle">kyle</h1>
      <h2 name="will">will</h2>
      <form>
        <div className="input">
          <label htmlFor="name">Name: </label>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="job-location">
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="banglore">Banglore</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>
        <div className="terms">
          <input type="checkbox" /> I Agree to the Terms and Condition
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Application;
