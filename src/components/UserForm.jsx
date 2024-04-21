import React from "react";

const UserForm = () => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
        />
      </div>
    </div>
  );
};

export default UserForm;
