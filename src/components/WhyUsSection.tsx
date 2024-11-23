import { whyus } from "../lib/whyus";
import { motion } from "motion/react";

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
      <ul className="flex-col justify-center md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-5">
        {whyus.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.2 * index + 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex w-72 flex-col items-center gap-2 text-center"
          >
            <img src={item.img} alt="" className="w-14" />
            <h3 className="font-bold">{item.title}</h3>
            <span className="h-1 w-12 bg-black font-bold"></span>
            <p className="mb-5">{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
