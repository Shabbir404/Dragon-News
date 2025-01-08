import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const LeftContainer = () => {
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
                        <button >Login with Google</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftContainer;