import { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <h1>Contact Form</h1>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <textarea
            name="message"
            id=""
            placeholder="Enter Message"
            value={user.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
