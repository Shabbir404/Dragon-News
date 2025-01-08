import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CiBookmark, CiShare2, CiStar, } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import '../../Coustom-styles/MainHomeCss/Main-home-css.css';

const MainHome = () => {
    const data = useLoaderData([0]);
    console.log(data);

    return (
        <div>
            <h1 className="text-2xl text-black font-bold">
                Dragon News Home
            </h1>

            <div className='mt-5'>
                {data.slice(3, 6).map((item, i) => (
                    <div key={i} className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">

                        <div className="p-2 post-text-box-color">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.author.img}
                                        alt={item.author.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-medium post-tittle">
                                            {item.author.name}
                                        </h3>
                                        <p className="font-thin text-gray-600">
                                            {item.author.published_date}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4 text-2xl'>
                                    <CiBookmark className="cursor-pointer hover:text-blue-600" />
                                    <CiShare2 className="cursor-pointer hover:text-blue-600" />
                                </div>
                            </div>
                        </div>
                        <h1 className="font-semibold text-gray-700 text-4xl text-color-title p-4">
                            {item.title}
                        </h1>
                        <img
                            className="w-full h-64 object-cover p-2 rounded-lg"
                            src={item.thumbnail_url}
                            alt={item.title}
                        />

                        {/* Author Info and Details Section */}
                        <div className="p-4">
                            {/* News Description */}
                            <p className="mt-4 text-gray-600 line-clamp-3">
                                {item.details}
                            </p>

                            {/* Read More Button */}
                            <div className="mt-4">
                                <button className=" text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200">
                                    Read More
                                </button>
                            </div>
                            <hr />
                            {/*total post */}

                            <div className="mt-2 px-2">
                                <div className="flex items-center justify-between">
                                    {/* Views - Left Side */}

                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            <FaStar className="w-5 h-5 text-yellow-400" />
                                            <FaStar className="w-5 h-5 text-yellow-400" />
                                            <FaStar className="w-5 h-5 text-yellow-400" />
                                            <FaStar className="w-5 h-5 text-yellow-400" />
                                        </div>
                                        <span className="text-md font-medium text-gray-600">
                                            {item.rating.number}
                                        </span>
                                    </div>

                                    {/* Rating - Right Side */}

                                    <div className="text-gray-600 flex items-center gap-2">
                                        <FaEye className="w-6 h-6 text-gray-600" />
                                        <span className="font-medium">{item.total_view}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trending and Today's Pick Tags */}
                        {(item.others_info.is_trending || item.others_info.is_todays_pick) && (
                            <div className="flex gap-2 p-4 pt-0">
                                {item.others_info.is_trending && (
                                    <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">
                                        Trending
                                    </span>
                                )}
                                {item.others_info.is_todays_pick && (
                                    <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                                        Today's Pick
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainHome;