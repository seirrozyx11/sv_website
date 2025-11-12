import { useEffect, useRef } from 'react';

const Turnstile = ({ onVerify, theme = 'light' }) => {
  const containerRef = useRef(null);
  const widgetId = useRef(null);
  const isRendered = useRef(false);

  useEffect(() => {
    // Prevent multiple renders
    if (isRendered.current) return;
    
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    
    if (!siteKey) {
      console.error('Turnstile: Site key not configured');
      return;
    }
    
    // Wait for Turnstile script to load
    const checkTurnstile = setInterval(() => {
      if (window.turnstile && containerRef.current && !isRendered.current) {
        clearInterval(checkTurnstile);
        isRendered.current = true;
        
        // Render Turnstile widget
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme,
          callback: (token) => {
            onVerify(token);
          },
          'error-callback': () => {
            onVerify(null);
          },
          'expired-callback': () => {
            onVerify(null);
          }
        });
      }
    }, 100);

    // Cleanup
    return () => {
      clearInterval(checkTurnstile);
      if (window.turnstile && widgetId.current !== null) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch (e) {
          // Widget already removed
        }
        widgetId.current = null;
        isRendered.current = false;
      }
    };
  }, [theme]);

  return <div ref={containerRef} className="turnstile-widget"></div>;
};

export default Turnstile;
