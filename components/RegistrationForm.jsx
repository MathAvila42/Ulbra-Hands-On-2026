// RegistrationForm.jsx — formulário de inscrição

const APPS_SCRIPT_URL = "https://sheetdb.io/api/v1/xf1oz7m7gi0de";

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
  'CST em Serviços Jurídicos e Notariais', 'Geografia', 'História',
  'Jornalismo', 'Letras', 'Matemática', 'Teologia',
];

const CURSOS_SEMI = [
  'Agronomia', 'Biomedicina', 'Ciência da Computação',
  'CST em Estética e Cosmética', 'Educação Física Bacharelado',
  'Educação Física Licenciatura', 'Engenharia de Produção',
  'Engenharia de Software', 'Engenharia Mecânica',
  'Engenharia Mecânica Automotiva', 'Farmácia', 'Fisioterapia',
  'Nutrição', 'Pedagogia',
];

const TODOS_CURSOS = [...new Set([...CURSOS_EAD, ...CURSOS_SEMI])].sort((a, b) => a.localeCompare(b, 'pt'));

const POLOS = [
  'Camaquã', 'Campo Bom', 'Cachoeira do Sul', 'Cachoeirinha', 'Canoas',
  'Carazinho', 'Caxias do Sul', 'Concórdia', 'Cristo', 'Esteio',
  'Gravataí', 'Guaíba', 'Igrejinha', 'Lajeado', 'Martim Lutero',
  'Novo Hamburgo', 'Panambi', 'POA Zona Norte', 'POA Zona Sul',
  'Porto Alegre', 'Santa Maria', 'São Jerônimo', 'São Lucas',
  'Torres', 'Tramandaí', 'Tupanciretã', 'Viamão',
];

const TIPOS = ['Aluno', 'Professor', 'Tutor/Mediador', 'Coordenador'];

function Field({ label, children }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
    </div>
  );
}

function RegistrationForm() {
  const [tipo, setTipo] = React.useState('');
  const [modalidade, setModalidade] = React.useState('ead');
  const [cursosSelecionados, setCursosSelecionados] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [polo, setPolo] = React.useState('');

  const isAluno = tipo === 'Aluno';
  const isProfissional = ['Professor', 'Tutor/Mediador', 'Coordenador'].includes(tipo);

  const cursosAluno = modalidade === 'ead' ? CURSOS_EAD : CURSOS_SEMI;

  const toggleCurso = (curso) => {
    setCursosSelecionados((prev) =>
      prev.includes(curso) ? prev.filter((c) => c !== curso) : [...prev, curso]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tipo) return;
    if (isProfissional && cursosSelecionados.length === 0) return;
    setSending(true);

    const cursoFinal = isAluno
      ? cursosSelecionados[0] || ''
      : cursosSelecionados.join(', ');

    const payload = {
      "Timestamp": new Date().toLocaleString("pt-BR"),
      "Tipo": tipo,
      "Nome": nome,
      "E-mail": email,
      "WhatsApp": whatsapp,
      "Modalidade": isAluno ? (modalidade === 'ead' ? 'EaD' : 'Semipresencial') : '',
      "Curso": cursoFinal,
      "Polo": polo,
    };

    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [payload] }),
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
        <div className="form-card-badge">Inscrição solidária</div>
        <div className="form-success">
          <div className="form-success-check">✓</div>
          <h3>Inscrição recebida!</h3>
          <p>Em breve você receberá um e-mail com a programação completa do evento.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" id="inscricao" onSubmit={handleSubmit}>
      <div className="form-card-badge">Inscrição solidária</div>
      <h2 className="form-title">Faça sua <em>inscrição</em></h2>
      <p className="form-sub">Vagas limitadas. Preenchimento em menos de 2 minutos.</p>

      <div className="form-row single">
        <Field label="Tipo de participante">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
            {TIPOS.map((t) => (
              <div className="radio-pill" key={t} style={{minWidth:0}}>
                <input type="radio" id={`tipo-${t}`} name="tipo"
                  checked={tipo === t} onChange={() => { setTipo(t); setCursosSelecionados([]); }} />
                <label htmlFor={`tipo-${t}`} style={{whiteSpace:'normal', lineHeight:'1.3', padding:'10px 6px', fontSize:'12px'}}>{t}</label>
              </div>
            ))}
          </div>
        </Field>
      </div>

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

      {isAluno && (
        <div className="form-row single">
          <Field label="Modalidade">
            <div className="radio-group">
              <div className="radio-pill">
                <input type="radio" id="mod-ead" name="modalidade"
                  checked={modalidade === 'ead'} onChange={() => { setModalidade('ead'); setCursosSelecionados([]); }} />
                <label htmlFor="mod-ead">EaD</label>
              </div>
              <div className="radio-pill">
                <input type="radio" id="mod-semi" name="modalidade"
                  checked={modalidade === 'semi'} onChange={() => { setModalidade('semi'); setCursosSelecionados([]); }} />
                <label htmlFor="mod-semi">Semipresencial</label>
              </div>
            </div>
          </Field>
        </div>
      )}

      {isAluno && (
        <div className="form-row">
          <Field label="Curso">
            <select required value={cursosSelecionados[0] || ''} onChange={(e) => setCursosSelecionados([e.target.value])}>
              <option value="" disabled>Selecione...</option>
              {cursosAluno.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Polo">
            <select required value={polo} onChange={(e) => setPolo(e.target.value)}>
              <option value="" disabled>Selecione...</option>
              {POLOS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </Field>
        </div>
      )}

      {isProfissional && (
        <>
          <div className="form-row single">
            <Field label="Polo">
              <select required value={polo} onChange={(e) => setPolo(e.target.value)}>
                <option value="" disabled>Selecione...</option>
                {POLOS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </Field>
          </div>
          <div className="form-row single">
            <Field label="Cursos que atua (selecione todos)">
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6px', marginTop:'2px'}}>
                {TODOS_CURSOS.map((c) => (
                  <label key={c} className="checkbox-row" style={{marginBottom:0, gap:'16px'}}>
                    <input type="checkbox" checked={cursosSelecionados.includes(c)}
                      onChange={() => toggleCurso(c)} style={{accentColor:'var(--orange)', flexShrink:0}} />
                    <span style={{fontSize:'12px'}}>{c}</span>
                  </label>
                ))}
              </div>
            </Field>
          </div>
        </>
      )}

      <button type="submit" className="form-submit" disabled={sending || !tipo}>
        {sending ? 'Enviando...' : 'Garantir minha vaga →'}
      </button>

      <p className="form-footnote">
        Ao se inscrever, você concorda com receber comunicações sobre o evento.
      </p>
    </form>
  );
}

window.RegistrationForm = RegistrationForm;
