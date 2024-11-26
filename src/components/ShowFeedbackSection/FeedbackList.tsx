import { useState } from "react";
import { FeedbackItem } from "./FeedbackItem";
import { useFetchFeedback } from "../../hooks/useFetchFeedback";

export const FeedbackList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data: feedbacks, isLoading, isError } = useFetchFeedback();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 3 : prevIndex - 3,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= feedbacks.length ? 0 : prevIndex + 3,
    );
  };

  if (isLoading)
    return <div className="text-center text-white">Carregando...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Erro ao carregar feedbacks</div>
    );

  return (
    <section className="relative mx-auto mb-10 w-full max-w-6xl overflow-hidden">
      <ul
        className="mb-6 flex w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // Move 3 itens de cada vez
      >
        {feedbacks.map((item: any, index: number) => (
          <li
            key={index}
            className="flex w-full flex-shrink-0 justify-center px-1 py-1 md:w-1/3"
          >
            <div className="h-full w-full transform rounded-2xl p-8 transition-all duration-300 ease-out hover:scale-105">
              <FeedbackItem
                name={item.name}
                rate={item.rate}
                emoji={item.emoji}
                feedback={item.feedback}
                date={item.date}
              />
            </div>
          </li>
        ))}
      </ul>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-6 text-white transition-transform hover:scale-110 hover:bg-gray-700"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-6 text-white transition-transform hover:scale-110 hover:bg-gray-700"
        onClick={handleNext}
      >
        &#8594;
      </button>

      {/* <div className="absolute mt-6 bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {feedbacks.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${currentIndex === index * 3 ? "bg-gray-900" : "bg-gray-500"}`}
          ></div>
        ))}
      </div> */}
    </section>
  );
};
