import { use } from "react";
import { useState } from "react";

const Registration = () => {
  const [user, SetUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const handleInputChange = (e) => {
    // console.log(e);
    
    const { name, value } = e.target;

    SetUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
  };

  return (
    <>
      <h1>Registration Form</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            value={user.fname}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            name="lname"
            value={user.lname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="mobileNumber">Mobile Number : </label>
          <input
            type="phone"
            name="mobileNumber"
            value={user.mobileNumber}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Registration;
