// Faq.jsx — perguntas frequentes

const FAQ_ITEMS = [
  {
    q: 'Quanto custa a inscrição?',
    a: 'A participação é mediante entrada solidária (doação de 1kg de alimento não perecível).',
  },
  {
    q: 'Preciso comparecer o dia inteiro?',
    a: 'O evento vai das 9h às 16h, com atividades pela manhã e à tarde. Recomendamos fortemente a participação integral — é onde acontecem as melhores conexões.',
  },
  {
    q: 'Vai ter transporte saindo dos polos?',
    a: 'Estamos organizando ônibus fretados para alguns polos mais distantes do Campus Canoas. Entre em contato com o seu polo para verificar a disponibilidade.',
  },
  {
    q: 'O evento vale horas complementares?',
    a: 'Sim. Você receberá certificado digital de 8h de atividades complementares, válido junto à coordenação do seu curso.',
  },
  {
    q: 'Posso levar um acompanhante?',
    a: 'O evento é exclusivo para alunos, professores e convidados institucionais. Cada inscrito tem direito apenas à sua credencial.',
  },
  {
    q: 'Onde fica o Campus Canoas?',
    a: 'Av. Farroupilha, 8001 — São José, Canoas/RS.',
  },
];

function Faq() {
  const [open, setOpen] = React.useState(0);

  return (
    <div className="faq-section" id="faq">
      <section className="section">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Dúvidas frequentes</div>
            <h2 className="section-title">Tira a dúvida.<br/>Depois se inscreve.</h2>
          </div>
        </div>

        <div className="faq-grid">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.Faq = Faq;
