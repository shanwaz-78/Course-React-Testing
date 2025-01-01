import React from 'react';
import './application.css';

const Application = () => {
  return (
    <div className="application-container">
      <h1 className="form-title">Job Application Form</h1>

      <div className="profile-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToc1bnD7rCvXMinX06dBFyhOuqCqc60DIzFg&s"
          alt="Profile"
          data-imgData="img-data"
          className="profile-image"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToc1bnD7rCvXMinX06dBFyhOuqCqc60DIzFg&s"
          alt="Profile"
          data-imgData="img-data"
          name="img2"
          className="profile-image"
        />
      </div>

      <form className="application-form" data-testId="custom-form">
        <div className="input-group">
          <label htmlFor="name" className="input-label">
            Name:{' '}
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="job-location" className="input-label">
            Job Location
          </label>
          <select id="job-location" className="input-select">
            <option value="banglore">Bangalore</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>

        <div className="terms-group">
          <input type="checkbox" id="terms" className="checkbox" />
          <label htmlFor="terms" className="terms-label">
            I Agree to the Terms and Conditions
          </label>
        </div>

        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="reset" className="reset-button">
            Reset
          </button>
          <button type="button" className="undo-button">
            Undo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
