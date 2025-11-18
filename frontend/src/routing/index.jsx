import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import OurServices from "../pages/OurServices";
import TeamsMember from "../components/TeamsMember";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <OurServices />,
      },
      {
        path: "/teams",
        element: <TeamsMember />,
      },
    ],
  },
]);

export default router;
