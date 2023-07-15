import React, { useState } from "react";
import Mount from "./Mount";

const ParentMount = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleSubmit = () => {
    setShow(!show);
  };
  return (
    <div>
      <input type="button" value={"Toggle"} onClick={handleSubmit} />
      {show && <Mount />}
    </div>
  );
};

export default ParentMount;
