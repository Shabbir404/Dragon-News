import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from './../../firebase/firebase.config';


const SignUp = () => {
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const profileLink = e.target.profileLink.value;
        const name = e.target.name.value;

        if (!checked) {
            toast.error('You must have to click the checkbox');
            return;
        }

        if (email && password && profileLink && name) {
            console.log(email, password, profileLink, name);
        } else {
            toast.error('Please fill all the fields');
            return;
        }

        //firebase auth setup
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };




    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Create an account
                    </h2>
                    <hr />
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                name='name'
                                type="text"
                                id="name"
                                className="mt-2 w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="photoUrl" className="text-sm font-medium text-gray-700">
                                Photo URL
                            </label>
                            <input
                                name='profileLink'
                                type="url"
                                id="photoUrl"
                                className="mt-2 w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                                placeholder="Enter your photo URL"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                name='email'
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
                                name='password'
                                type="password"
                                id="password"
                                className="mt-2 w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                                placeholder="Create a password"
                            />
                        </div>

                        <div>
                            <div className="flex items-center space-x-2">
                                <input
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    type="checkbox"
                                    id="accept-terms"
                                    className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                />
                                <label htmlFor="accept-terms" className="text-gray-700 text-sm">
                                    I accept the{" "}
                                    <Link to="/terms-of-service" className="text-red-500 hover:underline">
                                        Terms and Conditions
                                    </Link>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition duration-200"
                        >
                            Sign up
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-gray-800 hover:underline font-medium">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
