import React, { useState, useEffect } from 'react';
import '../../Coustom-styles/HaderCss/Header.css'

// TimeDisplay Component to handle the time logic
const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [day, setDay] = useState('');

    useEffect(() => {
        const updateTimeAndDay = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
            setDay(now.toLocaleString('en-us', { weekday: 'long' })); // Get day name (e.g., Monday, Tuesday)
        };

        updateTimeAndDay(); // Initial set on component load
        const interval = setInterval(updateTimeAndDay, 1000); // Update every second

        // Cleanup on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className='text-center mt-1.5 text-gray-400'>{day}, {time}</h1>
        </div>
    );
};

const Header = () => {

    return (
        <div>
            <h1 className='unifrakturcook-bold mt-2'> Dragon News Today</h1>
            <p className='text-center text-gray-700 poppins-regular'>
                Journalism Without Fear or Favour</p>
            <TimeDisplay></TimeDisplay>
        </div>
    );
};

export default Header;