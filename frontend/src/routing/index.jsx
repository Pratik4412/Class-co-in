import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import OurServices from "../pages/OurServices";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TeamsAndConditions from "../pages/TeamsAndConditions";
import LegalDisclaimer from "../pages/LegalDisclaimer";
import ContactUs from "../pages/ContactUs";
import Career from "../pages/Career";
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
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TeamsAndConditions />,
      },
      {
        path: "/legal-disclaimer",
        element: <LegalDisclaimer />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

export default router;
