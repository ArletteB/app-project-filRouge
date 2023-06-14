import { FC, useRef, useEffect, useState } from "react";
import "./reset-password.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ResetPasswordPage: FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null!);
  const toggleRef = useRef<HTMLDivElement>(null);

  const params = useParams<{ token: string }>();
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const toggle = toggleRef.current;
    const password = passwordRef.current;

    function showHide() {
      if (password?.type === "password") {
        password.type = "text";
        toggle?.classList.add("hide");
      } else {
        password.type = "password";
        toggle?.classList.remove("hide");
      }
    }

    if (toggle && password) {
      toggle.addEventListener("click", showHide);
    }

    return () => {
      if (toggle && password) {
        toggle.removeEventListener("click", showHide);
      }
    };
  }, []);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Lors de la soumission la requete renvoei une erreur dû au tooken qui contient des infos en trop (%7D)
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/reset-password/${params.token}`,
        {
          password: password,
        }
      );
      setSuccessMessage("Password reset successfully.");
      setErrorMessage("");
      console.log(response.data); // Handle the response accordingly
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("An error occurred while resetting the password.");
      console.error(error); // Handle error
    }
  };

  return (
    <div>
      <h2>Modifier votre mot de passe</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={handlePasswordChange}
            ref={passwordRef}
          />
          <span>Password</span>
          <div id="toggle" ref={toggleRef}></div>
        </div>
        <div className="submit-input">
          <input type="submit" className="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
};
