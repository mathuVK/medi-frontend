import HomePage from "./pages/Home";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";
import NotFound404 from "./pages/404";
import Search from "./pages/Search";
import Doctorlist from "./pages/Doctorlist";

export const publicRoute = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/about-us",
    component: <AboutUsPage />,
  },
  {
    path: "/contact-us",
    component: <ContactUsPage />,
  },
  {
    path: "/sign-in",
    component: <SignInPage />,
  },
  {
    path: "/sign-up",
    component: <SignUpPage />,
  },
  {
    path: "*",
    component: <NotFound404 />,
  },

  {
    path: "/Search",
    component: <Search />,
  },
  {
    path: "/searchResult",
    component: <Doctorlist />,
  },
  {
    path: "/hospitalShedule/:doctorId/:hospitalId",
    component: <Doctorlist />,
  },
];

export const privateRoute = [];
