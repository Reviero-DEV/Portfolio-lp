export default function Header() {
  return (
    <header class="header">
      <div class="logo">Reviero-dev</div>

      <nav className="navbar" id="navbar">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>

          <li>
            <a href="#services">Projetos</a>
          </li>

          <li>
            <a href="#about">Sobre Me</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>

      <div className="menu-toggle" id="menu-toggle">
        ☰
      </div>

      <a href="#contact" className="btn talk">
        Fale Comigo!
      </a>

      <button id="theme-toggle" className="theme-toggle">
        🌙
      </button>
    </header>
  );
}
