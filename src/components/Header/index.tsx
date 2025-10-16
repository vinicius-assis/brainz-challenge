import { ChevronDown } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import FIEPLogo from "../Icon";

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between py-5 px-14">
      <div className="flex gap-36">
        <FIEPLogo />
        <nav className="flex gap-x-4">
          <Link
            to="/"
            className="text-title-5 relative pb-1 cursor-pointer"
          >
            Página Inicial
            {location.pathname === "/" && (
              <div className="absolute -bottom-5 left-0 right-0 h-1 bg-primary rounded-t" />
            )}
          </Link>
          <span className="text-title-5 pb-1 cursor-not-allowed">
            Plano de Estudos
          </span>
          <Link
            to="/revisoes"
            className="text-title-5 relative pb-1 cursor-pointer"
          >
            Revisões
            {location.pathname === "/revisoes" && (
              <div className="absolute -bottom-5 left-0 right-0 h-1 bg-primary rounded-t" />
            )}
          </Link>
          <span className="text-title-5 pb-1 cursor-not-allowed">
            Simulados
          </span>
        </nav>
      </div>
      <ChevronDown />
    </header>
  );
};

export default Header;
