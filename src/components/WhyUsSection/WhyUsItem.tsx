import { motion } from "motion/react";

type WhyUsItemProps = {
  index: number;
  src: string;
  title: string;
  description: string;
};

export default function WhyUsItem(props: WhyUsItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.8,
        delay: 0.2 * props.index + 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex w-72 flex-col items-center gap-2 text-center"
    >
      <img src={props.src} alt="" className="w-14" />
      <h3 className="font-bold">{props.title}</h3>
      <span className="h-1 w-12 bg-black font-bold"></span>
      <p className="mb-5">{props.description}</p>
    </motion.li>
  );
}
