import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Components/Home/Main";
import Home from "../src/Components/Home/Home";
import Converter from "../src/Components/Converter/Converter";
import IctCalculator from "../src/Components/IctCalculator/IctCalculator";
import ScientificCalculator from "../src/Components/ScientificCalculator/ScientificCalculator";
import Currency from "../src/Components/Currency/Currency";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/converter",
        element: <Converter />,
      },
      {
        path: "/IctCalculator",
        element: <IctCalculator />,
      },
      {
        path: "/ScientificCalculator",
        element: <ScientificCalculator />,
      },
      {
        path: "/Currency",
        element: <Currency />,
      },
    ],
  },
]);
export default Router;
