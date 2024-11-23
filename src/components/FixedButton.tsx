import WhatsApp from "../assets/wpp.png";
import { motion } from "motion/react";

export default function FixedButton() {
  return (
    <a
      className="fixed bottom-0 right-0 z-[1000] m-4 rounded-full"
      href="https://linktr.ee/invictus.barber"
      rel="noopener"
      target="_blank"
    >
      {" "}
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity }}
        src={WhatsApp}
        alt="Agende aqui."
        className="h-20"
      />
    </a>
  );
}
