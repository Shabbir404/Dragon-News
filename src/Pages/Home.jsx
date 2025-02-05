import { useLoaderData } from 'react-router-dom';
import '../Coustom-styles/HomeCss/home.css'
import AllCatagory from '../Layouts/AllCatagory/AllCatagory';
import LeftContainer from '../Layouts/Container/LeftContainer/LeftContainer';
import MainHome from '../Layouts/MainHome/MainHome';
import MainHomeHeader from '../Layouts/MainHome/MainHomeHeader/MainHomeHeader';

const Home = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto div-bg mt-6 p-2'>
                {/* latest news flex start */}
                <div className='flex  '>
                    <button className="bg-pink-600 pt-3.5 pb-3.5 pl-7 pr-7 poppins-medium text-white hover:bg-pink-700">
                        Latest</button>
                    <div className='news-ticker-container'>
                        <div className='news-ticker'>
                            <h2 className='ml-2'>The stock market hits a new record high! |
                                Local elections results are in! |
                                New technological innovations announced today!</h2>
                        </div>
                    </div>
                </div>
                {/* latest news flex end.. */}
            </div>
            <MainHomeHeader></MainHomeHeader>
            <div className="mt-5 grid w-10/12 mx-auto grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                    <AllCatagory />
                </div>
                <div className="md:col-span-6">
                    <MainHome />
                </div>
                <div className="md:col-span-3">
                    <LeftContainer />
                </div>
            </div>



        </div>
    );
};

export default Home;