// Programacao.jsx

const TRACKS = {
  negocios: {
    label: 'Negócios & Gestão',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Palestra — O que é e como fazer um Pitch de Sucesso?', l: 'Sala 206 · Prédio 1', sub: 'Palestrante: Ismael Ribeiro · Comunicação para Líderes' },
      { h: '11:00', a: 'Shark Tank — Orientação e divisão de grupos', l: 'Sala 206 · Prédio 1' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Shark Tank — Arena de Negócios', l: 'Sala 206 · Prédio 1' },
      { h: '14:30', a: 'Pitch · Avaliação dos Tubarões · Premiação', l: 'Sala 206 · Prédio 1' },
    ],
  },
  agronomia: {
    label: 'Agronomia',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Teoria: Avaliação do solo e importância das abelhas na agricultura', l: 'Prédio 8 · Sala 59' },
      { h: '11:00', a: 'Prática: Produção e manejo de abelhas', l: 'Prédio 8 · Sala 59' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Teoria: Qualidade Física e Sanitária de Grãos e Sementes', l: 'Prédio 8 · Sala 59' },
      { h: '14:30', a: 'Prática: Qualidade Física e Sanitária de Grãos e Sementes', l: 'Prédio 8 · Sala 59' },
    ],
  },
  arquitetura: {
    label: 'Arquitetura & Design de Interiores',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Criação de artefatos de cimento e gesso', l: 'Prédio 9 · Sala 56' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Oficina de Diagramação de Pranchas', l: 'Prédio 1 · Sala 41' },
    ],
  },
  biomedicina: {
    label: 'Biomedicina',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Oficinas de Anatomia para os Cursos da Saúde', l: 'Lab. de Anatomia Humana · Prédio 19' },
      { h: '11:00', a: 'Parasitoses e Práticas Integrativas na Vida Real', l: 'Labs 4° andar · Prédio 19' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Palestra e demonstração: Práticas Integrativas para Profissionais da Saúde', l: 'Sala 6 · Prédio 1' },
    ],
  },
  farmacia: {
    label: 'Farmácia',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Visitação: Labs de Anatomia e Tecnologia Farmacêutica', l: 'Lab. de Anatomia · Prédio 19 / Lab. 406' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Palestra e demonstração: Práticas Integrativas para Profissionais da Saúde', l: 'Sala 06 · Prédio 1' },
    ],
  },
  estetica: {
    label: 'Estética e Cosmética',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Visitação prática ao Laboratório de Anatomia', l: 'Lab. de Anatomia · Prédio 19' },
      { h: '11:00', a: 'Visitação prática ao laboratório de Tecnologia Farmacêutica', l: '' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Microagulhamento na Estética Regenerativa — Parte I', l: 'Sala 10 · Prédio 1' },
      { h: '14:30', a: 'Microagulhamento na Estética Regenerativa — Parte II', l: 'Lab. de Estética · Sala 13 · Prédio 1' },
    ],
  },
  tecnologia: {
    label: 'Tecnologia & Computação',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Carreira em Cloud: Do técnico ao estratégico', l: 'Sala 230 · Prédio 1' },
      { h: '10:00', a: 'Cloud AWS: Introdução aos Principais Serviços de Nuvem', l: 'Labin 1 · Prédio 1' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Ulbra UrbanTech | Mini Hackathon', l: 'Sala 230 · Prédio 1' },
    ],
  },
  nutricao: {
    label: 'Nutrição',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Workshop sobre saúde mental', l: 'Prédio 1 · Sala 40' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Teoria: Qualidade Física e Sanitária de Grãos e Sementes', l: 'Prédio 8 · Sala 59' },
      { h: '14:30', a: 'Prática: Qualidade Física e Sanitária de Grãos e Sementes', l: 'Prédio 8 · Sala 59' },
    ],
  },
  educacao_fisica: {
    label: 'Educação Física',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Oficina 1: Avaliação cineantropométrica completa', l: 'Prédio 55 · Salas 2 e 9' },
      { h: '11:00', a: 'Oficina 2: Avaliação metabólica, cardiorrespiratória e neuromuscular', l: 'Prédio 55 · Salas 2 e 9' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Oficina 3: Primeiros socorros em situações de risco', l: 'Prédio 55 · Salas 2 e 9' },
      { h: '14:30', a: 'Oficina 4: Técnicas Manuais e Bandagens — Reabilitação e Desempenho', l: 'Prédio 55 · Salas 2 e 9' },
    ],
  },
  marketing: {
    label: 'Marketing & Mídias Digitais',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Idiotice Artificial com Agência Orgânica', l: 'Sala 39 · Prédio 1' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Human First Lab com Agência Orgânica', l: 'Sala 39 · Prédio 1' },
    ],
  },
  pilotagem: {
    label: 'Pilotagem Profissional de Aeronaves',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Oficina: As várias atuações profissionais para os egressos', l: 'Sala 205 · Prédio 1' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Oficina: As várias atuações profissionais para os egressos (continuação)', l: 'Sala 205 · Prédio 1' },
    ],
  },
  engenharia: {
    label: 'Engenharia & Produção',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Workshop: Ônibus Elétrico Marcopolo', l: 'Sala 37 · Prédio 1', sub: 'Eng. Marcus Aurélio Telh — Engenheiro de Produto da Marcopolo' },
      { h: '11:00', a: 'Apresentação de Professores / Campus Tour', l: 'Sala 37 · Prédio 1' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Workshop: Construção de Karts', l: 'Lab. Engenharia Automotiva' },
      { h: '14:30', a: 'Oficina de Fundição', l: 'Fabritec' },
    ],
  },
  fisioterapia: {
    label: 'Fisioterapia',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Oficinas de Anatomia — cadáveres, ossos e peças acrílicas', l: 'Térreo · Lab 19', sub: '20 alunos por vez · 20min de duração' },
      { h: '10:00', a: 'Workshop de Aspiração Traqueal · Prof. Luciano', l: 'Sala 206 · Lab 19', sub: '20–25 alunos por vez · 20min de duração' },
      { h: '10:00', a: 'Workshop de VNI · Fisio. Maysa', l: 'Sala 210 · Lab 19', sub: '20 alunos por vez · 20min de duração' },
      { h: '10:00', a: 'Mobilidade Funcional em Paciente Neurológico · Prof. Simone Poletto', l: 'Prédio 6 · Sala 8', sub: '24 alunos por vez · 30min de duração' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Avaliação Física-Postural e Testes Diagnósticos', l: 'Salas 2 e 9 · Prédio 55' },
    ],
  },
  jornalismo: {
    label: 'Jornalismo',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Cobertura Jornalística do Evento', l: 'Labex · Sala 3 · Prédio 6' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Oficina: Comunicação e Assessoria', l: 'Labex · Sala 3 · Prédio 6' },
    ],
  },
  licenciaturas: {
    label: 'Licenciaturas',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Matemática que Vem do Mundo: Jogos, Culturas e Saberes em Ação', l: 'Sala 1 · Prédio 1' },
      { h: '11:00', a: 'Ciência Viva: Aprender nos Espaços de Memória', l: 'Museu de Ciências Naturais' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Cavalo Caramelo: Cartografia, Ambiente e Vivências do Território', l: 'Visita ao Cavalo Caramelo' },
      { h: '14:30', a: 'Ler o Mundo, Escrever Sentidos: Múltiplas Leituras em Ação', l: 'Sala 1 · Prédio 1' },
    ],
  },
  servico_social: {
    label: 'Serviço Social',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Workshop sobre saúde mental', l: 'Sala 40 · Prédio 1' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Workshop sobre Diversidade e Inclusão', l: 'Sala 40 · Prédio 1' },
    ],
  },
  design_digital: {
    label: 'Design Digital',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Palestra com Design Hub SAP', l: 'Sala 42 · Prédio 1' },
      { h: '11:00', a: 'Debate: "A Inteligência Artificial vai substituir os designers?"', l: 'Sala 42 · Prédio 1' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Inteligência Artificial Generativa em Design Digital', l: 'Sala 42 · Prédio 1' },
    ],
  },
  juridico: {
    label: 'Serviços Jurídicos & Notariais',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Como falar bem? Princípios de Oratória e Retórica nos Discursos', l: 'Capela' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Desafios na proteção de crianças e adolescentes no Ambiente Virtual', l: 'Sala 34–36 · Prédio 1' },
      { h: '14:30', a: 'Quem tem direito à herança? Casos práticos sobre vocação hereditária', l: 'Sala 34–36 · Prédio 1' },
    ],
  },
  teologia: {
    label: 'Teologia',
    programa: [
      { h: '09:00', a: 'Credenciamento', l: 'Auditório 220 · Prédio 1' },
      { h: '09:30', a: 'Cerimônia de Abertura', l: 'Auditório 220 · Prédio 1' },
      { h: '10:00', a: 'Como falar bem? Princípios de Oratória e Retórica nos Discursos', l: 'Capela' },
      { h: '12:00', a: 'Almoço', lunch: true },
      { h: '13:30', a: 'Como escutar bem? Princípios de Escuta Clínica e Empática', l: 'Sala 34 · Prédio 1' },
    ],
  },
};

const CURSO_TO_TRACK = {
  'Administração': 'negocios',
  'Agronomia': 'agronomia',
  'Arquitetura e Urbanismo': 'arquitetura',
  'Biologia': 'licenciaturas',
  'Biomedicina': 'biomedicina',
  'Ciência da Computação': 'tecnologia',
  'Ciências Contábeis': 'negocios',
  'CST em Análise e Desenvolvimento de Sistemas': 'tecnologia',
  'CST em Comércio Exterior': 'negocios',
  'CST em Design Digital': 'design_digital',
  'CST em Estética e Cosmética': 'estetica',
  'CST em Gestão Comercial': 'negocios',
  'CST em Gestão da Produção Industrial': 'engenharia',
  'CST em Gestão da Tecnologia da Informação': 'tecnologia',
  'CST em Gestão de Recursos Humanos': 'negocios',
  'CST em Gestão do Agronegócio': 'negocios',
  'CST em Gestão Financeira': 'negocios',
  'CST em Gestão Hospitalar': 'negocios',
  'CST em Gestão Pública': 'negocios',
  'CST em Inteligência Artificial': 'tecnologia',
  'CST em Logística': 'negocios',
  'CST em Marketing e Mídias Digitais': 'marketing',
  'CST em Mídias Sociais Digitais': 'marketing',
  'CST em Pilotagem Profissional de Aeronaves': 'pilotagem',
  'CST em Processos Gerenciais': 'negocios',
  'CST em Segurança da Informação': 'tecnologia',
  'CST em Serviços Jurídicos e Notariais': 'juridico',
  'Design de Interiores': 'arquitetura',
  'Educação Física Bacharelado': 'educacao_fisica',
  'Educação Física Licenciatura': 'educacao_fisica',
  'Engenharia de Produção': 'engenharia',
  'Engenharia de Software': 'tecnologia',
  'Engenharia Mecânica': 'engenharia',
  'Engenharia Mecânica Automotiva': 'engenharia',
  'Farmácia': 'farmacia',
  'Fisioterapia': 'fisioterapia',
  'Geografia': 'licenciaturas',
  'História': 'licenciaturas',
  'Jornalismo': 'jornalismo',
  'Letras': 'licenciaturas',
  'Matemática': 'licenciaturas',
  'Nutrição': 'nutricao',
  'Pedagogia': 'licenciaturas',
  'Serviço Social': 'servico_social',
  'Teologia': 'teologia',
};

const TODOS_CURSOS_PROG = Object.keys(CURSO_TO_TRACK).sort((a, b) => a.localeCompare(b, 'pt'));

function Programacao() {
  const [cursoAtivo, setCursoAtivo] = React.useState('');
  const [numCols, setNumCols] = React.useState(() => window.innerWidth <= 640 ? 1 : 3);
  const gridRef = React.useRef(null);
  const panelRef = React.useRef(null);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const update = () => {
      const cols = window.getComputedStyle(el).gridTemplateColumns.trim().split(/\s+/).length;
      setNumCols(Math.max(1, cols));
    };
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);

  const handleCurso = (curso) => {
    const abrindo = cursoAtivo !== curso;
    setCursoAtivo(abrindo ? curso : '');
    if (abrindo) {
      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
    }
  };

  const track = cursoAtivo ? TRACKS[CURSO_TO_TRACK[cursoAtivo]] : null;
  const activeIdx = TODOS_CURSOS_PROG.indexOf(cursoAtivo);
  const activeRow = activeIdx >= 0 ? Math.floor(activeIdx / numCols) : -1;

  return (
    <section className="section" id="programacao">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">30 de maio · 2026</div>
          <h2 className="section-title">Programação<br />do evento</h2>
        </div>
      </div>
      <p className="cursos-intro">Clique no seu curso para ver a programação completa do dia.</p>

      <div className="cursos-grid" ref={gridRef}>
        {TODOS_CURSOS_PROG.map((c, i) => {
          const naturalRow = Math.floor(i / numCols);
          const col = (i % numCols) + 1;
          const row = (cursoAtivo && naturalRow > activeRow) ? naturalRow + 2 : naturalRow + 1;
          return (
            <button
              key={c}
              style={{ gridRow: row, gridColumn: col }}
              className={`prog-curso-item${cursoAtivo === c ? ' active' : ''}`}
              onClick={() => handleCurso(c)}>
              <span className="curso-item-bullet" />
              <span className="prog-curso-nome">{c}</span>
              <span className="prog-curso-chevron">{cursoAtivo === c ? '▲' : '▼'}</span>
            </button>
          );
        })}

        {track && (
          <div
            ref={panelRef}
            className="prog-panel"
            style={{ gridColumn: '1 / -1', gridRow: activeRow + 2 }}>
            <div className="prog-panel-head">
              <div>
                <div className="prog-panel-eyebrow">{track.label}</div>
                <div className="prog-panel-curso">{cursoAtivo}</div>
              </div>
              <button className="prog-panel-close" onClick={() => setCursoAtivo('')}>✕</button>
            </div>
            <div className="prog-timeline">
              {track.programa.map((item, i) => (
                <div key={i} className={`prog-item${item.lunch ? ' prog-item--lunch' : ''}`}>
                  <div className="prog-time">{item.h}</div>
                  <div className="prog-dot-col">
                    <div className="prog-dot" />
                    {i < track.programa.length - 1 && <div className="prog-line" />}
                  </div>
                  <div className="prog-content">
                    <div className="prog-atividade">{item.a}</div>
                    {item.sub && <div className="prog-sub">{item.sub}</div>}
                    {item.l && <div className="prog-local">{item.l}</div>}
                    {item.stations && (
                      <div className="prog-stations">
                        {item.stations.map((s, si) => (
                          <div key={si} className="prog-station">
                            <div className="prog-station-name">{s.a}</div>
                            <div className="prog-station-meta">
                              {s.l && <span className="prog-local" style={{marginTop:0}}>{s.l}</span>}
                              {s.cap && <span className="prog-station-cap">{s.cap}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

window.Programacao = Programacao;
