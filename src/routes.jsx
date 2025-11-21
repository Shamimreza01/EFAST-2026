import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import UnderDevelopmentPage from "./pages/UnderDevelopmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/keynote-speaker",
        element: <UnderDevelopmentPage />,
      },
      {
        path: "/invited-speaker",
        element: <UnderDevelopmentPage />,
      },
      { path: "/register", element: <UnderDevelopmentPage /> },
      { path: "/schedule", element: <UnderDevelopmentPage /> },
      { path: "/abstract-submission", element: <UnderDevelopmentPage /> },
    ],
  },
]);

export default router;
