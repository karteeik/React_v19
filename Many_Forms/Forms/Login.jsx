import { useState } from "react";

const Login = () => {
  const [user, SetUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    SetUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <h1>Login Form</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
