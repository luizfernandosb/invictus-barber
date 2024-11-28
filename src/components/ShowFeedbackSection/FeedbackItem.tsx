
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
      className={`flex h-64 min-w-full flex-col justify-center rounded-xl bg-cyan-950 px-12 text-white `}
    >
      <p className="flex flex-col text-xl  font-bold ">
        {props.name}
        <span className="text-xs text-cyan-950 w-fit px-2 rounded-xl font-bold bg-white">
          {props.rate} {props.emoji}
        </span>{" "}
      </p>
        <span className="my-2 h-[1px] w-12 bg-white font-bold"></span>
      <p className="mb-2 ">{props.feedback}</p>
      <p className="text-xs text-end mt-2">{props.date}</p>
    </li>
  );
};
