import React, { useState, useEffect } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import OptimizedImage from './OptimizedImage';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('valentine');

  const links = [
    { name: 'Inicio', id: 'home' },
    { name: 'Acerca', id: 'about' },
    { name: 'Galería', id: 'gallery' },
    { name: 'Productos', id: 'products' },
    { name: 'Proceso', id: 'process' },
    { name: 'Servicios', id: 'services' },
    { name: 'Testimonios', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
  ];

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'valentine';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'valentine' ? 'dark' : 'valentine';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = 'home';

      // Iterate through all sections and find which one we're in
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = link.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run once on mount to set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -64;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm max-h-16 fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={(e) => handleClick(e, link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center pl-10">
          <OptimizedImage
            src={theme === 'dark' ? '/logo_light.png' : '/logo_dark.png'}
            className="w-22"
            alt="lilyart_logo"
            loading="eager"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${activeSection === link.id ? 'border-b-2 border-primary rounded-none' : ''} hover:bg-transparent hover:text-primary active:!bg-transparent focus:!bg-transparent px-2`}
                onClick={(e) => handleClick(e, link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end pr-5 gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? (
            <IoSunny size={20} className="text-yellow-400" />
          ) : (
            <IoMoon size={20} />
          )}
        </button>

        <a
          className="btn rounded-md"
          href="#contact"
          onClick={(e) => handleClick(e, 'contact')}
        >
          CONTACTO
        </a>
      </div>
    </div>
  );
};

export default Navbar;
