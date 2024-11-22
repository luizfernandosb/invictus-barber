import Image from "../assets/barber1.jpg";
import { motion } from "motion/react";

export default function HomeSection() {
  const handleClick = () => {
    window.open("https://linktr.ee/invictus.barber", "_blank");
  };

  const handleServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="absolute h-screen w-full">
        <img
          src={Image}
          alt="Example image."
          className="h-screen min-w-full object-cover brightness-50 lg:w-14"
        />
      </div>
      <div className="relative flex flex-col items-center gap-4">
        <motion.h1 className="text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl">
          TRANSFORME SEU VISUAL, ELEVE SUA CONFIANÇA!
        </motion.h1>
        <div className="flex flex-col gap-4">
          <button
            className="transitio rounded bg-cyan-700 px-4 py-2 font-bold text-white hover:bg-cyan-950"
            onClick={() => handleClick()}
          >
            AGENDE UM HORÁRIO
          </button>
          <button
            className="rounded border px-4 py-2 font-bold text-white transition hover:bg-cyan-950"
            onClick={() => handleServices()}
          >
            NOSSOS SERVIÇOS
          </button>
        </div>
      </div>
    </motion.section>
  );
}