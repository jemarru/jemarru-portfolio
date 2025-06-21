import React from 'react';
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Jemar 👋</h1>
      <p className="text-lg max-w-xl">
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
