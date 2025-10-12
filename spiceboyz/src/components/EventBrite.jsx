// src/components/EventBrite.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EventBrite.css"; // optional if you want your old .buy-button style

const EventBrite = ({ eventId = "1811064124549" }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1) Fetch event details (title, image, description, url) from Eventbrite
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.eventbriteapi.com/v3/events/${eventId}/`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_EVENTBRITE_API_KEY}`,
            },
          }
        );
        setEvent(res.data);
      } catch (err) {
        console.error("Error fetching Eventbrite event:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEventDetails();
  }, [eventId]);

  useEffect(() => {
    if (loading || !event) return;

    const SCRIPT_SRC = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    const init = () => {
      if (!window.EBWidgets) return;
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId,
        modal: true,
        modalTriggerElementId: "eventbrite-widget-trigger",
        onOrderComplete: () => console.log("Order complete!"),
      });
    };

    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (window.EBWidgets) {
      init();
    } else if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    } else {
      script.addEventListener("load", init, { once: true });
    }
  }, [loading, event, eventId]);

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>No event data found.</p>;

  const desc = event?.description?.text || "";
  const shortDesc = desc.length > 700 ? `${desc.slice(0, 700)}…` : desc;

  return (
    <div style={containerStyle} data-aos="fade-up">
      <h1>{event?.name?.text}</h1>

      {event?.logo?.url && (
        <img
          src={event.logo.url}
          alt={event?.name?.text || "Event flyer"}
          style={imageStyle}
        />
      )}

      {shortDesc && <p>{shortDesc}</p>}

      <div style={{height: "5vh"}}></div>

      
      <a
        id="eventbrite-widget-trigger"
        href={event?.url}                 
        className="buy-button"            
        onClick={(e) => {
          
          if (window.EBWidgets) e.preventDefault();
        }}
      >
        {event?.name?.text ? "Buy Tickets" : "Tickets"}
      </a>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  fontFamily: "'Georgia', serif", 
  textAlign: "center",
};

const imageStyle = {
  maxWidth: "400px",   
  height: "auto",
  borderRadius: "8px",
  marginBottom: "20px",
};

export default EventBrite;
