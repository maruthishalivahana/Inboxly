import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "/Components/Profile.jsx";



function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
