import React, { useEffect, useState } from "react";
import axios from "axios";

const EventbriteTickets = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          "https://www.eventbriteapi.com/v3/events/1039005502427/",
          {
            headers: {
              Authorization: "Bearer JT2XIVGKX5SQPRMKEQIQ",
            },
          }
        );
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching Eventbrite event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      script.async = true;
      script.onload = () => {
        if (window.EBWidgets) {
          window.EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: "1039005502427",
            modal: true,
            modalTriggerElementId: "eventbrite-widget-trigger",
          });
        }
      };
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  if (loading) return <p>Loading event details...</p>;

  return (
    <div style={containerStyle}>
      {event ? (
        <>
          <h1>{event.name.text}</h1>
          {event.logo && (
            <img
              src={event.logo.url}
              alt={event.name.text}
              style={imageStyle}
            />
          )}
          <p>{event.description.text}</p>
          <button id="eventbrite-widget-trigger" style={buttonStyle}>
            Buy Tickets
          </button>
        </>
      ) : (
        <p>No event data found.</p>
      )}
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const imageStyle = {
  maxWidth: "600px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "12px 24px",
  backgroundColor: "#f6682f",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

export default EventbriteTickets;
