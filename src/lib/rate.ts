type Rate = { name: string; emoji: string; bg:string };

export const rate: Rate[] = [
  {
    name: "Péssimo",
    emoji: "😡",
    bg: "bg-red-500 hover:bg-red-60"
  },
  {
    name: "Ruim",
    emoji: "😕",
    bg: "bg-orange-400 hover:bg-orange-500"
  },
  {
    name: "Regular",
    emoji: "😐",
    bg: "bg-yellow-400 hover:bg-yellow-500"
  },
  {
    name: "Bom",
    emoji: "🙂",
    bg: "bg-green-400 hover:bg-green-500"
  },
  {
    name: "Ótimo",
    emoji: "😍",
    bg: "bg-blue-500 hover:bg-blue-600"
  },
];
