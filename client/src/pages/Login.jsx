import React from "react";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login PR Lab</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button className="btn btn-dark">Login</button>
      </form>
    </div>
  );
};

export default Login;
