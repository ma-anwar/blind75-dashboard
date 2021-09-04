import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core/";

const LoginButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout()} disableElevation>
      Log Out
    </Button>
  );
};

export default LoginButton;
