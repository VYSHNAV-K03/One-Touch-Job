import React, { useState } from "react";
import Backend from "../components/Backend";
import Frontend from "../components/Frontend";
import Navbar from "../components/Navbar";

const Ski = () => {
  const [id, setid] = useState(0);
  return (
    <div>
      <Navbar color="black" position="relative" />
      <Frontend />
    </div>
  );
};

export default Ski;
