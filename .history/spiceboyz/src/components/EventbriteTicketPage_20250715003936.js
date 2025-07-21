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
                            Authorization: `Bearer ${process.env.REACT_APP_EVENTBRITE_API_KEY}`, 
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


export default EventbriteTicketPage;
