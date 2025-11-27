import { motion } from "motion/react";

export default function MapSection() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="mt-10"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.313094987196!2d-43.4397921!3d-21.6905626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989e56b2a7e265%3A0xb99b816c8dee0789!2sR.%20Martins%20Barbosa%2C%20697%20-%20Benfica%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036090-300!5e0!3m2!1spt-BR!2sbr!4v1764247670103!5m2!1spt-BR!2sbr"
        className="w-screen"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.section>
  );
}
