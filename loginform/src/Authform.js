import React, { useState } from "react";

export default function Authform() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login page</h2>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot Password?</a>
              <button>Login</button>
              <p>
                Not a Member?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup page</h2>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Signup</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
