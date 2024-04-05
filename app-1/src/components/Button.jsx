import React, { useEffect, useState } from "react";
import { Button as But } from "antd";
const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <But onClick={() => setCount(count + 1)} type="primary">
      BTN APP 1: {count}
    </But>
  );
};
export default Button;
