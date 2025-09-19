import React from "react";
import "./Styling/Register.css";
import { Link } from "react-router-dom";


export const Register = () => {
  return (
    <div className="regBody">
      <div className="Register-container">
        <h2>Create your <br/>PopX account</h2>

        <form>
          <div className="form-group">
            <input type="text" id="fullname" placeholder=" " required />
            <label htmlFor="fullname">Full Name*</label>
          </div>

          <div className="form-group">
            <input type="tel" id="phone" placeholder=" " required />
            <label htmlFor="phone">Phone number*</label>
          </div>

          <div className="form-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email address*</label>
          </div>

          <div className="form-group">
            <input type="password" id="password" placeholder=" " required />
            <label htmlFor="password">Password*</label>
          </div>

          <div className="form-group">
            <input type="text" id="company" placeholder=" " />
            <label htmlFor="company">Company name</label>
          </div>

          <div className="radio-group">
            <label>Are you an Agency?*</label>
            <div className="radio-options">
              <label>
                <input type="radio" name="agency" value="yes" required /> Yes
              </label>
              <label>
                <input type="radio" name="agency" value="no" /> No
              </label>
            </div>
          </div>
        
          <Link to="/Profile "type="submit" className="btn">
            Create Account
          </Link> 
        </form>
      </div>
    </div>
  );
};
