import { motion } from "motion/react";
import WhyUsList from "./WhyUsList";

export default function WhyUsSection() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center gap-5 pl-5 pr-5 pt-4 text-center"
    >
      <div className="flex w-full flex-col gap-4">
        <h2 className="mt-5 text-2xl font-bold">POR QUE NOS ESCOLHER?</h2>
        <p>
          Porque cada detalhe importa, e nós garantimos uma experiência
          inesquecível.
        </p>
      </div>
      <WhyUsList />
    </motion.section>
  );
}
