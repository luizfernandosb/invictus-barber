import Image from "./assets/img.jpg";
import watch from "./assets/watch.png";
import adress from "./assets/adress.png";
import telefone from "./assets/telefone.png";
import { services } from "./lib/services";
import { whyus } from "./lib/whyus";

export default function App() {
  return (
    <>
      <main className="flex min-h-screen w-screen items-center justify-center">
        <div className="absolute h-screen w-screen">
          <img
            src={Image}
            alt="Example image."
            className="h-screen w-full object-cover brightness-50"
          />
        </div>
        <div className="relative flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl">
            TRANSFORME SEU VISUAL, ELEVE SUA CONFIANÇA!
          </h1>
          <div className="flex flex-col gap-4">
            <button className="transitio rounded bg-cyan-700 px-4 py-2 text-white hover:bg-cyan-950">
              AGENDE UM HORÁRIO
            </button>
            <button className="rounded border px-4 py-2 text-white transition hover:bg-cyan-950">
              NOSSOS SERVIÇOS
            </button>
          </div>
        </div>
      </main>
      <section className="relative mt-[-7rem] w-screen items-center justify-center">
        <div className="flex justify-center">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-700 pb-5 pt-5 text-white lg:w-3/5 lg:flex-row lg:gap-20">
            <div className="flex flex-col items-center justify-center">
              <img src={adress} alt="" className="w-10" />
              <h2 className="mt-2 font-bold">ENDEREÇO</h2>
              <span className="mb-2 mt-2 h-1 w-12 bg-slate-300"></span>
              <p>Rua Exemplo, 000</p>
              <p>Bairro</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={telefone} alt="" className="w-10" />
              <h2 className="mt-2 font-bold">CONTATO</h2>
              <span className="mb-2 mt-2 h-1 w-12 bg-slate-300"></span>
              <p>(32) 9999-9999</p>
              <p>(32) 9999-9999</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={watch} alt="" className="w-10" />
              <h2 className="mt-2 font-bold">HORÁRIO</h2>
              <span className="mb-2 mt-2 h-1 w-12 bg-slate-300 font-bold"></span>
              <p>Seg - Sex: 08h às 20h</p>
              <p>Sab: 08h às 16h</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex pl-5 pr-5 pt-10 md:w-full lg:h-screen lg:w-full lg:items-center lg:text-start">
        <div className="w-full md:w-3/6 lg:w-3/6">
          <h2 className="w-80 text-center text-2xl font-bold md:text-start lg:text-start">
            SERVIÇO DE BARBEIRO PRESTADO COM EXCELÊNCIA
          </h2>
          <p className="mt-10 text-center md:w-5/6 md:text-start lg:w-3/4 lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            excepturi ipsum vitae corporis porro itaque. Modi sed esse
            asperiores est vitae molestiae tempore tempora nostrum at suscipit
            enim, quam dignissimos.
          </p>
          <div className="mb-10 mt-10 flex justify-between pl-5 pr-5 lg:pl-20 lg:pr-20">
            <div>
              <p className="text-3xl font-bold">
                99<span className="font-extrabold text-cyan-700">%</span>
              </p>
              <p className="font-bold">CLIENTES</p>
              <p className="font-bold">SATISFEITOS</p>
            </div>
            <div>
              <p className="text-3xl font-bold">
                10<span className="font-extrabold text-cyan-700">+</span>
              </p>
              <p className="font-bold">ANOS DE</p>
              <p className="font-bold">EXPERIÊNCIA</p>
            </div>
          </div>
        </div>
        <div className="flex w-3/6 md:items-center">
          <img
            src={Image}
            alt=""
            className="hidden md:flex md:w-full lg:flex"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center gap-4 pl-5 pr-5 text-center">
        <h2 className="text-3xl font-bold">NOSSOS SERVIÇOS</h2>
        <p className="w-full self-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          facere ab aspernatur! Dolore, porro? Aliquid perferendis.
        </p>
        <div className="flex justify-center">
          <div className="grid w-full max-w-[40rem] grid-cols-2 justify-center gap-2 p-10">
            {services.map((service) => (
              <div className="flex gap-2">
                <img
                  src={service.img}
                  alt="Example image"
                  className="hidden w-16 lg:flex"
                />
                <div className="text-start">
                  <p className="font-bold">{service.service}</p>
                  <p className="hidden lg:flex">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex h-80 items-center justify-center">
        <div className="absolute h-80 w-screen">
          <img src={Image} alt="" className="h-full w-full brightness-50" />
        </div>
        <div className="relative">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center text-2xl font-bold text-white lg:w-4/6 lg:text-4xl">
              VENHA PARA A NOSSA BARBEARIA E DESCUBRA O PODER DE UM CORTE
              PERFEITO.
            </h2>
            <button className="rounded bg-cyan-700 px-4 py-2 text-white transition hover:bg-cyan-950">
              AGENDE UM HORÁRIO
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 pl-5 pr-5 pt-4 text-center">
        <div className="flex w-full flex-col gap-4">
          <h2 className="mt-5 text-2xl font-bold">POR QUE NOS ESCOLHER?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            fugit esse eius. Rerum excepturi at nesciunt numquam accusamus
            molestiae beatae, eum placeat in, explicabo maiores iure, qui totam
            repudiandae inventore.
          </p>
        </div>
        <div className="flex-col justify-center gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
          {whyus.map((item) => (
            <div className="flex w-72 flex-col items-center gap-4 text-center">
              <img src={item.img} alt="" className="w-14" />
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.24776366516!2d-43.444531725648005!3d-21.693100895623708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989e55bc094e05%3A0x620418bef7a9ec93!2sINVICTUS%20BARBER!5e0!3m2!1spt-BR!2sbr!4v1732158285588!5m2!1spt-BR!2sbr"
          className="w-screen"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
