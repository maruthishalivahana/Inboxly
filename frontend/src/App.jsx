import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "../Components/Profile.jsx";
import WelcomeScreen from "./pages/Welcome.jsx";
import LandingPage from "./pages/Landing.jsx";
import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [started, setStarted] = useState(false);

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
    <div className={"min-h-screen " + (isDark ? "bg-[#000000]" : "bg-[#E5E5E5]")}>
      {/* Navbar */}
      <nav
        className={
          (isDark
            ? "bg-[#14213D]/80"
            : "bg-white/80 border-b border-[#E5E5E5]") +
          " flex items-center justify-between py-4 px-6 backdrop-blur sticky top-0 z-10"
        }
      >
        <h1
          className={
            (isDark ? "text-white" : "text-[#14213D]") + " text-xl font-semibold"
          }
        >
          Inboxly
        </h1>

        <div className="flex items-center gap-4">
          <Link
            to="/profile"
            className={
              (isDark ? "text-[#FCA311]" : "text-[#14213D]") +
              " hover:brightness-110"
            }
          >
            Profile
          </Link>
          <button
            onClick={toggleTheme}
            className={
              (isDark
                ? "bg-[#FCA311] text-black"
                : "bg-[#14213D] text-white") +
              " rounded-full px-3 py-1 text-sm font-medium shadow-sm"
            }
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile isDark={isDark} />} />
      </Routes>
    </div>
  );
}
