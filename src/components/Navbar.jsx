const Navbar = () => {
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Acerca</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        <a className="text-xl">
          <img src="/logo_dark.png" className="w-22" alt="lilyart_logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Acerca</a>
          </li>
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-md">CONTACTO</a>
      </div>
    </div>
  );
};

export default Navbar;
