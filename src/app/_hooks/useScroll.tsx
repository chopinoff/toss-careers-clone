import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (mounted) {
            setScrollY(window.scrollY);
            setLoading(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      mounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollY,
    loading,
  };
}
