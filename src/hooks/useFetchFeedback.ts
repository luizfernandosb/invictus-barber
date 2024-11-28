import { useQuery } from "@tanstack/react-query";

export const useFetchFeedback = () => {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const validRate = ["Bom", "Regular", "Ótimo"];

  return useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/feedbacks`);
      if (!response.ok) {
        throw new Error("Failed to fetch feedbacks");
      }
      const data = await response.json();
      const filteredFeedbacks = await data.filter((item: any) =>
        validRate.includes(item.rate),
      );
      console.log(filteredFeedbacks)
      return filteredFeedbacks.reverse();
    },
  });
};
