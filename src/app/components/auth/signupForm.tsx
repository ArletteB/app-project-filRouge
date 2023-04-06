import React, { useState } from "react";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [step, setStep] = useState<number>(1);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const handleSignup = async () => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSignup}>
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
                  <h2>Inscription</h2>
                </div>
                <div className="form_wrap">
                  {/*  First step */}
                  {step === 1 && (
                    <div className="form_1 data_info">
                      <h3>Identité</h3>
                      <div className="form_container">
                        <div className="input-field">
                          <input
                            type="text"
                            className="input"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="firstName">Nom</label>
                        </div>
                        <div className="input-field">
                          <input
                            type="text"
                            className="input"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="lastName">Prenom</label>
                        </div>
                      </div>
                      <div className="common_btns form_1_btns">
                        <button type="button" className="btn_next" onClick={handleNextStep}>
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
                        <div className="input-field">
                          <input
                            type="text"
                            className="input"
                            id="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                          <input
                            type="text"
                            className="input"
                            id="password"
                            value={formData.password}
                            onChange={handleFormChange}
                            required
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="common_btns form_2_btns style">
                        <button type="button" className="btn_back" onClick={handlePrevStep}>
                          Back
                        </button>
                        <input type="submit" value={`S'inscrire`} className="btn_done" />
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
