import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type FilledButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


export default function FilledButton({
  type = "button",
  ...props
}: FilledButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={twMerge(
        "rounded bg-cyan-700 px-4 py-2 font-bold text-white transition hover:bg-cyan-950",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}