import React, { useEffect } from "react";

const EventbriteTickets = () => {
  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
        script.async = true;
        script.onload = resolve; // ✅ Resolve when loaded
        script.onerror = reject; // ❌ Reject on error
        document.body.appendChild(script);
      });
    };

    loadScript()
      .then(() => {
        if (window.EBWidgets) {
          // ✅ Now create the widget
          window.EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: "1039005502427", // 👈 Replace with your actual Event ID
            modal: true,
            modalTriggerElementId: "eventbrite-widget-trigger",
          });
        } else {
          console.error("EBWidgets not available on window.");
        }
      })
      .catch((err) => {
        console.error("Failed to load Eventbrite widget script:", err);
      });
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
