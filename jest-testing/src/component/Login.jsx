import React from "react";
import { useState } from "react";
export default function Login() {
  const [error, setError] = useState(false);
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button disabled="true">Login</button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          something went wrong!
        </span>
      </form>
    </div>
  );
}
