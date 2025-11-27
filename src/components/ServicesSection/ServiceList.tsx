import { services, extraServices, products } from "../../lib/services";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[50rem] flex-col gap-14 p-10">
        <section>
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((item, index) => (
              <ServiceItem
                service={item.service}
                description={item.description}
                price={item.price}
                key={index}
              />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Serviços Extras
          </h2>
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {extraServices.map((item, index) => (
              <ServiceItem
                service={item.service}
                description={item.description}
                price={item.price}
                key={index}
              />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Produtos
          </h2>
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {products.map((item, index) => (
              <ServiceItem
                service={item.name}
                description={item.description}
                price={item.price}
                key={index}
              />
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
