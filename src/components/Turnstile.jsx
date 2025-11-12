import { useEffect, useRef } from 'react';

const Turnstile = ({ onVerify, theme = 'light' }) => {
  const containerRef = useRef(null);
  const widgetId = useRef(null);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    
    if (!siteKey) {
      console.error('Turnstile: Site key not configured');
      return;
    }
    
    // Wait for Turnstile script to load
    const checkTurnstile = setInterval(() => {
      if (window.turnstile && containerRef.current) {
        clearInterval(checkTurnstile);
        
        // Render Turnstile widget
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme, // 'light', 'dark', or 'auto'
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
      if (window.turnstile && widgetId.current) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [onVerify, theme]);

  return <div ref={containerRef} className="turnstile-widget"></div>;
};

export default Turnstile;
