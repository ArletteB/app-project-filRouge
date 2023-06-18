import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../setup/types/auth/user.type";

const SignupForm: React.FC = () => {
  const [redirectTo, setRedirectTo] = useState(false);
  const [credentials, setCredentials] = useState<Partial<UserType>>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleNextStep = () => {
    setStep((prevState: number) => (prevState += 1));
  };

  const handlePrevStep = () => {
    setStep((prevState: number) => (prevState -= 1));
  };
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
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
      navigate("/auth/signin");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="a-auth-content">
        <div className="a-auth-main">
          <div className="a-auth-row">
            <div className="col-md-6 a-side-image">
              <div className="a-side-text">
                <p>
                  Rejoindre la communauté <br />
                  <i> SociaLink</i>
                </p>
              </div>
            </div>
            <div className="col-md-6 a-auth-infos">
              <div className="a-input-content">
                <div className="a-header-content">
                  <h2>Inscription</h2>
                </div>
                <div className="a-form_wrap">
                  {/*  First step */}
                  {step === 1 && (
                    <div className="form_1 data_info">
                      <h3>Identité</h3>
                      <div className="form_container">
                        <div className="a-input-field">
                          <input
                            type="text"
                            className="input"
                            id="firstName"
                            name="firstName"
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="firstName">Nom</label>
                        </div>
                        <div className="a-input-field">
                          <input
                            type="text"
                            className="input"
                            id="lastName"
                            name="lastName"
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="lastName">Prenom</label>
                        </div>
                      </div>
                      <div className="a-auth-btn form_1_btns">
                        <button
                          type="button"
                          className="btn_next"
                          onClick={handleNextStep}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                  {/*  Second step */}
                  {step === 2 && (
                    <div className="form_2 data_info style">
                      <h3>Identifiant</h3>
                      <div className="form_container">
                        <div className="a-input-field">
                          <input
                            type="email"
                            className="input"
                            id="email"
                            name="email"
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className="a-input-field">
                          <input
                            type="password"
                            className="input"
                            id="password"
                            name="password"
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="a-auth-btn form_2_btns style">
                        <button
                          type="button"
                          className="btn_back"
                          onClick={handlePrevStep}
                        >
                          Back
                        </button>
                        <input
                          type="submit"
                          value={`S'inscrire`}
                          className="btn_done"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
