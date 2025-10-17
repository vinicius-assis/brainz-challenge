import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import FIEPLogo from "../Icon";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavItem = ({ to, children, isActive, disabled = false }: {
    to?: string;
    children: React.ReactNode;
    isActive?: boolean;
    disabled?: boolean;
  }) => {
    const baseClasses = "text-title-5 relative pb-1 cursor-pointer block px-4 py-2";
    const activeClasses = "bg-primary/10 rounded-md";
    const disabledClasses = "cursor-not-allowed opacity-60";

    const classes = `${baseClasses} ${isActive ? activeClasses : ''} ${disabled ? disabledClasses : ''}`;

    if (disabled) {
      return <span className={classes}>{children}</span>;
    }

    return (
      <Link to={to!} className={classes}>
        {children}
        {isActive && (
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-t" />
        )}
      </Link>
    );
  };

  return (
    <header className="flex justify-between items-center py-5 px-4 md:px-14 relative">
      <div className="flex items-center gap-4 md:gap-36">
        <FIEPLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-4">
          <NavItem to="/" isActive={location.pathname === "/"}>
            Página Inicial
          </NavItem>
          <NavItem disabled>
            Plano de Estudos
          </NavItem>
          <NavItem to="/revisoes" isActive={location.pathname === "/revisoes"}>
            Revisões
          </NavItem>
          <NavItem disabled>
            Simulados
          </NavItem>
        </nav>
      </div>

      {/* Desktop ChevronDown */}
      <ChevronDown className="hidden md:block" />

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
          <div className="px-4 py-2">
            <NavItem to="/" isActive={location.pathname === "/"}>
              Página Inicial
            </NavItem>
            <NavItem disabled>
              Plano de Estudos
            </NavItem>
            <NavItem to="/revisoes" isActive={location.pathname === "/revisoes"}>
              Revisões
            </NavItem>
            <NavItem disabled>
              Simulados
            </NavItem>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
