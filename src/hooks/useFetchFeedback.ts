import { useQuery } from "@tanstack/react-query";

export const useFetchFeedback = () => {
  const apiUrl = import.meta.env.VITE_BASE_URL;

  return useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/feedbacks`);
      if (!response.ok) {
        throw new Error("Failed to fetch feedbacks");
      }
      const data = await response.json();
      return data;
    },
  });
};
