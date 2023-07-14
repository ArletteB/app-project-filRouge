import { FC } from "react";
import SignupForm from "../../components/auth/signupForm";
import Navbar from "../../components/ui/Navbar";

export const SignupPage: FC = () => {
  return (
    <>
      <Navbar />
      <SignupForm />
    </>
  );
};
