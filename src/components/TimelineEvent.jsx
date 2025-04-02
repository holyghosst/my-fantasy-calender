import React from 'react';

const TimelineEvent = ({ event }) => (
    <div className="relative">
        <div className="absolute -left-7.5 top-11 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
        <div className="w-full p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date}</p>
            <p>{event.description}</p>
        </div>
    </div>

);

export default TimelineEvent;
