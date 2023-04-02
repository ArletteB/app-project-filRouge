import React from "react";

const SignupForm = () => {
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
              <div className="hearder-content">
                <h3>Inscription</h3>
                <ul>
                  <li className="active form_1_progessbar">
                    <div>
                      <p>1</p>
                    </div>
                  </li>
                  <li className="form_2_progessbar">
                    <div>
                      <p>2</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="form_wrap">
                <div className="form_1 data_info">
                  <h2>Identité</h2>
                  <form>
                    <div className="form_container">
                      <div className="input-field">
                        <input
                          type="text"
                          className="input"
                          id="username"
                          required
                        />
                        <label htmlFor="username">Nom</label>
                      </div>
                      <div className="input-field">
                        <input
                          type="text"
                          className="input"
                          id="username"
                          required
                        />
                        <label htmlFor="username">Prenom</label>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="form_2 data_info style">
                  <h2>Identifiant</h2>
                  <form>
                    <div className="form_container">
                      <div className="input-field">
                        <input
                          type="text"
                          className="input"
                          id="email"
                          required
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="input-field">
                        <input
                          type="text"
                          className="input"
                          id="password"
                          required
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="btns_wrap">
                <div className="common_btns form_1_btns">
                  <button type="button" className="btn_next">
                    Next
                  </button>
                </div>
                <div className="common_btns form_2_btns style">
                  <button type="button" className="btn_back">
                    Back
                  </button>
                  <button type="button" className="btn_done">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
