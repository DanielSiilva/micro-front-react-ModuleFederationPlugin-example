import React from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { Link } from "react-router-dom";
import "./App.css"; // Importe o CSS aqui

const useCart = React.lazy(() => import("remoteApp1/useCart"));

const App = () => {
  const elements = useRoutes(routes);
  const navigate = useNavigate();

  const { items, addItem, removeItem } = useCart();

  return (
    <div>
      <div className="nav-bar">
        <Link to="/app1">App1</Link>

        <button onClick={() => navigate("/app2")}>App2</button>
      </div>
      <div className="content">{elements}</div>
    </div>
  );
};

export default App;
