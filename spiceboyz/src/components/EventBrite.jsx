import { useEffect } from "react";

export default function EventBrite() {
  useEffect(() => {
    const CONTAINER_ID = "eventbrite-widget-container-1811064124549";
    const SCRIPT_SRC = "https://www.eventbrite.com/static/widgets/eb_widgets.js";

    const exampleCallback = () => console.log("Order complete!");

    const initWidget = () => {
      if (!window.EBWidgets) return;
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: "1811064124549",
        iframeContainerId: CONTAINER_ID,
        iframeContainerHeight: 425,
        onOrderComplete: exampleCallback,
      });
    };

    if (window.EBWidgets) {
      initWidget();
    } else {
      let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.async = true;
        script.onload = initWidget;
        document.body.appendChild(script);
      } else {
        script.addEventListener("load", initWidget, { once: true });
      }
    }
  }, []);

  return <div id="eventbrite-widget-container-1811064124549"></div>;
}
