import Header from "./sections/header";
import Hero from "./sections/hero";
import { useState, useEffect } from "react";

function App() {
  const [section, setSection] = useState("hero");
  useEffect(() => console.log("section:", section), [section]);
  return (
    <>
      <Header section={section} setSection={setSection} />
      <main>
      {section === "hero" && <Hero setSection={setSection} />}
      </main>
    </>
  );
}

export default App;
