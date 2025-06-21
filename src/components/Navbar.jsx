import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold text-blue-600">Jemar.dev</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}