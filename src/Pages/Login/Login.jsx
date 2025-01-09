import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email && password) {
            console.log(email, password);
        }

        //firebase sign in

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    navigate('/');
                }
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
                toast.error('Opps...! There is no account with this email');
            });



    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login to your account
                    </h2>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-2">
                            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                            <input type="email" name="email" id="email" className="w-full bg-gray-100 px-3 py-2 border rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                            <input type="password" name="password" id="password" className="w-full bg-gray-100 px-3 py-2 border rounded-lg" required />
                        </div>
                        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg">Login</button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/signup" className="text-gray-500 ">Don't have an account? <a href="" className='underline text-gray-600 font-semibold'>Sign up</a> </Link>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;