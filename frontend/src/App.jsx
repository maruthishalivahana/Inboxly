import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "./Components/Profile.jsx";
import WelcomeScreen from "./pages/Welcome.jsx";
import LandingPage from "./pages/Landing.jsx";
import Auth from "./pages/Auth.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [started, setStarted] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("inboxly-theme");
    if (savedTheme === "light") setIsDark(false);
  }, []);

  // Apply theme class to <html> for Tailwind dark variants
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;
      localStorage.setItem("inboxly-theme", nextTheme ? "dark" : "light");
      return nextTheme;
    });
  };

  if (!started) {
    return <WelcomeScreen onGetStarted={() => setStarted(true)} />;
  }

  const backgroundClass = isDark ? "bg-[#000000]" : "bg-[#E5E5E5]";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${backgroundClass}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile isDark={isDark} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<div className="text-center p-4">Page not found</div>} />
      </Routes>
    </div>
  );
}