import watch from "../assets/watch.png";
import adress from "../assets/adress.png";
import telefone from "../assets/telefone.png";
import { motion } from "motion/react";

export default function InfoSection() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="relative mt-[-7rem] items-center justify-center lg:w-full"
    >
      <div className="flex justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-700 py-10 pb-5 pt-5 text-white lg:w-3/5 lg:flex-row lg:gap-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center justify-center"
          >
            <img src={adress} alt="" className="w-10" />
            <h2 className="mt-2 font-bold">ENDEREÇO</h2>
            <span className="mb-2 mt-2 h-1 w-12 bg-slate-300"></span>
            <p>Av. Pedro Timponi, 000</p>
            <p>Nova Benfica</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.3 }}
            className="flex flex-col items-center justify-center"
          >
            <img src={telefone} alt="" className="w-10" />
            <h2 className="mt-2 font-bold">CONTATO</h2>
            <span className="mb-2 mt-2 h-1 w-12 bg-slate-300"></span>
            <a
              className="hover:cursor-pointer hover:underline"
              href="https://api.whatsapp.com/send?phone=5532988453600"
              target="_blank"
              rel="noopener"
            >
              {" "}
              <p>Ector - (32) 98845-3600</p>
            </a>
            <a
              className="hover:cursor-pointer hover:underline"
              href="https://api.whatsapp.com/send?phone=553298080497"
              target="_blank"
              rel="noopener"
            >
              {" "}
              <p>Thiago - (32) 99808-0497</p>
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.4 }}
            className="flex flex-col items-center justify-center"
          >
            <img src={watch} alt="" className="w-10" />
            <h2 className="mt-2 font-bold">HORÁRIO</h2>
            <span className="mb-2 mt-2 h-1 w-12 bg-slate-300 font-bold"></span>
            <p>Seg - Qui: 09h às 19h</p>
            <p>Sex - Sáb: 08h às 19h</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
