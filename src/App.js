import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import SobreEmpreendimento from "./sections/SobreEmpreendimento/SobreEmpreendimento";
import Diferenciais from "./sections/Diferenciais/Diferenciais";
import Galeria from "./sections/Galeria/Galeria";
import Comodidades from "./sections/Comodidades/Comodidades";
import Localizacao from "./sections/Localizacao/Localizacao";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Plantas from "./sections/Plantas/Plantas";
import Formulario from "./sections/Formulario/Formulario";
import Footer from "./components/Footer/Footer";

function App() {
  const [formularioAberto, setFormularioAberto] =
    useState(false);

  return(
    <>
      <Navbar
        abrirFormulario={() =>
          setFormularioAberto(true)
        }
      />
      <Formulario
        aberto={formularioAberto}
        fecharFormulario={() =>
          setFormularioAberto(false)
        }
      />    
    
      <Hero
        abrirFormulario={() =>
          setFormularioAberto(true)
        }
      />
      <SobreEmpreendimento />
      <Diferenciais />
      <Galeria />
      <Comodidades />
      <Plantas />
      <Localizacao/>
      <WhatsAppButton />
      <Footer />
    </>
    );
}

export default App;