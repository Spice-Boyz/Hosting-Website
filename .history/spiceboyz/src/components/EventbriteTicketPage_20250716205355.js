import React, { useEffect } from "react";

const EventbriteTickets = () => {
  useEffect(() => {
    // Load the Eventbrite widget script
    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: "1039005502427", // 👈 Replace with your Eventbrite event ID
          modal: true, // Opens as a popup
          modalTriggerElementId: "eventbrite-widget-trigger",
        });
      }
    };
  }, []);

  return (
    <div>
      <h1>Get Your Tickets</h1>
      <button id="eventbrite-widget-trigger" style={buttonStyle}>
        Buy Tickets
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "12px 24px",
  backgroundColor: "#f6682f",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default EventbriteTickets;
