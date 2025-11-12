import { useEffect, useRef } from 'react';

const Turnstile = ({ onVerify, theme = 'light' }) => {
  const containerRef = useRef(null);
  const widgetId = useRef(null);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    
    // Debug: Log the site key status
    if (!siteKey) {
      console.error('❌ VITE_TURNSTILE_SITE_KEY is not defined! Check your .env file and restart dev server.');
      return;
    }
    
    console.log('✅ Turnstile site key loaded:', siteKey);
    
    // Wait for Turnstile script to load
    const checkTurnstile = setInterval(() => {
      if (window.turnstile && containerRef.current) {
        clearInterval(checkTurnstile);
        
        // Render Turnstile widget
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme, // 'light', 'dark', or 'auto'
          callback: (token) => {
            console.log('Turnstile verified:', token);
            onVerify(token);
          },
          'error-callback': () => {
            console.error('Turnstile error');
            onVerify(null);
          },
          'expired-callback': () => {
            console.log('Turnstile expired');
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
