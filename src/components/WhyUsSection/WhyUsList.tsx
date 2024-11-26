import { whyus } from "../../lib/whyus";
import WhyUsItem from "./WhyUsItem";

export default function WhyUsList() {
  return (
    <ul className="flex-col justify-center md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-5">
      {whyus.map((item, index) => (
        <WhyUsItem
          index={index}
          key={index}
          src={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}
