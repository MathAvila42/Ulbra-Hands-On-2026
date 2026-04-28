// App.jsx — root React app for Ulbra Hands On 2026 landing

const HEADLINES = {
  transforma: {
    kicker: '30 de maio · Campus Canoas',
    line1: null,
    line2: <>Práticas que <em>transformam</em>.</>
  },
  pertence: {
    kicker: 'Um dia no campus',
    line1: 'Você pertence',
    line2: <><em>aqui</em>.</>
  },
  handson: {
    kicker: 'Do digital pro presencial',
    line1: 'Mão na massa.',
    line2: <>De <em>verdade</em>.</>
  }
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showCountdown": true,
  "headline": "transforma"
} /*EDITMODE-END*/;

function TweaksUI() {
  const [values, setValues] = useTweaks(TWEAK_DEFAULTS);

  return (
    <TweaksPanel>
      <TweakSection label="Conteúdo">
        <TweakToggle
          label="Contagem regressiva"
          value={values.showCountdown}
          onChange={(v) => setValues({ showCountdown: v })} />
        
        <TweakRadio
          label="Headline"
          value={values.headline}
          options={[
          { value: 'transforma', label: 'Práticas que transformam' },
          { value: 'pertence', label: 'Você pertence aqui' },
          { value: 'handson', label: 'Mão na massa' }]
          }
          onChange={(v) => setValues({ headline: v })} />
        
      </TweakSection>
    </TweaksPanel>);

}

function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__edit_mode_set_keys' && e.data.edits) {
        setTweaks((prev) => ({ ...prev, ...e.data.edits }));
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const headline = HEADLINES[tweaks.headline] || HEADLINES.transforma;

  const scrollToForm = () => {
    document.getElementById('inscricao')?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Top bar */}
      <header className="top-bar">
        <div className="top-bar-inner">
          <div className="brand-mark">
            <span className="ulbra-dot" />
            <span>Ulbra Hands On 2026</span>
          </div>
          <button className="top-cta" onClick={scrollToForm}>Inscrever-se</button>
        </div>
      </header>

      {/* Countdown */}
      {tweaks.showCountdown && <Countdown />}

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <img
              className="hero-logo"
              src="assets/hands-on-logo.png"
              alt="Hands On 2026" />
            
            <div className="hero-kicker">{headline.kicker}</div>
            <h1 className="hero-headline">
              {headline.line1 && <>{headline.line1}<br /></>}
              {headline.line2}
            </h1>
            <p className="hero-sub">Um dia inteiro no Campus Canoas para você sair da tela, colocar a mão na massa e viver a comunidade Ulbra de verdade.
Exclusivo para alunos EaD e Semipresencial.


            </p>

            <div className="hero-facts">
              <div className="hero-fact">
                <span className="hero-fact-dot" />
                30 de maio · sábado
              </div>
              <div className="hero-fact">
                <span className="hero-fact-dot" />
                Campus Ulbra Canoas
              </div>
              <div className="hero-fact">
                <span className="hero-fact-dot" />
                Entrada solidária (1kg de alimento)
              </div>
            </div>

            <div className="hashtag-bar">
              <strong>#PráticasQueTransformam</strong>
            </div>
          </div>

          {/* Right: formulário fixo */}
          <div className="hero-right">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div className="info-strip">
        <div className="info-strip-grid">
          <div className="info-block">
            <div className="info-block-label">Data</div>
            <div className="info-block-value">30 / 05 / 26</div>
            <div className="info-block-note">Sábado, das 9h30 às 16h</div>
          </div>
          <div className="info-block">
            <div className="info-block-label">Local</div>
            <div className="info-block-value">Campus Canoas</div>
            <div className="info-block-note">Av. Farroupilha, 8001 — São José</div>
          </div>
          <div className="info-block">
            <div className="info-block-label">Para quem</div>
            <div className="info-block-value">EaD + Semi</div>
            <div className="info-block-note">Alunos, professores, tutores e Coordenadores</div>
          </div>
          <div className="info-block">
            <div className="info-block-label">Entrada</div>
            <div className="info-block-value">1kg de alimento</div>
            <div className="info-block-note">Não perecível. Contamos com a sua parte.</div>
          </div>

        </div>
      </div>

      {/* Pattern feature — callback ao Save the Date */}
      <section className="pattern-feature">
        <div className="pattern-feature-inner">
          <div className="pattern-feature-eyebrow">Save the date</div>
          <div className="pattern-feature-title">
            30 de maio<br />2026
          </div>
          <div className="pattern-feature-note">
            <strong>Campus Ulbra Canoas</strong>
            Educação a Distância · Semipresencial
          </div>
        </div>
      </section>

      <Cursos />
      <Faq />

      {/* Contato */}
      <div className="contact-section">
        <div className="contact-inner">
          <div>
            <h2 className="contact-headline">
              Ainda com <em>dúvidas?</em><br />
              Fala com a gente.
            </h2>
            <p className="contact-sub">
              Nossa equipe responde em até 1 dia útil. Escolha o canal que preferir.
            </p>
          </div>
          <div className="contact-channels">
            <a className="contact-channel" href="mailto:antonio.machado@ulbra.br">
              <div>
                <div className="contact-channel-label">E-mail</div>
                <div className="contact-channel-value">antonio.machado@ulbra.br</div>
              </div>
              <span className="contact-channel-arrow">→</span>
            </a>
            <a className="contact-channel" href="https://wa.me/5551993262382" target="_blank" rel="noopener noreferrer">
              <div>
                <div className="contact-channel-label">WhatsApp</div>
                <div className="contact-channel-value">(51) 99326-2382</div>
              </div>
              <span className="contact-channel-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <strong>Ulbra Hands On 2026</strong>
        Uma realização da Universidade Luterana do Brasil · Cursos EaD e Semipresencial<br />
        © 2026 Ulbra · <span className="tag">#PráticasQueTransformam</span>
      </footer>

      <TweaksUI />
    </>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);