import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "../Components/Profile.jsx";
import WelcomeScreen from "./pages/Welcome.jsx";
import LandingPage from "./pages/Landing.jsx";
import Auth from "./pages/Auth.jsx";
import "./App.css";


export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("inboxly-theme");
    if (saved === "light") setIsDark(false);
  }, []);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("inboxly-theme", next ? "dark" : "light");
      return next;
    });
  }

  if (!started) {
    return <WelcomeScreen onGetStarted={() => setStarted(true)} />;
  }

  return (




    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

  );
}
