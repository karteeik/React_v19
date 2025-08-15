import { useState } from "react";

const ShortCircuitEvalution = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [user, setUser] = useState("");

  const username = null;
  return (
    <>
      <h1>Welcome To The ShortCircuit Evalution</h1>
      <button onClick={() => setIsLogin(!isLogin)}>Login</button>

      {/* && - if exp1 is falsy than return exp1 otherwise exp2 */}
      {isLogin && <p>you'r logged in</p>}

      {/* || - if exp1 is truthy than return exp1 otherwise exp2 */}
      {/* {isLogin || <p>you'r logged in</p>} */}

      <button onClick={() => setUser("Karteeikk")}>Set User</button>
      {user ? `Hello ${user}` : "Please Logged in"}

      <button onClick={() => setUser("")}>Clear User</button>

      {/* Nullish Coalescing (??) - if exp1 is not null/undefined than return exp1 otherwise exp2 */}

      {`${username ?? "Guest"}`}
    </>
  );
};

export default ShortCircuitEvalution;
