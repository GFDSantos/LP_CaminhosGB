import "./Diferenciais.css";

const itens = [
  "🏡 Apartamentos com Varanda",
  "🌅 Rooftop Gourmet",
  "🏊 Piscinas Adulto e Infantil",
  "💻 Coworking",
  "🏋️ Academia Completa",
  "⚽ Campo Society",
  "🏖️ Quadra de Areia",
  "🐶 Pet Place"
];

function Diferenciais() {

  return (

    <section className="diferenciais">

      <h2>
        Diferenciais do Condomínio
      </h2>

      <div className="diferenciais-grid">
        {itens.map((item, index) => (

          <div
            key={index}
            className="diferencial-card"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Diferenciais;