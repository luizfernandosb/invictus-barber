interface FeedbackProps {
  rate: string;
  name: string;
  emoji: string;
  feedback: string;
  date: string;
}

export const feedbacks: FeedbackProps[] = [
  {
    name: "Lucas",
    rate: "Péssimo",
    emoji: "😡",
    feedback: "Muito bom o atendimento.",
    date: "25 nov 2024",
  },
  {
    name: "Eduardo",
    rate: "Ruim",
    emoji: "😕",
    feedback: "Muito bom o atendimento.",
    date: "25 nov 2024",
  },
  {
    name: "Nandev",
    rate: "Regular",
    emoji: "😐",
    feedback: "Muito bom o atendimento.",
    date: "25 nov 2024",
  },
  {
    name: "Luiz",
    rate: "Bom",
    emoji: "🙂",
    feedback: "Muito bom o atendimento.",
    date: "25 nov 2024",
  },
  {
    name: "Hugo",
    rate: "Ótimo",
    emoji: "😍",
    feedback: "Muito bom o atendimento.",
    date: "25 nov 2024",
  },
];
