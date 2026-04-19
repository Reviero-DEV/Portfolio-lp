import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter("Oi, sou Neto Reviero.");
    return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <p className="intro">Hello World!</p>
        <h1>{text}</h1>
        <p className="description">
          Desenvolvedor Front-End focado em interfaces modernas e funcionais.
            </p>
            <p>
              Crio experiencias rapidas, responsivas e bem estruturadas, com
              atencao a usabilidade e ao detalhe.
            </p>
              <button>Contrate-me</button>
          </div>
        
          <div class="avatar">
            <img src="img/download.png" alt="" />
          </div>
        </div>
      </section>
    )
}