import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminpaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <p>about</p>,
      },
      {
        path: "contact",
        element: <p>contact</p>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminpaths,
  },
]);

export default router;
