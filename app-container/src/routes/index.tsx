import { RouteObject } from "react-router-dom";
import HomePage from "remoteApp/HomePage";
import Button02 from "remoteApp1/Button";

export const routes: RouteObject[] = [
  { path: "/" },
  { path: "/app1", element: <HomePage /> },
  { path: "/app2", element: <Button02 /> },
];
