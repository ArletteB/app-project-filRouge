import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "../../styles/auth.scss";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../setup/contexts/UserContext";
import instance, {
  setAuthorizationHeader,
} from "../../../setup/services/api.service";

const SigninForm: React.FC = () => {
  const { setUser } = useUserContext();
  const [credentials, setCredentials] = useState({});
  const [redirectTo, setRedirectTo] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const response = await instance.post(
  //     `${process.env.REACT_APP_API_URL}/auth/signin`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }
  //   );

  //   const data = await response.data;

  //   // localStorage.setItem("token", data.access_token),
  //   setUser(data);
  //   setAuthorizationHeader(data.access_token);
  //   // setToken(data.token);
  //   console.log(data);
  //   setRedirectTo(!redirectTo);

  //   if (redirectTo) {
  //     navigate("/");
  //   }
  // };

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await instance.post(
        "/auth/signin",
        JSON.stringify(credentials)
      );

      const data = response.data;
      setUser(data);
      console.log(data);
      setRedirectTo(!redirectTo);

      if (redirectTo) {
        navigate("/");
      }

      setAuthorizationHeader(data.access_token); // Appel de la fonction setAuthorizationHeader avec le jeton d'authentification
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  return (
    <form action="" onSubmit={handleSignin}>
      <div className="a-auth-content">
        <div className="a-auth-main">
          <div className="a-auth-row">
            <div className="col-md-6 a-side-image">
              <div className="a-side-text">
                <p>
                  Rejoindre la communauté <i>- MonBonVoisinage</i>
                </p>
              </div>
            </div>
            <div className="col-md-6 a-auth-infos">
              <div className="a-input-content">
                <div className="a-header-content">
                  <h2>Se connecter</h2>
                </div>
                <div className="a-input-field">
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
                <div className="a-input-field">
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
                  <a href="/forgot-password">Mot de passe oublié ?</a>
                </div>
                <div className="a-input-field">
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
