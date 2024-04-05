import React, { useEffect, useState } from "react";
const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ backgroundColor: "green", color: "white" }}
    >
      {" "}
      BTN APP 2: {count}{" "}
    </button>
  );
};
export default Button;