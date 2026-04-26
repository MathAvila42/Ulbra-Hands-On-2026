// Countdown.jsx — contagem regressiva até 30/05/2026

function Countdown() {
  const target = new Date('2026-05-30T09:00:00-03:00').getTime();
  const [now, setNow] = React.useState(Date.now());

  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="countdown-strip">
      <div className="countdown-inner">
        <span className="countdown-label">Faltam</span>
        <div className="countdown-blocks">
          <div className="cd-block">
            <span className="cd-num">{pad(days)}</span>
            <span className="cd-unit">dias</span>
          </div>
          <div className="cd-block">
            <span className="cd-num">{pad(hours)}</span>
            <span className="cd-unit">horas</span>
          </div>
          <div className="cd-block">
            <span className="cd-num">{pad(mins)}</span>
            <span className="cd-unit">min</span>
          </div>
          <div className="cd-block">
            <span className="cd-num">{pad(secs)}</span>
            <span className="cd-unit">seg</span>
          </div>
        </div>
        <span className="countdown-label">para o grande dia · 30 maio 2026</span>
      </div>
    </div>
  );
}

window.Countdown = Countdown;
