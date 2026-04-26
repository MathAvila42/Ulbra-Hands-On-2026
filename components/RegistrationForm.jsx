// RegistrationForm.jsx — formulário de inscrição

// Após publicar o Apps Script, substitua a URL abaixo pela URL gerada na implantação
const APPS_SCRIPT_URL = "COLE_A_URL_DO_WEB_APP_AQUI";

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

function Field({ label, children }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
    </div>
  );
}

function RegistrationForm() {
  const [modalidade, setModalidade] = React.useState('ead');
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [curso, setCurso] = React.useState('');
  const [polo, setPolo] = React.useState('');

  const cursos = modalidade === 'ead' ? CURSOS_EAD : CURSOS_SEMI;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const payload = { nome, email, whatsapp, modalidade, curso, polo };

    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setSending(false);
        setSubmitted(true);
        window.scrollTo({ top: document.getElementById('inscricao').getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      })
      .catch(() => {
        setSending(false);
        setSubmitted(true);
      });
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
          <input type="text" required placeholder="Seu nome como quer no crachá"
            value={nome} onChange={(e) => setNome(e.target.value)} />
        </Field>
      </div>

      <div className="form-row">
        <Field label="E-mail">
          <input type="email" required placeholder="voce@email.com"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="WhatsApp">
          <input type="tel" required placeholder="(00) 00000-0000"
            value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
        </Field>
      </div>

      <div className="form-row single">
        <Field label="Modalidade">
          <div className="radio-group">
            <div className="radio-pill">
              <input type="radio" id="mod-ead" name="modalidade"
                checked={modalidade === 'ead'} onChange={() => { setModalidade('ead'); setCurso(''); }} />
              <label htmlFor="mod-ead">EaD</label>
            </div>
            <div className="radio-pill">
              <input type="radio" id="mod-semi" name="modalidade"
                checked={modalidade === 'semi'} onChange={() => { setModalidade('semi'); setCurso(''); }} />
              <label htmlFor="mod-semi">Semipresencial</label>
            </div>
          </div>
        </Field>
      </div>

      <div className="form-row">
        <Field label="Curso">
          <select required value={curso} onChange={(e) => setCurso(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {cursos.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Polo">
          <select required value={polo} onChange={(e) => setPolo(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {POLOS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
      </div>

      <button type="submit" className="form-submit" disabled={sending}>
        {sending ? 'Enviando...' : 'Garantir minha vaga →'}
      </button>

      <p className="form-footnote">
        Ao se inscrever, você concorda com receber comunicações sobre o evento.
      </p>
    </form>
  );
}

window.RegistrationForm = RegistrationForm;
