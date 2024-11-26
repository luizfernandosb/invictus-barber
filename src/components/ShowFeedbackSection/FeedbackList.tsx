import { useState } from "react";
import { feedbacks } from "../../lib/feedbacks";
import { FeedbackItem } from "./FeedbackItem";

export const FeedbackList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="relative mx-auto mb-5 w-full max-w-4xl overflow-hidden bg-cyan-950 md:overflow-visible">
      <ul
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {feedbacks.map((item, index) => (
          <FeedbackItem
            key={index}
            name={item.name}
            rate={item.rate}
            emoji={item.emoji}
            feedback={item.feedback}
            date={item.date}
          />
        ))}
      </ul>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
        onClick={handleNext}
      >
        &#8594;
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
        {feedbacks.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};
