import React, { useState } from "react";
import Login from "../../components/auth/Login";
import SignUp from "../../components/auth/SignUp";
import SubHeader from "../../components/nav/SubHeader";
import NewHeader from "../../components/nav/NewHeader";

const AuthPage = (props) => {
  const [isLogin, setLogin] = useState(true);
  const toggleAction = () => {
    setLogin((prev) => !prev);
  };
  return (
    <>
      <NewHeader />
      <SubHeader />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLogin && <Login active={toggleAction} props={props} />}
        {!isLogin && <SignUp active={toggleAction} props={props} />}
      </div>
    </>
  );
};

export default AuthPage;
