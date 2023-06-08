import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../../app/pages/home/homePage";
import { SigninPage } from "../../../app/pages/auth/signinPage";
import { SignupPage } from "../../../app/pages/auth/signupPage";
import { Test } from "../../../app/pages/home/test";
import { ForgotPasswordPage } from "../../../app/pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../../app/pages/reset-password/reset-password";
import GroupCard from "../../../app/components/group/card/GroupCard";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/signin" element={<SigninPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/groupes/:id" element={<GroupCard />} />
      {/* <Route path="*" element={<NotFoundPage />} />  404 page*/}
    </Routes>
  );
};
