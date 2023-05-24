import { FC, useRef, useEffect } from "react";
import "./reset-password.css";

export const ResetPassword: FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null!);
  const toggleRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="inputBox">
      <input type="password" required id="password" ref={passwordRef} />
      <span>Password</span>
      <div id="toggle" ref={toggleRef}></div>
    </div>
  );
};
