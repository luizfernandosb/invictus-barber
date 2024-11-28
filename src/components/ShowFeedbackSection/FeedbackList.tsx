import { FeedbackItem } from "./FeedbackItem";
import { useFetchFeedback } from "../../hooks/useFetchFeedback";
import { format } from "date-fns";

import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import "swiper/css/navigation";
import { A11y, Navigation, Zoom } from "swiper/modules";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

export const FeedbackList = () => {
  const { data: feedbacks, isLoading, isError } = useFetchFeedback();

  const [isSetPreview, setIsSetPreview] = useState<number>(1);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 720) {
        setIsSetPreview(4);
      } else {
        setIsSetPreview(1);
      }
    };
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  if (isLoading)
    return <Loader />;
  if (isError)
    return (
      <div className="text-center text-red-500 font-bold">Erro ao carregar feedbacks.</div>
    );
  if (!feedbacks) return <div>...</div>;
  return (
    
      
      <Swiper
        modules={[Zoom, Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={isSetPreview}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {feedbacks.map((item: any) => (
          <SwiperSlide key={item.id}>
            <FeedbackItem
              name={item.name}
              rate={item.rate}
              emoji={item.emoji}
              feedback={item.feedback}
              date={format(item.createdAt, "dd/MM/yyyy' 'HH:mm:ss")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};
