'use client';

import { useEffect } from 'react';

/**
 * Lightweight replacement for Framer Motion whileInView.
 * Uses a single shared IntersectionObserver for all .fade-in elements.
 * Call once in your layout or page component.
 */
export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
