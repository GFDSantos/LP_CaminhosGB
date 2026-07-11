import "./Localizacao.css";
import empreendimento from "../../data/empreendimento";

function Localizacao() {
  return (
    <section className="localizacao">
      <div className="localizacao-texto">
        <span className="localizacao-tag">
          LOCALIZAÇÃO PRIVILEGIADA
        </span>
        <h2>Viva no Centro de Tudo</h2>
        <p>
          Morar no Caminhos da Guanabara é estar perto das
          Barcas, UFF, Plaza Shopping, Caminho Niemeyer,
          comércio, serviços e das principais vias da cidade.
        </p>
      </div>
      <div className="localizacao-imagens">
        <img
          src={empreendimento.localizacao[0]}
          alt="Entorno do empreendimento"
        />
        <img
          src={empreendimento.localizacao[1]}
          alt="Mapa da localização"
        />
      </div>
    </section>
  );
}

export default Localizacao;