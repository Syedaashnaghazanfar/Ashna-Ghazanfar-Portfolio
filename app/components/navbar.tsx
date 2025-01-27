function Navbar() {
    return (
      <nav className="bg-black fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-white font-header text-2xl uppercase whitespace-nowrap ml-6">
            Ashna Ghazanfar
          </div>
  
          {/* Navigation Menu (Hidden on mobile) */}
          <div className="hidden lg:flex absolute top-full left-0 w-full bg-black lg:static lg:items-center">
            <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 text-center ml-[200px]">
              {[
                'About',
                'Services',
                'Portfolio',
                'Statistics',
                'Blog',
                'Contact',
              ].map((item, index) => (
                <li key={index} className="group py-3 lg:py-0">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="cursor-pointer font-header font-semibold uppercase text-white block px-6 lg:px-0 text-sm lg:text-base"
                  >
                    {item}
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  