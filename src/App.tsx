import React, { useState, useEffect, useRef } from 'react';
import { deckGrid, sectionNames, COLS, ROWS } from './deckConfig';

function App() {
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const [kbHintVisible, setKbHintVisible] = useState(true);
  const [kbHintFade, setKbHintFade] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastWheelRef = useRef(0);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const dismissHint = () => {
    setKbHintFade(true);
    setTimeout(() => {
      setKbHintVisible(false);
    }, 600);
  };

  const goTo = (c: number, r: number) => {
    if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return;
    setCol(c);
    setRow(r);
    setMenuOpen(false);
    dismissHint();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          goTo(col + 1, row);
          e.preventDefault();
          break;
        case 'ArrowLeft':
          goTo(col - 1, row);
          e.preventDefault();
          break;
        case 'ArrowDown':
          goTo(col, row + 1);
          e.preventDefault();
          break;
        case 'ArrowUp':
          goTo(col, row - 1);
          e.preventDefault();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [col, row]);

  // Wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const COOLDOWN = 700;
      if (now - lastWheelRef.current < COOLDOWN) return;

      const ax = Math.abs(e.deltaX);
      const ay = Math.abs(e.deltaY);

      if (ax > ay && ax > 25) {
        if (e.deltaX > 0) goTo(col + 1, row);
        else goTo(col - 1, row);
        lastWheelRef.current = now;
      } else if (ay > ax && ay > 25) {
        if (e.deltaY > 0) goTo(col, row + 1);
        else goTo(col, row - 1);
        lastWheelRef.current = now;
      }
      e.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [col, row]);

  // Touch/Swipe navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      const ax = Math.abs(dx);
      const ay = Math.abs(dy);

      if (Math.max(ax, ay) < 50) return;

      if (ax > ay) {
        if (dx < 0) goTo(col + 1, row);
        else goTo(col - 1, row);
      } else {
        if (dy < 0) goTo(col, row + 1);
        else goTo(col, row - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [col, row]);

  // Autohide keyboard hint after 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      dismissHint();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="viewport">
      <div
        className="container"
        id="container"
        style={{
          transform: `translate(${-col * 100}vw, ${-row * 100}vh)`,
        }}
      >
        {deckGrid.map((rowArr, rowIndex) =>
          rowArr.map((SlideComponent, colIndex) => {
            if (!SlideComponent) return null;
            const isVideo = rowIndex === 0;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`slide ${isVideo ? 'video-slide' : 'text-slide'}`}
                data-col={colIndex}
                data-row={rowIndex}
                style={{
                  left: `${colIndex * 100}vw`,
                  top: `${rowIndex * 100}vh`,
                }}
              >
                <SlideComponent />
              </div>
            );
          })
        )}
      </div>

      {/* Mobile top nav */}
      <nav className="mobile-nav" id="mobileNav">
        <button
          className={`mobile-nav-btn ${col <= 0 ? 'disabled' : ''}`}
          id="mobPrev"
          type="button"
          aria-label="Previous section"
          onClick={() => goTo(col - 1, row)}
        >
          &#8592;
        </button>
        <span className="mobile-nav-title" id="mobTitle">
          {col + 1} / {COLS} &nbsp;&nbsp; {sectionNames[col]}
        </span>
        <button
          className={`mobile-nav-btn ${col >= COLS - 1 ? 'disabled' : ''}`}
          id="mobNext"
          type="button"
          aria-label="Next section"
          onClick={() => goTo(col + 1, row)}
        >
          &#8594;
        </button>
      </nav>

      {/* Direction hints */}
      <div
        className={`dir-hint dir-down ${row >= ROWS - 1 ? 'hidden' : ''}`}
        id="hintDown"
        title="Details"
        onClick={() => goTo(col, row + 1)}
      >
        <span className="arrow">&#8595;</span>
        <span>Details</span>
      </div>
      <div
        className={`dir-hint dir-up ${row <= 0 ? 'hidden' : ''}`}
        id="hintUp"
        title="Back"
        onClick={() => goTo(col, row - 1)}
      >
        <span>Overview</span>
        <span className="arrow">&#8593;</span>
      </div>
      <div
        className={`dir-hint dir-left ${col <= 0 ? 'hidden' : ''}`}
        id="hintLeft"
        onClick={() => goTo(col - 1, row)}
      >
        <span className="arrow">&#8592;</span>
      </div>
      <div
        className={`dir-hint dir-right ${col >= COLS - 1 ? 'hidden' : ''}`}
        id="hintRight"
        onClick={() => goTo(col + 1, row)}
      >
        <span className="arrow">&#8594;</span>
      </div>

      {/* Navigation grid */}
      <nav
        className="nav-grid"
        id="navGrid"
        style={{ '--cols': COLS, '--rows': ROWS } as React.CSSProperties}
      >
        {Array.from({ length: ROWS }).map((_, r) =>
          Array.from({ length: COLS }).map((_, c) => (
            <button
              key={`${r}-${c}`}
              className={`nav-dot ${col === c && row === r ? 'active' : ''}`}
              title={r === 0 ? 'Video' : 'Text'}
              onClick={() => goTo(c, r)}
            />
          ))
        )}
      </nav>

      {/* Hamburger menu */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}

      <nav className={`slide-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {sectionNames.map((name, i) => (
            <li key={i}>
              <button
                className={`menu-item ${col === i ? 'active' : ''}`}
                onClick={() => goTo(i, 0)}
              >
                <span className="menu-num">{String(i).padStart(2, '0')}</span>
                <span className="menu-name">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Keyboard hint */}
      {kbHintVisible && (
        <div className={`keyboard-hint ${kbHintFade ? 'fade' : ''}`} id="kbHint">
          Swipe or use arrow keys to navigate
        </div>
      )}
    </div>
  );
}

export default App;
