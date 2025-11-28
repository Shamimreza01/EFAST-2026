import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="">
        <Navigation />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
