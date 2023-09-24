import React from "react";
import ReactDOM from "react-dom/client";
import Vdi from "./pages/homepage";
import Login from "./pages/login";
import Singnup from "./pages/signup";
import Ric from "./pages/restri";
import Tim from "./pages/mainn";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
// const App = () => {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3000/signup")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.msg));
//   }, []);

//   <Route exact path="/homepage" Component={Vdi} />;
// };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Vdi />,
  },
  {
    path: "/signup",
    element: <Singnup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/restri",
    element: <Ric />,
  },
  {
    path: "/app",
    element: <Tim />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
