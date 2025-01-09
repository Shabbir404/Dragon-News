import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import '../../../Coustom-styles/LeftContainer/Left-Container.css';
import classImg from '../../../assets/class.png'
import bgImg from '../../../assets/bg.png'
import playgroundImg from '../../../assets/playground.png'
import SwimmingImg from '../../../assets/swimming.png'
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LeftContainer = () => {

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl text-black font-bold ml-2">Login Wtih</h1>
                <div className="mt-5">
                    <div className=" text-blue-600 border-blue-700 p-2  border
                     mt-2 w-full rounded-lg flex justify-between items-center">
                        <FaFacebook className="text-2xl"></FaFacebook>
                        <button>Login with Facebook</button>
                        <br />
                    </div>
                    <div className=" text-black border-gray-700 p-2  border
                     mt-2 w-full rounded-lg flex justify-between items-center">
                        <FaGithub className="text-2xl"></FaGithub>
                        <button>Login with Github</button>
                        <br />
                    </div>

                    <div className=" text-red-600 border-red-700 p-2  border
                     mt-2 w-full rounded-lg flex justify-between items-center">

                        <FcGoogle className="text-2xl"></FcGoogle>
                        <button onClick={googleSignIn} >Login with Google</button>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="">
                <h1 className="Left-Container-font text-2xl text-black font-bold ml-2">Find Us On</h1>
                <div className="">
                    <div className="mt-5 border-gray-300 p-4 border rounded-md">
                        <div className=" 
                     mt-2 w-full rounded-lg flex justify-between font-bold items-center">
                            <FaFacebook className="text-2xl"></FaFacebook>
                            <button>Facebook</button>
                            <br />
                        </div>
                        <hr className="mt-4" />
                        <div className=" text-black 
                     mt-2 w-full rounded-lg flex justify-between items-center font-bold">
                            <FaSquareXTwitter className="text-2xl"></FaSquareXTwitter>
                            <button>X</button>
                            <br />
                        </div>
                        <hr className="mt-4 mb-4" />
                        <div className=" 
                     mt-2 w-full rounded-lg flex justify-between font-bold items-center">
                            <FaInstagram className="text-2xl"></FaInstagram>
                            <button >Instgram</button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="hidden md:block bg-color p-4 rounded-lg">
                <h1 className="Left-Container-font text-2xl text-black font-bold ml-2">Q-Zone</h1>
                <div className=" ml-2">
                    <img src={SwimmingImg} alt="" />
                    <img src={classImg} alt="" />
                    <img src={playgroundImg} alt="" />
                    <br />
                    <img src={bgImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default LeftContainer;