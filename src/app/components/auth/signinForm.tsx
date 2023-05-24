import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";

const SigninForm: React.FC = () => {
  const [credentials, setCredentials] = useState({});
  const [redirectTo, setRedirectTo] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
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
    setRedirectTo(!redirectTo);

    if (redirectTo) {
      navigate("/");
    }
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
                <div className="header-content">
                  <h2>Se connecter</h2>
                </div>
                <div className="input-field">
                  <input
                    type="email"
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
                <div className="forgotPassword">
                  <a href="#">Mot de passe oublié ?</a>
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
