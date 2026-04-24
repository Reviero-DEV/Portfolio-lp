import { useTypewriter } from "../hooks/useTypewriter";
import HeroTech from "../components/heroTech";

export default function Hero() {
  const text = useTypewriter("Oi, sou Neto Reviero.");
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
      <div className="hero-text">
        <p className="intro">Hello World!</p>
        <h1>{text}</h1>
        <p className="description">
          Desenvolvedor Front-End focado em interfaces modernas e funcionais.
        </p>
        <p>
          Crio experiências rápidas, responsivas e bem estruturadas, com atenção à usabilidade e ao detalhe.
        </p>
      </div>

      <div className="suport-visual">
    <img className="avt-hero" alt="" src="./src/assets/img/avt-hero.png" />
      <HeroTech />
      </div>
      </div>
    </section>
  );
}
