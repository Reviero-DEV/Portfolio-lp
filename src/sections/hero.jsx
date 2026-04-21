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
          Crio experiencias rapidas, responsivas e bem estruturadas, com atencao
          a usabilidade e ao detalhe.
        </p>
      </div>

      <HeroTech />
      </div>

       <div className="tabs">
        <span className="tab">Sites Responsivos</span>
        <span className="tab">Interacoes com JS</span>
        <span className="tab">Landing Pages Animadas</span>
        <span className="tab">Prototipos Funcionais</span>
      </div>
    </section>
  );
}
