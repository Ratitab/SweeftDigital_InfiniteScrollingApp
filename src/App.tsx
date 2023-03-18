import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import UserPage from "./pages/userPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/user/:id",
      element: <UserPage />,
    },
  ]);
  return (
    <section
      className="app"
      id="scroll_wrapper"
    >
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
