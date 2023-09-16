import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../setup/contexts/UserContext";
import { setAuthorizationHeader } from "../../../setup/services/api.service";
import TokenService from "../../../setup/services/token.service";
import AuthService from "../../../setup/services/auth.service";

const SigninForm: React.FC = () => {
  const { setUser } = useUserContext();
  const [credentials, setCredentials] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return; // Empêcher les soumissions multiples
    }
    setIsSubmitting(true);

    try {
      const { access_token } = await AuthService.signin(credentials);
      TokenService.setTokenInLocalStorage(access_token);
      const user = TokenService.getUserInToken(access_token) as any;
      setUser(user);
      setAuthorizationHeader(access_token);

      navigate("/accueil");
    } catch (error) {
      console.error("Erreur de connexion :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action="" onSubmit={handleSignin}>
      <div className="a-auth-content">
        <div className="a-auth-main">
          <div className="a-auth-row">
            {/* <div className="col-md-6 a-side-image">
              <div className="a-side-text">
                <p>
                  Rejoindre la communauté <i>- MonBonVoisinage</i>
                </p>
              </div>
            </div> */}
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
                    disabled={isSubmitting}
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
