import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import FIEPLogo from "../Icon";
import NavItem from "./NavItem";
import { useMobileMenu } from "../../hooks/useMobileMenu";

const Header = () => {
  const location = useLocation();
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

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
