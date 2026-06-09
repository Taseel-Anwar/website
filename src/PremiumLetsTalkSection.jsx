import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

function LogoMark() {
  return (
    <div className="lt-logo" aria-hidden="true">
      <img className="lt-logo-mark" src="/favicon.svg" alt="" />
      <span className="lt-logo-text">Coderift</span>
    </div>
  );
}

function CalendarHeader({ currentMonthLabel, onPrev, onNext }) {
  return (
    <div className="lt-cal-header">
      <button type="button" className="lt-icon-btn" onClick={onPrev} aria-label="Previous month">
        ←
      </button>
      <div className="lt-cal-month" aria-live="polite">
        {currentMonthLabel}
      </div>
      <button type="button" className="lt-icon-btn" onClick={onNext} aria-label="Next month">
        →
      </button>
    </div>
  );
}

function getMonthMatrix(year, monthIndex) {
  // monthIndex: 0-11
  const first = new Date(year, monthIndex, 1);
  const last = new Date(year, monthIndex + 1, 0);
  const startWeekday = first.getDay(); // 0 Sun
  const daysInMonth = last.getDate();

  // We render 6 rows x 7 cols for stable layout.
  const cells = [];
  for (let i = 0; i < 42; i += 1) {
    const dayNum = i - startWeekday + 1;
    if (dayNum < 1 || dayNum > daysInMonth) {
      cells.push({ kind: 'empty', day: null });
    } else {
      const date = new Date(year, monthIndex, dayNum);
      const iso = date.toISOString().slice(0, 10);
      cells.push({ kind: 'day', day: dayNum, iso });
    }
  }
  return cells;
}

function formatMonthLabel(date) {
  return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
}

function isSameISO(isoA, isoB) {
  return isoA && isoB && isoA === isoB;
}

export default function PremiumLetsTalkSection() {
  const [now] = useState(() => new Date());

  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedISO, setSelectedISO] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = useMemo(() => ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00'], []);

  const currentMonthDate = useMemo(() => {
    const d = new Date(now);
    d.setMonth(d.getMonth() + monthOffset);
    d.setDate(1);
    return d;
  }, [monthOffset, now]);

  const year = currentMonthDate.getFullYear();
  const monthIndex = currentMonthDate.getMonth();

  const monthLabel = useMemo(() => formatMonthLabel(currentMonthDate), [currentMonthDate]);
  const cells = useMemo(() => getMonthMatrix(year, monthIndex), [year, monthIndex]);

  const availableSet = useMemo(() => {
    // Example: highlight dates ~ in 2-week window from "today".
    // This keeps the UI interactive without needing external APIs.
    const set = new Set();
    const base = new Date(now);
    base.setHours(0, 0, 0, 0);
    for (let i = 0; i < 28; i += 1) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      // Make some days available deterministically.
      const weekday = d.getDay(); // 0 Sun .. 6 Sat
      const isBusinessDay = weekday >= 1 && weekday <= 5;
      const allow = isBusinessDay && (d.getDate() % 2 === 0 || d.getDate() % 3 === 0);
      if (allow) set.add(d.toISOString().slice(0, 10));
    }
    return set;
  }, [now]);

  const availableTodayISO = useMemo(() => {
    const base = new Date(now);
    base.setHours(0, 0, 0, 0);
    return base.toISOString().slice(0, 10);
  }, [now]);

  const firstAvailableISOInView = useMemo(() => {
    for (const c of cells) {
      if (c.kind === 'day' && c.iso && availableSet.has(c.iso)) return c.iso;
    }
    return '';
  }, [cells, availableSet]);

  // If no selected date yet, pick a default available one within the current month.
  // This keeps keyboard focus predictable.
  if (!selectedISO && firstAvailableISOInView) {
    // eslint-disable-next-line react/no-unstable-nested-components
    // (This is acceptable because it's derived in render from stable state/props.)
  }

  const activeISO = selectedISO || firstAvailableISOInView || availableTodayISO;
  const hasActive = !!activeISO;

  const selectedLabel = useMemo(() => {
    if (!hasActive) return '';
    const d = new Date(`${activeISO}T00:00:00`);
    return d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }, [activeISO, hasActive]);

  const handlePickDate = (iso) => {
    if (!availableSet.has(iso)) return;
    setSelectedISO(iso);
    setSelectedTime('');
  };

  const handleSelectTime = (t) => {
    setSelectedTime(t);
  };

  const MAIL_TO = 'taseel.work@gmail.com';

  const canSend = hasActive && selectedTime;

  const handleConfirm = () => {
    const datePart = activeISO || '';
    const timePart = selectedTime || '';
    const subject = `Let\'s Talk — ${datePart} ${timePart}`;
    const body = [
      `Hi Coderift,`,
      `I'd like to book a call for:`,
      `Date: ${selectedLabel || datePart}`,
      `Time: ${timePart || '-'}`,
      ``,
      `Quick note:`,
      `-`,
      ``,
      `Sent from the website booking section.`
    ].join('\n');

    window.location.href = `mailto:${encodeURIComponent(MAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const monthFirstDay = new Date(year, monthIndex, 1);
  const weekdayLabels = useMemo(() => {
    const labels = [];
    // Render Sun..Sat to match JS getDay.
    const base = new Date(monthFirstDay);
    for (let i = 0; i < 7; i += 1) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      labels.push(d.toLocaleDateString(undefined, { weekday: 'short' }));
    }
    return labels;
  }, [monthFirstDay]);

  return (
    <section className="lt-section" aria-label="Let's Talk booking">
      <div className="container lt-container">
        <div className="lt-shell">
          <div className="lt-left" role="region" aria-label="Booking information">
            <div className="lt-brand-card">
              <LogoMark />
            </div>

            <div className="lt-copy-card">
              <div className="lt-eyebrow">Let&apos;s Talk</div>
              <h2 className="lt-head">Coderift Discovery Call</h2>

              <div className="lt-duration" aria-label="Meeting duration">
                <span aria-hidden="true">◔</span>
                <span>30 min</span>
              </div>

              <p className="lt-desc">
                This is a focused introduction to your project, your challenges, and the right path forward. We&apos;ll
                outline the best solution with clarity before anything gets built.
              </p>

              <ul className="lt-benefits" aria-label="What you get">
                <li>Project discovery</li>
                <li>Technical consultation</li>
                <li>Budget and timeline guidance</li>
                <li>Recommended next steps</li>
              </ul>

              <div className="lt-left-actions">
                <Link to="/services" className="btn-ghost lt-ghost-cta">
                  Explore services
                </Link>
              </div>
            </div>
          </div>

          <div className="lt-right" role="region" aria-label="Scheduling">
            <div className="lt-card">
              <div className="lt-top-row">
                <h3 className="lt-right-title">Select a Date &amp; Time</h3>
              </div>

              <CalendarHeader
                currentMonthLabel={monthLabel}
                onPrev={() => setMonthOffset((v) => v - 1)}
                onNext={() => setMonthOffset((v) => v + 1)}
              />

              <div className="lt-weekdays" aria-hidden="true">
                {weekdayLabels.map((w, idx) => (
                  <div key={`${w}-${idx}`} className="lt-weekday">
                    {w}
                  </div>
                ))}
              </div>

              <div className="lt-cal" role="grid" aria-label="Calendar">
                {cells.map((c, idx) => {
                  if (c.kind === 'empty') {
                    return <button key={`e-${idx}`} type="button" className="lt-day lt-day-empty" tabIndex={-1} aria-hidden="true" />;
                  }

                  const available = availableSet.has(c.iso);
                  const active = isSameISO(c.iso, activeISO);

                  return (
                    <button
                      key={c.iso}
                      type="button"
                      className={`lt-day${available ? ' lt-day-available' : ''}${active ? ' lt-day-active' : ''}`}
                      disabled={!available}
                      onClick={() => handlePickDate(c.iso)}
                      aria-pressed={active}
                      aria-label={available ? `Available: ${c.iso}` : `Unavailable: ${c.iso}`}
                    >
                      {c.day}
                    </button>
                  );
                })}
              </div>

              <div className="lt-timezone">Time zone</div>

              {hasActive ? (
                <div className="lt-appointment" aria-live="polite">
                  <div className="lt-appointment-meta">
                    <span className="lt-appointment-date">{selectedLabel}</span>
                  </div>

                  <div className="lt-time-grid" role="list" aria-label="Available times">
                    {timeSlots.map((t) => {
                      const active = t === selectedTime;
                      return (
                        <button
                          key={t}
                          type="button"
                          className={`lt-time${active ? ' lt-time-active' : ''}`}
                          onClick={() => handleSelectTime(t)}
                          aria-pressed={active}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    className={`btn-primary lt-confirm${canSend ? '' : ' is-disabled'}`}
                    disabled={!canSend}
                    onClick={handleConfirm}
                  >
                    Confirm Booking →
                  </button>

                  <p className="lt-privacy">
                    By confirming, you&apos;ll open an email draft. No account required.
                  </p>
                </div>
              ) : (
                <div className="lt-appointment">
                  <p className="lt-privacy">No available dates in this month. Try another month.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

