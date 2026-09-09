function Navbar() {
  return (
    <header>
      <nav className="">
        <ul className="flex justify-center gap-4">
          <li>
            <a href="" className="uppercase font-bold text-sm tracking-tight">
              Accueil
            </a>
          </li>
          <li>
            <a href="" className="uppercase font-bold text-sm tracking-tight">
              Portfolio
            </a>
          </li>
          {/* <li>
            <a href="" className="uppercase font-bold text-sm tracking-tight">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
