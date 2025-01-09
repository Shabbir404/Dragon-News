import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login to your account
                    </h2>
                    <hr />
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-2 w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition duration-200"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-gray-800 hover:underline font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;