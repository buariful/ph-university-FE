import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminpaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminpaths),
  },
]);

export default router;
