import Image3 from "../assets/barber3.jpg";
import { motion } from "motion/react";

export default function ThirdSection() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex h-full min-w-full p-5 md:w-full lg:h-screen lg:w-full lg:items-center lg:text-start"
    >
      <div className="w-full justify-center md:w-3/6 lg:w-3/6">
        <h2 className="md:w-11/6 text-center text-2xl font-bold md:text-start lg:text-start">
          SERVIÇO DE BARBEIRO PRESTADO COM EXCELÊNCIA
        </h2>
        <p className="mt-10 text-center md:w-11/12 md:text-start lg:w-3/4 lg:text-start">
          Atenção aos detalhes, técnicas modernas e um serviço que supera as
          expectativas. Venha conhecer o que é excelência em cuidados
          masculinos.
        </p>
        <div className="mb-10 mt-10 flex justify-center gap-20 px-5 lg:w-3/6 lg:justify-start lg:gap-60 lg:p-0">
          <div>
            <p className="text-3xl font-bold">
              99<span className="font-extrabold text-cyan-700">%</span>
            </p>
            <p className="font-bold">CLIENTES</p>
            <p className="font-bold">SATISFEITOS</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              10<span className="font-extrabold text-cyan-700">+</span>
            </p>
            <p className="font-bold">ANOS DE</p>
            <p className="font-bold">EXPERIÊNCIA</p>
          </div>
        </div>
      </div>
      <div className="flex md:w-3/6 md:items-center lg:w-3/6">
        <img src={Image3} alt="" className="hidden md:flex md:w-full lg:flex" />
      </div>
    </motion.section>
  );
}
