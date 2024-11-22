import { services } from "../lib/services";
import { motion } from "motion/react";

export default function ServicesSection() {
  return (
    <motion.section
    viewport={{once: true}}
    initial={{ scale: 0.5 }}
      whileInView={{scale: 1}}      transition={{ duration: 1 }}
      className="flex flex-col justify-center gap-4 pl-5 pr-5 text-center"
      id="services"
    >
      <h2 className="text-2xl font-bold">NOSSOS SERVIÇOS</h2>
      <p className="w-full self-center text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facere
        ab aspernatur! Dolore, porro? Aliquid perferendis.
      </p>
      <div className="flex justify-center">
        <div className="grid w-full max-w-[40rem] grid-cols-2 justify-center gap-4 p-10">
          {services.map((service) => (
            <div className="flex flex-col text-start">
              <p className="font-bold">{service.service}</p>
              <p className="lg:flex">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
