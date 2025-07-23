import React, { useState, useEffect } from 'react';
import './ReviewWidget.css';

const reviews = [
    {
        text: "OPOR 🔥🔥",
        author: "- Mayowa L",
    },

    {
       text: "PROBLEM!!",
       author: "- Nayira g", 
    },

    {
        text: "Another banger ‼️‼️",
        author: "- Ajay the Dj",
    },
    {
        text: "Spice boyz we wanna parttyyyyy🤸🏾‍♀️😁",
        author: "- Mira",
    },
    {
        text: "This was lit🔥🔥🔥, more of these !",
        author: "- maxkio_",
    },
    {
        text: "Crazy run",
        author: "Mayokun L",
    },
    {
        text: "A time was had 🚨🚨", 
         author: "- Mira",
    },
    {
        text: "Actually the best party I've been to", 
        author: "- Kemi A",
    },

];

function ReviewWidget() {
    const [index, setIndex] = useState(0);

     useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const { text, author } = reviews[index];

   return (
    <div className="review-widget" data-aos="fade-up">
      <p className="review-text">“{text}”</p>
      <p className="review-author">{author}</p>
    </div>
  );

}

export default ReviewWidget;

