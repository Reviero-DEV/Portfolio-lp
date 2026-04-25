export default function Header({setSection}) {
  return (
    <header className="header">
      <div className="logo">Reviero-dev</div>

      <nav className="navbar" id="navbar">
        <ul>
          <li>
            <a onClick={() => setSection("hero")}>Home</a>
          </li>

          <li>
            <a onClick={() => setSection("projects")}>Projetos</a>
          </li>

          <li>
            <a onClick={() => setSection("about")}>Sobre Me</a>
          </li>

          <li>
            <a onClick={() => setSection("contact")}>Contato</a>
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
