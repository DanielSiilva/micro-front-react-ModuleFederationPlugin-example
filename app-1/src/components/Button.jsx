import React, { useEffect, useState } from "react";
const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ backgroundColor: "red", color: "white" }}
    >
      {" "}
      BTN APP 1: {count}{" "}
    </button>
  );
};
export default Button;