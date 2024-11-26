import { rate } from "../../lib/rate";
import FilledButton from "../Button/FilledButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAddFeedback } from "../../hooks/useAddFeedback";

type FeedbackFormProps = {
  onSuccess: () => void;
};

const createFeedbackSchema = z.object({
  name: z
    .string()
    .min(4, { message: "O nome deve ter no minimo 4 caracteres." }),
  feedback: z
    .string()
    .min(10, { message: "O feedback deve ter no minimo 10 caracteres." }),
  rate: z.string(),
});

type CreateFeedbackFormData = z.infer<typeof createFeedbackSchema>;

export const FeedbackForm = (props: FeedbackFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRate, setIsRate] = useState<string>("");
  const [isSelectedRate, setIsSelectedRate] = useState<string | null>(null);

  const { mutate: addFeedback } = useAddFeedback();

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<CreateFeedbackFormData>({
    defaultValues: {
      name: "",
      feedback: "",
      rate: "",
    },
    resolver: zodResolver(createFeedbackSchema),
  });

  const handleRate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const clickedValue = event.currentTarget.value;
    setIsRate(event.currentTarget.value);
    setIsSelectedRate(clickedValue);
  };
  const onSubmit = async (data: CreateFeedbackFormData) => {
    console.log("Dados do formulário enviados:", data); // Adicione este log
    if (!isSelectedRate) {
      alert("Por favor, selecione uma opção antes de enviar.");
      return;
    }

    setIsLoading(true);
    try {
      await addFeedback({
        ...data,
        rate: isSelectedRate,
      });
      console.log("Feedback enviado com sucesso.");
      setIsLoading(false);
      props.onSuccess();
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col px-5 md:items-center lg:h-screen lg:w-full lg:p-5">
      <div className="text-center lg:w-1/2">
        <h2 className="text-2xl font-bold uppercase lg:mb-10">
          Sua opnião é muito importante!
        </h2>
        <p className="mb-5">
          Queremos saber o que você pensa! Sua avaliação nos ajuda a melhorar
          continuamente nossos serviços e atender às suas expectativas.
          Compartilhe suas ideias, sugestões ou feedbacks para que possamos
          evoluir juntos.
        </p>
      </div>
      <form
        className="flex w-full flex-col md:w-1/2 md:items-center"
        onSubmit={handleSubmit(onSubmit, (error) => {
          console.log(error);
        })}
      >
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Nome
        </label>
        <input
          disabled={isLoading}
          className="custom-input w-full transform rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out hover:border-blue-300 hover:shadow-lg focus:-translate-y-1 focus:outline-blue-300"
          placeholder="Seu nome aqui"
          type="text"
          {...register("name")}
          required
        />
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Feedback
        </label>
        <textarea
          disabled={isLoading}
          required
          className="custom-input h-56 w-full transform resize-none rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out hover:border-blue-300 hover:shadow-lg focus:-translate-y-1 focus:outline-blue-300 md:w-full"
          placeholder="Enter text here"
          {...register("feedback")}
        ></textarea>
        {errors.feedback && (
          <span className="text-xs font-bold text-red-600">
            {errors.feedback.message}
          </span>
        )}
        {errors.name && (
          <span className="text-xs font-bold text-red-600">
            {errors.name.message}
          </span>
        )}

        <div className="flex items-center justify-center md:my-4">
          {rate.map((item, index) => (
            <button
              onClick={(event) => handleRate(event)}
              key={index}
              className={`md:text-1xl my-2 rounded-lg px-4 py-2 text-xs font-bold text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-100 ${
                isSelectedRate === `${item.name} ${item.emoji}`
                  ? ""
                  : "scale-75 opacity-50"
              } ${item.bg}`}
              value={`${item.name} ${item.emoji}`}
            >
              {item.emoji} {item.name}
            </button>
          ))}
        </div>

        <FilledButton className="md:w-full" type="submit">
          {!isLoading ? "Enviar" : "Enviando..."}
        </FilledButton>
      </form>
    </section>
  );
};
