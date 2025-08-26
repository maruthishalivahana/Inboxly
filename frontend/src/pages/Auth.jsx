// src/pages/Auth.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Demo-only (no backend)
        if (email && password) {
            // Save demo user in localStorage
            localStorage.setItem("demoUser", JSON.stringify({ email }));

            // Redirect to Welcome page
            navigate("/welcome");
        } else {
            alert("Please enter email & password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Demo Login
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Demo mode — any email & password works 🚀
                </p>
            </div>
        </div>
    );
};

export default Auth;
