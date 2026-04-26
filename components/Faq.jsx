// Faq.jsx — perguntas frequentes

const FAQ_ITEMS = [
  {
    q: 'Quanto custa a inscrição?',
    a: 'Zero. O Hands On 2026 é gratuito para todos os alunos dos cursos EaD e Semipresencial da Ulbra. Inclui credencial, coffee breaks e almoço no campus.',
  },
  {
    q: 'Preciso comparecer o dia inteiro?',
    a: 'A programação acontece das 9h30 às 15h30, com atividades de manhã (palestras), almoço no campus e workshops hands-on à tarde. Recomendamos fortemente a participação integral — é onde acontecem as melhores conexões.',
  },
  {
    q: 'Vai ter transporte saindo dos polos?',
    a: 'Estamos organizando ônibus fretados para alguns polos, conforme demanda. Marque a opção "Preciso de transporte" no formulário e entraremos em contato com os detalhes por e-mail.',
  },
  {
    q: 'E se eu não puder ir no dia?',
    a: 'Avise a gente com antecedência pelos canais de contato para liberarmos sua vaga para outro colega. As vagas são limitadas pela capacidade do campus.',
  },
  {
    q: 'O evento vale horas complementares?',
    a: 'Sim. Você receberá certificado digital de 8h de atividades complementares, válido junto à coordenação do seu curso.',
  },
  {
    q: 'Posso levar um acompanhante?',
    a: 'O evento é exclusivo para alunos, professores e convidados institucionais. Cada aluno inscrito tem direito apenas à sua credencial.',
  },
  {
    q: 'Onde exatamente é o Campus Canoas?',
    a: 'Av. Farroupilha, 8001 — São José, Canoas/RS. Às vésperas do evento, você receberá por e-mail um mapa detalhado com pontos de credenciamento e salas dos workshops.',
  },
  {
    q: 'E se o curso que eu faço não estiver na lista?',
    a: 'Esta edição é voltada apenas aos cursos listados. Se houver dúvidas, entre em contato — a cada edição novos cursos podem ser incluídos.',
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
