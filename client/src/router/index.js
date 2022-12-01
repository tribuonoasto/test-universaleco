import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Form from "../pages/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <Form />,
  },
]);

export default router;
