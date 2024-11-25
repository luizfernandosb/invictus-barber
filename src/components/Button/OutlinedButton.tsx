import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type OutlinedButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function OutlinedButton(props: OutlinedButtonProps ) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded border px-4 py-2 font-bold text-white transition hover:bg-cyan-950",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
