import FilledButton from "../Button/FilledButton";

type SucessFeedbackFormProps = {
  onSendNewFeedback: () => void;
};

export const FeedbackSuccess = (props: SucessFeedbackFormProps) => {
  return (
    <form className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
      <p className="mb-4 text-lg font-semibold text-gray-800">
        Feedback enviado com sucesso! 🎉
      </p>
      <FilledButton
        onClick={() => props.onSendNewFeedback()}
        
      >
        Enviar um novo feedback
      </FilledButton>
    </form>
  );
};
