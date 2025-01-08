import '../../Coustom-styles/AllCatagoryCss/AllCatagory.css';
import { Link, useLoaderData } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";

const AllCatagory = () => {
    const data = useLoaderData([0]);
    console.log(data);

    return (
        <div className='hidden md:block' >
            <ul className="text-2xl text-black font-bold">
                All Categories
                <div className="ml-2.5 text-lg font-medium mt-5 text-center">
                    <li className="ml-2 text-color p-4  text-gray-700 rounded-md">
                        <Link to="/breaking-news">Breaking News</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/national-news">National News</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/regular-news">Regular News</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/international-news">International News</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/sports">Sports</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/culture">Culture</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/arts">Arts</Link>
                    </li>
                    <li className="ml-2 p-4  text-gray-700 rounded-md">
                        <Link to="/all-news">All News</Link>
                    </li>
                </div>
            </ul>
            <div className='ml-4'>
                {data.slice(0, 3).map((item, i) => (
                    <div key={i}>
                        <h1 className='font-semibold  text-gray-700'>{item.title}</h1>
                        <img className='size-auto mt-6' src={item.thumbnail_url} alt={item.title} width={200} />
                        <div className='flex'>
                            <CiCalendarDate className='mt-2 text-2xl'></CiCalendarDate>
                            <p className='mt-2 font-thin ml-2'>{item.author.published_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCatagory;