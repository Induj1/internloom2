// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">InternLoom</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-secondary">Home</a></li>
            <li><a href="/internships" className="hover:text-secondary">Internships</a></li>
            <li><a href="/courses" className="hover:text-secondary">Courses</a></li>
            <li><a href="/auth" className="hover:text-secondary">Login</a></li>
            <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
