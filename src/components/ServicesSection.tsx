import { services } from "../lib/services";
import { motion } from "motion/react";

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
      <div className="flex justify-center">
        <ul className="grid w-full max-w-[40rem] grid-cols-1 justify-center gap-6 p-10 lg:grid-cols-2">
          {services.map((service, index) => (
            <li key={index} className="flex flex-col text-start">
              <p className="font-extrabold uppercase">{service.service}</p>
              <span className="mb-2 h-1 w-12 bg-black"></span>
              <p className="mb-2 lg:flex">{service.description}</p>
              <p className="mt-auto w-24 rounded-lg bg-cyan-950 p-1 font-extrabold text-white lg:flex">
                {service.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
