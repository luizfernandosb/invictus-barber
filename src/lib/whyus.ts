import Certificado from "../assets/certificado.png";
import Escudo from "../assets/escudo.png";
import Experiencia from "../assets/image.png";

interface WhyUsProps {
  img: string;
  title: string;
  description: string;
}

export const whyus: WhyUsProps[] = [
  {
    img: Experiencia,
    title: "EXPERIÊNCIA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus erat quis neque tincidunt lacinia.",
  },
  {
    img: Certificado,
    title: "CERTIFICADO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus erat quis neque tincidunt lacinia.",
  },
  {
    img: Escudo,
    title: "SEGURANÇA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus erat quis neque tincidunt lacinia.",
  },
];
