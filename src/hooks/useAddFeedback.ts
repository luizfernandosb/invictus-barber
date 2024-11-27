import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

type AddFeedbackArgs = {
  onSuccess: () => void;
  data: {
    name: string;
    feedback: string;
    rate: string;
  };
};

export const useAddFeedback = () => {
  const apiUrl = import.meta.env.VITE_BASE_URL;

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (props: AddFeedbackArgs) => {
      console.log("Enviando para o backend.");
      return await axios.post(`${apiUrl}/api/feedbacks`, props.data);
    },
    onSuccess: async (_, args) => {
      console.log("Enviado com sucesso.");
      await queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
      args.onSuccess();
    },
    onError: async () => {
      toast.error("Erro ao envia formulário");
      return;
    },
  });
};
