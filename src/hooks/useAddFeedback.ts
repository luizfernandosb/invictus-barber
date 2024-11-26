import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useAddFeedback = () => {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      rate: string;
      feedback: string;
    }) => {
      console.log('Enviando para o backend.')
      return await axios.post(`${apiUrl}/api/feedbacks`, data);
    },
    onSuccess: async () => {
      console.log('Enviado.')
      await queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
    },
  });
};
