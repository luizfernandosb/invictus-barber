import { services } from "../../lib/services";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  return (
    <div className="flex justify-center">
      <ul className="grid w-full max-w-[40rem] grid-cols-1 justify-center gap-6 p-10 lg:grid-cols-2">
        {services.map((item, index) => (
          <ServiceItem
            service={item.service}
            description={item.description}
            price={item.price}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}
