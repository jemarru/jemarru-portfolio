import React, { useEffect, useState } from 'react';
import '../styles/parallax.css';

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="parallax-horizontal flex flex-col items-center justify-center min-h-screen text-center px-4"
      style={{
        backgroundPositionX: `${offset * -0.5}px` // moves background horizontally as you scroll
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-white">Hi, I’m Jemar 👋</h1>
      <p className="text-lg max-w-xl text-white">
        A passionate web developer building modern, scalable apps and exploring AI tools.
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        See My Work
      </a>
    </section>
  );
}
