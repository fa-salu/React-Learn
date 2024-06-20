import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container-form">
      <div className="body-form">
        <h2 className="text-center">Registration Form</h2>
        <hr/>
        <label className="router-label">Name: </label>
        <input type="text" placeholder="Name" className="router-input" />
        <label className="router-label">Phone: </label>
        <input
          type="number"
          placeholder="Phone Number"
          className="router-input"
        />
        <label className="router-label">Email: </label>
        <input type="email" placeholder="Email" className="router-input mb-4" />
        <Link to={'./login'}><button className="btn bg-primary">Submit</button></Link>
      </div>
    </div>
  );
};

export default Registration;
