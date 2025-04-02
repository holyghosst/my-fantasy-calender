import React, { useEffect, useState } from 'react';
import TimelineEvent from './TimelineEvent';

function AddEventButton() {
    function handleClick() { };


    return (
        <button className="w-full bg-cyan-300 rounded shadow" onClick={handleClick} >Add Event</button>
    )

}

const addEvent = (name, date, description) => {

}

const Timeline = () => {
    const [events, setEvents] = useState([]);
    const address = "./events_en.json"

    useEffect(() => {
        fetch(address)
            .then((response) => response.json())
            .then((data) => setEvents(data.events));
    }, []);


    return (
        <div className="relative">
            <div className="absolute left-6 top-0 w-1 bg-gray-400 h-full"></div>
            <div className="space-y-4 pl-12">
                {events.map(event => (
                    <TimelineEvent key={event.id} event={event} />
                ))}
            </div>
            <div className="space-y-4 pl-12 pt-4 relative">
                <AddEventButton></AddEventButton>
            </div>
        </div>

    );
}

export default Timeline;
