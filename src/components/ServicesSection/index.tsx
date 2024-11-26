import { motion } from "motion/react";
import ServiceList from "./ServiceList";

export default function ServicesSection() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center gap-4 pl-5 pr-5 text-center"
      id="services"
    >
      <h2 className="text-2xl font-bold">NOSSOS SERVIÇOS</h2>
      <p className="w-full self-center text-center">
        Oferecemos uma experiência única em cortes e cuidados masculinos, sempre
        com foco no seu estilo e personalidade.
      </p>
      <ServiceList />
    </motion.section>
  );
}
