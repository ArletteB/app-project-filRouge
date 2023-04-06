import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../../app/pages/home/homePage";
import { SigninPage } from "../../../app/pages/auth/signinPage";
import { SignupPage } from "../../../app/pages/auth/signupPage";
import { Test } from "../../../app/pages/home/test";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/signin" element={<SigninPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/test" element={<Test />} />
      {/* <Route path="*" element={<NotFoundPage />} />  404 page*/}
    </Routes>
  );
};
