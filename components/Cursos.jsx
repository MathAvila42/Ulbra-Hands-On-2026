// Cursos.jsx — lista completa EaD + Semipresencial em tabs

const EAD_LIST = [
'Administração', 'Biologia', 'Ciências Contábeis',
'CST Análise e Desenvolvimento de Sistemas', 'CST Comércio Exterior',
'CST Design Digital', 'CST Gestão Comercial',
'CST Gestão da Produção Industrial', 'CST Gestão da TI',
'CST Gestão de Recursos Humanos', 'CST Gestão do Agronegócio',
'CST Gestão Financeira', 'CST Gestão Hospitalar', 'CST Gestão Pública',
'CST Inteligência Artificial', 'CST Logística',
'CST Marketing e Mídias Digitais', 'CST Mídias Sociais Digitais',
'CST Pilotagem Profissional de Aeronaves',
'CST Processos Gerenciais', 'CST Segurança da Informação',
'CST Serviços Jurídicos e Notariais', 'Geografia', 'História',
'Jornalismo', 'Letras', 'Matemática', 'Pedagogia', 'Serviço Social', 'Teologia'];


const SEMI_LIST = [
'Agronomia', 'Arquitetura e Urbanismo', 'Biomedicina', 'Ciência da Computação',
'CST Estética e Cosmética', 'Design de Interiores', 'Educação Física Bacharelado',
'Educação Física Licenciatura', 'Engenharia de Produção',
'Engenharia de Software', 'Engenharia Mecânica',
'Engenharia Mecânica Automotiva', 'Farmácia', 'Fisioterapia',
'Nutrição', 'Pedagogia'];


function Cursos() {
  const [tab, setTab] = React.useState('ead');
  const list = tab === 'ead' ? EAD_LIST : SEMI_LIST;

  return (
    <section className="section" id="cursos">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Quem participa</div>
          <h2 className="section-title">Cursos<br />contemplados</h2>
        </div>
      </div>
      <p className="cursos-intro">
        O Hands On 2026 é <strong>exclusivo</strong> para alunos dos cursos EaD e Semipresenciais da Ulbra. Confira se o seu está na lista — e se estiver, garanta sua vaga.
      

      </p>

      <div className="cursos-tabs">
        <button
          className={`cursos-tab ${tab === 'ead' ? 'active' : ''}`}
          onClick={() => setTab('ead')}>
          
          EaD <span className="cursos-tab-count">{EAD_LIST.length}</span>
        </button>
        <button
          className={`cursos-tab ${tab === 'semi' ? 'active' : ''}`}
          onClick={() => setTab('semi')}>
          
          Semipresencial <span className="cursos-tab-count">{SEMI_LIST.length}</span>
        </button>
      </div>

      <div className="cursos-grid">
        {list.map((c) =>
        <div key={c} className="curso-item">
            <span className="curso-item-bullet" />
            {c}
          </div>
        )}
      </div>
    </section>);

}

window.Cursos = Cursos;