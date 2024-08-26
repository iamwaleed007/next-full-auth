import React from "react";
import CardWrapper from "./CardWrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      footerTextLabel="Don't have an account?"
      footerTextHref="/auth/sign-up"
      showSocial
    >
      <div>LoginForm</div>
    </CardWrapper>
  );
};

export default LoginForm;
