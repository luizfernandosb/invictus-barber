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
      "Mais de uma década cuidando da aparência de nossos clientes com dedicação e técnica."
  },
  {
    img: Certificado,
    title: "CERTIFICADO",
    description:
      "Profissionais qualificados que entregam resultados incríveis."
  },
  {
    img: Escudo,
    title: "SEGURANÇA",
    description:
      "Utilizamos produtos e equipamentos de alta qualidade para garantir sua saúde e bem-estar."
  },
];
