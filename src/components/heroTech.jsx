export default function HeroTech() {
  const techs = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Three.js", icon: "/icons/three.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
];

  return (
    <div className="hero-3d">
      {techs.map((tech, index) => (
        <div
          key={tech.name}
          className="tech-3d"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <img 
            src={tech.icon} 
            alt={tech.name} 
          />
        </div>
      ))}
    </div>
  );
}
