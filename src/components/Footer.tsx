export default function Footer() {

  const date = new Date().getFullYear()

  return (
    <footer className="flex h-10 items-center justify-center bg-cyan-950 font-extrabold text-white">
      <p>
        Copyright © {date}{" "}
        <a href="https://linkedin.com/in/luizfsb" target="_blank" rel="noopener"> Luiz F. Sant'Ana </a>
      </p>
    </footer>
  );
}
