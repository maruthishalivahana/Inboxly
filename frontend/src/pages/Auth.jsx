import React, { useState } from 'react';

// --- SVG Icons ---
// Using functional components for SVG icons for better reusability and cleaner code.
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.245 44 30.028 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

const GithubIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

// --- Main App Component ---
export default function Auth() {
    // State to toggle between login and signup forms
    const [isLoginView, setIsLoginView] = useState(true);

    // Main container with a gradient background
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans flex items-center justify-center p-4">
            <div className="w-full max-w-4xl min-h-[520px] bg-slate-800 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

                {/* Left Panel: Branding and Information */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-slate-900/50">
                    <h1 className="text-4xl  md:text-5xl font-bold mb-10  text-purple-500">
                        Inboxly
                    </h1>
                    <p className="text-slate-300 text-lg mb-6">
                        The open-source messenger platform for seamless team and product communication.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="text-slate-400"><strong>Real-time Messaging:</strong> Direct messages, group chats, and threads.</p>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <p className="text-slate-400"><strong>Fully Integratable:</strong> Use our API or embed directly into your app.</p>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            <p className="text-slate-400"><strong>Secure & Self-Hostable:</strong> Complete control over your data and infrastructure.</p>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    {isLoginView ? (
                        // --- Login Form ---
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                            <p className="text-slate-400 mb-8">Log in to continue to Inboxly.</p>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="login-email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="login-email"
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="login-password" className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                                    <input
                                        type="password"
                                        id="login-password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <a href="#" className="text-sm text-blue-400 hover:underline">Forgot Password?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                                >
                                    Log In
                                </button>
                            </form>

                            <div className="my-6 flex items-center">
                                <div className="flex-grow border-t border-slate-600"></div>
                                <span className="mx-4 text-slate-400 text-sm">Or continue with</span>
                                <div className="flex-grow border-t border-slate-600"></div>
                            </div>

                            <div className="flex gap-4">
                                <button className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                                    <GoogleIcon /> Google
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                                    <GithubIcon /> GitHub
                                </button>
                            </div>

                            <p className="text-center text-sm text-slate-400 mt-8">
                                Don't have an account?{' '}
                                <button onClick={() => setIsLoginView(false)} className="font-medium text-blue-400 hover:underline">
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    ) : (
                        // --- Signup Form ---
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Create an Account</h2>
                            <p className="text-slate-400 mb-8">Start your journey with Inboxly today.</p>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="signup-name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="signup-name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="signup-email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="signup-email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="signup-role" className="block text-sm font-medium text-slate-300 mb-2">Role</label>
                                    <select
                                        id="signup-role"
                                        name="role"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 appearance-none"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                                    >
                                        <option>User</option>
                                        <option>Admin</option>

                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="signup-password" className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                                    <input
                                        type="password"
                                        id="signup-password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 !mt-6"
                                >
                                    Create Account
                                </button>
                            </form>

                            <div className="my-6 flex items-center">
                                <div className="flex-grow border-t border-slate-600"></div>
                                <span className="mx-4 text-slate-400 text-sm">Or sign up with</span>
                                <div className="flex-grow border-t border-slate-600"></div>
                            </div>

                            <div className="flex gap-4">
                                <button className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                                    <GoogleIcon /> Google
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                                    <GithubIcon /> GitHub
                                </button>
                            </div>

                            <p className="text-center text-sm text-slate-400 mt-8">
                                Already have an account?{' '}
                                <button onClick={() => setIsLoginView(true)} className="font-medium text-blue-400 hover:underline">
                                    Log In
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
