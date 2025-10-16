import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FIEPLogo from "../Icon";

const Header = () => {
  const [activeItem, setActiveItem] = useState("inicio");

  return (
    <header className="flex justify-between py-5 px-14">
      <div className="flex gap-36">
        <FIEPLogo />
        <nav className="flex gap-x-4">
          <a
            href="/"
            onClick={() => setActiveItem("inicio")}
            className="text-title-5 relative pb-1 cursor-pointer"
          >
            Página Inicial
            {activeItem === "inicio" && (
              <div className="absolute -bottom-5 left-0 right-0 h-1 bg-primary rounded-t" />
            )}
          </a>
          <span className="text-title-5 pb-1 cursor-not-allowed">
            Plano de Estudos
          </span>
          <a
            href="/revisoes"
            onClick={() => setActiveItem("revisoes")}
            className="text-title-5 relative pb-1 cursor-pointer"
          >
            Revisões
            {activeItem === "revisoes" && (
              <div className="absolute -bottom-5 left-0 right-0 h-1 bg-primary rounded-t" />
            )}
          </a>
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
