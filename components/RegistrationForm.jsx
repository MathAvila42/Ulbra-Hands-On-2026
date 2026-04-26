// RegistrationForm.jsx — formulário de inscrição

const CURSOS_EAD = [
  'Administração', 'Ciências Contábeis',
  'CST em Análise e Desenvolvimento de Sistemas',
  'CST em Comércio Exterior', 'CST em Design Digital',
  'CST em Gestão Comercial', 'CST em Gestão da Produção Industrial',
  'CST em Gestão da Tecnologia da Informação',
  'CST em Gestão de Recursos Humanos', 'CST em Gestão do Agronegócio',
  'CST em Gestão Financeira', 'CST em Gestão Pública',
  'CST em Inteligência Artificial', 'CST em Logística',
  'CST em Marketing e Mídias Digitais', 'CST em Mídias Sociais Digitais',
  'CST em Pilotagem Profissional de Aeronaves',
  'CST em Processos Gerenciais', 'CST em Segurança da Informação',
  'CST em Serviços Jurídicos e Notariais', 'Jornalismo', 'Teologia',
];

const CURSOS_SEMI = [
  'Agronomia', 'Biomedicina', 'Ciência da Computação',
  'CST em Estética e Cosmética', 'Educação Física Bacharelado',
  'Educação Física Licenciatura', 'Engenharia de Produção',
  'Engenharia de Software', 'Engenharia Mecânica',
  'Engenharia Mecânica Automotiva', 'Farmácia', 'Fisioterapia',
  'Nutrição', 'Pedagogia',
];

const POLOS = [
  'Canoas (sede)', 'Porto Alegre', 'Gravataí', 'Torres', 'São Jerônimo',
  'Carazinho', 'Santa Maria', 'Ji-Paraná', 'Manaus', 'Palmas',
  'São Paulo', 'Brasília', 'Outro',
];

function Field({ label, children, full }) {
  return (
    <div className="form-field" style={{ gridColumn: full ? '1 / -1' : undefined }}>
      <label>{label}</label>
      {children}
    </div>
  );
}

function RegistrationForm() {
  const [modalidade, setModalidade] = React.useState('ead');
  const [submitted, setSubmitted] = React.useState(false);
  const [transporte, setTransporte] = React.useState(false);
  const [estacionamento, setEstacionamento] = React.useState(false);

  const cursos = modalidade === 'ead' ? CURSOS_EAD : CURSOS_SEMI;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: e.target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="form-card" id="inscricao">
        <div className="form-card-badge">Inscrição gratuita</div>
        <div className="form-success">
          <div className="form-success-check">✓</div>
          <h3>Inscrição recebida!</h3>
          <p>
            Te esperamos no dia <strong style={{color:'var(--orange)'}}>30 de maio</strong> no Campus Canoas.
            Um e-mail de confirmação com orientações vai chegar em breve.
          </p>
          <button
            className="form-submit"
            style={{ marginTop: 28 }}
            onClick={() => setSubmitted(false)}
          >Inscrever outra pessoa</button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" id="inscricao" onSubmit={handleSubmit}>
      <div className="form-card-badge">Inscrição gratuita</div>
      <h2 className="form-title">Faça sua <em>inscrição</em></h2>
      <p className="form-sub">
        Vagas limitadas. Preenchimento em menos de 2 minutos.
      </p>

      <div className="form-row single">
        <Field label="Nome completo">
          <input type="text" required placeholder="Seu nome como quer no crachá" />
        </Field>
      </div>

      <div className="form-row">
        <Field label="E-mail">
          <input type="email" required placeholder="voce@email.com" />
        </Field>
        <Field label="WhatsApp">
          <input type="tel" required placeholder="(00) 00000-0000" />
        </Field>
      </div>

      <div className="form-row single">
        <Field label="Modalidade">
          <div className="radio-group">
            <div className="radio-pill">
              <input
                type="radio" id="mod-ead" name="modalidade"
                checked={modalidade === 'ead'}
                onChange={() => setModalidade('ead')}
              />
              <label htmlFor="mod-ead">EaD</label>
            </div>
            <div className="radio-pill">
              <input
                type="radio" id="mod-semi" name="modalidade"
                checked={modalidade === 'semi'}
                onChange={() => setModalidade('semi')}
              />
              <label htmlFor="mod-semi">Semipresencial</label>
            </div>
          </div>
        </Field>
      </div>

      <div className="form-row">
        <Field label="Curso">
          <select required defaultValue="">
            <option value="" disabled>Selecione...</option>
            {cursos.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Polo">
          <select required defaultValue="">
            <option value="" disabled>Selecione...</option>
            {POLOS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
      </div>

      <div className="form-row single">
        <Field label="Restrição alimentar (opcional)">
          <input type="text" placeholder="Ex: vegetariano, sem glúten, sem lactose..." />
        </Field>
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={transporte}
          onChange={(e) => setTransporte(e.target.checked)}
        />
        <span>
          <strong>Preciso de transporte</strong> — ônibus fretado saindo do meu polo (sujeito a disponibilidade)
        </span>
      </label>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={estacionamento}
          onChange={(e) => setEstacionamento(e.target.checked)}
        />
        <span>
          <strong>Vou precisar de estacionamento</strong> no campus
        </span>
      </label>

      <button type="submit" className="form-submit">
        Garantir minha vaga →
      </button>

      <p className="form-footnote">
        Ao se inscrever, você concorda com receber comunicações sobre o evento.
      </p>
    </form>
  );
}

window.RegistrationForm = RegistrationForm;
