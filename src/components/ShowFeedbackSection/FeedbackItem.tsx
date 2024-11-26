type FeedbackItemProps = {
  name: string;
  rate: string;
  emoji: string;
  feedback: string;
  date: string;
};

export const FeedbackItem = (props: FeedbackItemProps) => {
  return (
    <li
      className={`flex h-64 min-w-full flex-col justify-center bg-cyan-950 px-20 text-white`}
    >
      <p className="flex flex-col font-bold">
        {props.name}
        <span className="text-xs font-normal">
          {props.rate} {props.emoji}
        </span>{" "}
        <span className="my-2 h-1 w-12 bg-white font-bold"></span>
      </p>
      <p className="mb-2">{props.feedback}</p>
      <p className="text-xs">{props.date}</p>
    </li>
  );
};
