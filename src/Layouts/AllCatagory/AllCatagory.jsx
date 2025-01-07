import '../../Coustom-styles/AllCatagoryCss/AllCatagory.css';
import { Link, useLoaderData } from 'react-router-dom';

const AllCatagory = () => {
    const UserData = useLoaderData();
    console.log(UserData);

    return (
        <div>
            <ul className="text-2xl text-black font-bold">
                All Categories
                <div className="ml-2.5 text-lg font-medium mt-5 text-center">
                    <li className="ml-2 text-color p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/breaking-news">Breaking News</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/national-news">National News</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/regular-news">Regular News</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/international-news">International News</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/sports">Sports</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/culture">Culture</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/arts">Arts</Link>
                    </li>
                    <li className="ml-2 p-4 mr-40 text-gray-700 rounded-md">
                        <Link to="/all-news">All News</Link>
                    </li>
                </div>
            </ul>
            <h1>nothing</h1>
        </div>
    );
};

export default AllCatagory;
