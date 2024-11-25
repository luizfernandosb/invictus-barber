import { rate } from "../../lib/rate";
import FilledButton from "../Button/FilledButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FeedbackFormProps = {
  onSuccess: () => void;
};

const createFeedbackSchema = z.object({
  name: z.string().min(4, { message: "No minimo 4 caracteres" }),
  feedback: z.string().min(10, { message: "Minimo 10 caracteres." }),
});

type CreateFeedbackFormData = z.infer<typeof createFeedbackSchema>;

export const FeedbackForm = (props: FeedbackFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateFeedbackFormData>({
    defaultValues: {
      name: "",
      feedback: "",
    },
    resolver: zodResolver(createFeedbackSchema),
  });

  const onSubmit = async (data: CreateFeedbackFormData) => {
    try {
      setIsLoading(true);
      console.log(isLoading);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Enviado!");
      props.onSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <section className="flex flex-col items-center lg:h-screen lg:w-full lg:p-5">
      <div className="text-center lg:w-1/2">
        <h2 className="text-2xl font-bold uppercase lg:mb-10">
          Sua opnião é muito importante!
        </h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iure
          veritatis sit ipsa fugiat cum autem voluptate aliquam dolorem!
          Voluptas est enim veritatis officia optio, ducimus animi quas dolorum!
          Reiciendis.
        </p>
      </div>
      <form className="flex w-1/2 flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Nome
        </label>
        <input
          className="custom-input w-full transform rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out hover:border-blue-300 hover:shadow-lg focus:-translate-y-1 focus:outline-blue-300"
          placeholder="Seu nome aqui"
          type="text"
          {...register("name")}
        />
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Feedback
        </label>
        <textarea
          className="custom-input h-56 w-full transform resize-none rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out hover:border-blue-300 hover:shadow-lg focus:-translate-y-1 focus:outline-blue-300"
          placeholder="Enter text here"
          {...register("feedback")}
        ></textarea>

        <div className="my-4 flex justify-between">
          {rate.map((item, index) => (
            <button
              key={index}
              className={`rounded-lg px-4 py-2 font-bold text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 ${
                item.name === "Péssimo"
                  ? "bg-red-500 hover:bg-red-600"
                  : item.name === "Ruim"
                    ? "bg-orange-400 hover:bg-orange-500"
                    : item.name === "Regular"
                      ? "bg-yellow-400 hover:bg-yellow-500"
                      : item.name === "Bom"
                        ? "bg-green-400 hover:bg-green-500"
                        : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {item.emoji} {item.name}
            </button>
          ))}
        </div>
        <FilledButton>{!isLoading ? "Enviar" : "Enviando..."}</FilledButton>
      </form>
    </section>
  );
};
