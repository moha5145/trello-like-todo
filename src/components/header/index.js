import React from "react";
import { Lock } from "@mui/icons-material";

// import ColoredButton from "../custom/buttons/ColoredButton";
import FlatButton from "../custom/buttons/FlatButton";

const Header = () => {
  return (
    <div className="flex w-screen justify-between items-center py-1 sm:py-6 px-2 border-b-2">
      <p>React ToDo</p>
      <div className="flex gap-1">
        {/* <ColoredButton
          text="Backoffice"
          p={1}
          onClick={() => console.log("Backoffice")}
          backgroundColor="#22c55e"
          color=""
        /> */}
        <FlatButton
          Icon={Lock}
          text="Déconexion"
          p={1}
          onClick={() => console.log("Backoffice")}
          backgroundColor="red"
          color="red"
        />
      </div>
    </div>
  );
};
export default Header;
