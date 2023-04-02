import React from "react";
import { useState } from "react";
import "../../styles/auth.css";

const SigninForm = () => {
  const [credentials, setCredentials] = useState({});

  const handleChange = (e: {
    preventDefault: () => void;
    target: { name: any; value: any };
  }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <form action="" onSubmit={handleSignin}>
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-md-6 side-image">
              <div className="text">
                <p>
                  Rejoindre la communauté <i>- MonBonVoisinage</i>
                </p>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="input-box">
                <header>Se Connecter</header>
                <div className="input-field">
                  <input
                    type="text"
                    className="input"
                    id="email"
                    required
                    autoComplete="off"
                    name="email"
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="input"
                    id="password"
                    required
                    name="password"
                    onChange={handleChange}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                  <input
                    type="submit"
                    value={`S'identifier`}
                    className="submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SigninForm;
