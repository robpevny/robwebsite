import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import Summer from "./components/Summer/Summer";
import Balance from "./components/Summer/Balance";
import Speed from "./components/Summer/Speed";
import Steeps from "./components/Summer/Steeps";
import Maneuvers from "./components/Summer/Maneuvers";
import Winter from "./components/Winter/Winter";
import Hills from "./components/Winter/Hills";
import Waxing from "./components/Winter/Waxing";
import Book from "./components/Book/Book";
import Classic from "./components/Winter/Classic";
import Skate from "./components/Winter/Skate";
import About from "./components/About/About";
import Links from "./components/Links/Links";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/summer",
    Component: Summer,
  },
  {
    path: "/summer/balance",
    Component: Balance,
  },
  {
    path: "/summer/speed",
    Component: Speed,
  },
  {
    path: "/summer/steeps",
    Component: Steeps,
  },
  {
    path: "/summer/maneuvers",
    Component: Maneuvers,
  },
  {
    path: "/winter",
    Component: Winter,
  },
  {
    path: "/winter/classic",
    Component: Classic,
  },
  {
    path: "/winter/skate",
    Component: Skate,
  },
  {
    path: "/winter/hills",
    Component: Hills,
  },
  {
    path: "/winter/waxing",
    Component: Waxing,
  },
  {
    path: "/book",
    Component: Book,
  },
  {
    path: "/links",
    Component: Links,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
