import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type FilledButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function FilledButton(props: FilledButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded bg-cyan-700 px-4 py-2 font-bold text-white transition hover:bg-cyan-950",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
