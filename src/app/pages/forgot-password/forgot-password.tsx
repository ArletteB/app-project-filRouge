import { FC, useState } from "react";
import axios from "axios";

export const ForgotPasswordPage: FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/forgot-password`,
        {
          email: email,
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
          type="email"
          required
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span>Mail</span>
      </div>
      <div className="submit-input">
        <input type="submit" className="submit" value="Envoyer" />
      </div>
    </form>
  );
};
