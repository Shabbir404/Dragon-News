import '../../Coustom-styles/AllCatagoryCss/AllCatagory.css'
import { Link, useLoaderData } from 'react-router-dom';

const AllCatagory = () => {

    const allDeta = useLoaderData();
    const {
        _id,
        others_info: { is_todays_pick, is_trending },
        category_id,
        rating: { number: ratingNumber, badge: ratingBadge },
        total_view,
        title,
        author: { name: authorName, published_date, img: authorImg },
        thumbnail_url,
        image_url,
        details
    } = useLoaderData();


    return (
        <div>
            <div>
                <ul className="text-2xl text-black font-bold">
                    All Category
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

            </div>
        </div>
    );
};

export default AllCatagory;