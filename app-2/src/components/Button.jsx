import React, { useEffect, useState } from "react";
import { Button as But } from "antd";
const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <But onClick={() => setCount(count + 1)} type="primary">
      Botã0 APP 2: {count}
    </But>
  );
};
export default Button;
