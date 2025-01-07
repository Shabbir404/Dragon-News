import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';

const MainHomeHeader = () => {
    return (
        <div>
            <div className="relative w-full px-4 md:w-10/12 mx-auto py-4 mt-5">
                {/* Mobile Navigation Links */}
                <div className="flex w-10/12 mx-auto justify-between items-center mt-4 space-x-6 md:hidden">
                    <div className="flex items-center">
                        <MdAccountCircle className="text-3xl" />
                    </div>
                    <div className="flex justify-center space-x-6 flex-1">
                        <Link to="/" className="text-neutral-700 text-lg hover:text-gray-900">
                            Home
                        </Link>
                        <Link to="/about" className="text-neutral-700 text-lg hover:text-gray-900">
                            About
                        </Link>
                        <Link to="/career" className="text-neutral-700 text-lg hover:text-gray-900">
                            Career
                        </Link>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button className="bg-gray-800 text-white px-2  py-2 hover:bg-gray-700 transition-colors">
                            Login
                        </button>
                    </div>
                </div>


                {/* Tablet and Desktop Layout */}
                <div className="hidden md:block">
                    {/* Centered Navigation Links */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-8">
                            <Link to="/" className="text-neutral-700 text-xl hover:text-gray-900">
                                Home
                            </Link>
                            <Link to="/about" className="text-neutral-700 text-xl hover:text-gray-900">
                                About
                            </Link>
                            <Link to="/career" className="text-neutral-700 text-xl hover:text-gray-900">
                                Career
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Login Section */}
                    <div className="flex justify-end">
                        <div className="flex items-center">
                            <MdAccountCircle className="text-4xl text-gray-700 mr-3" />
                            <button className="bg-gray-800 text-white px-8 py-2 hover:bg-gray-700 transition-colors">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='mt-4' />
            </div>
        </div>
    );
};

export default MainHomeHeader;