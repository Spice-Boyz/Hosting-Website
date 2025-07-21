import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventbriteTicketPage = () => {
    const [eventDetails, setEventDetails] = useState(null);
    const [tickets, setTickets] = useState([]);
    const eventId = '1039005502427';  // Masked Eventbrite ID (replace with actual ID)

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(
                    `https://www.eventbriteapi.com/v3/events/${eventId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_EVENTBRITE_API_KEY}`, // Correct usage of env variable
                        },
                    }
                );
                setEventDetails(response.data);
                setTickets(response.data.ticket_classes || []); // Handle missing or empty ticket_classes
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchEventData();
    }, [eventId]);

    return (
        <div>
            {eventDetails ? (
                <>
                    <h1>{eventDetails.name.text}</h1>
                    <p>{eventDetails.description.text}</p>
                    <p>{`Date: ${new Date(eventDetails.start.local).toLocaleString()}`}</p>

                    <h2>Tickets</h2>
                    {tickets.length > 0 ? (
                        <ul>
                            {tickets.map((ticket) => (
                                <li key={ticket.id}>
                                    <p>{ticket.name}</p>
                                    <p>{`Price: ${ticket.cost ? ticket.cost.display : 'Free'}`}</p>
                                    <button
                                        onClick={() => window.open(ticket.url, '_blank')}
                                    >
                                        Buy Tickets
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No tickets available for this event.</p>
                    )}
                </>
            ) : (
                <p>Loading event details...</p>
            )}
        </div>
    );
};

export default EventbriteTicketPage;
