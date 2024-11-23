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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.24776366516!2d-43.444531725648005!3d-21.693100895623708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989e55bc094e05%3A0x620418bef7a9ec93!2sINVICTUS%20BARBER!5e0!3m2!1spt-BR!2sbr!4v1732158285588!5m2!1spt-BR!2sbr"
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
