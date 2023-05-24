import { FC, useRef, useEffect, useState } from "react";
import "./reset-password.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ResetPasswordPage: FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null!);
  const toggleRef = useRef<HTMLDivElement>(null);

  const params = useParams<{ token: string }>();
  const [password, setPassword] = useState("");

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
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/reset-password/${params.token}`,
        {
          password: password,
        }
      );
      console.log(response.data); // Handle the response accordingly
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
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
  );
};
