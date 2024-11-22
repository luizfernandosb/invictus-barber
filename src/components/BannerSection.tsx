import { motion } from "motion/react";

export default function BannerSection() {
  const handleClick = () => {
    window.open("https://linktr.ee/invictus.barber", "_blank");
  };
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex h-80 items-center justify-center bg-[url('./assets/barber2.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div>
        <div className="brightness-1 flex flex-col items-center gap-4">
          <h2 className="text-center text-2xl font-bold text-white lg:w-4/6 lg:text-4xl">
            VENHA PARA A NOSSA BARBEARIA E DESCUBRA O PODER DE UM CORTE
            PERFEITO.
          </h2>
          <button
            className="rounded bg-cyan-700 px-4 py-2 font-bold text-white transition hover:bg-cyan-950"
            onClick={() => handleClick()}
          >
            AGENDE UM HORÁRIO
          </button>
        </div>
      </div>
    </motion.section>
  );
}
