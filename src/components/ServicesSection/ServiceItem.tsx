type ServiceItemsProps = {
  service: string;
  description: string;
  price: string;
};

export default function ServiceItem(props: ServiceItemsProps) {
  return (
    <>
      <li className="flex flex-col text-start">
        <p className="font-extrabold uppercase">{props.service}</p>
        <span className="mb-2 h-1 w-12 bg-black"></span>
        <p className="mb-2 lg:flex">{props.description}</p>
        <p className="mt-auto w-24 rounded-lg bg-cyan-950 p-1 font-extrabold text-white lg:flex">
          {props.price}
        </p>
      </li>
    </>
  );
}
