import { useState } from "react";

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
    const randomEmail = Math.random().toString(36).substring(7);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${randomEmail}@gmail.com`,
          password: "password",
        }),
      }
    );
    const data = await response.json();
  };
  return (
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
                  className="submit"
                  value="S'identifier"
                ></input>
              </div>
              <div className="signin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
