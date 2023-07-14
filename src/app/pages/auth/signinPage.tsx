import { FC } from "react";
import SigninForm from "../../components/auth/signinForm";
import Navbar from "../../components/ui/Navbar";

export const SigninPage: FC = () => {
  return (
    <>
      <Navbar />
      <SigninForm />
    </>
  );
};
