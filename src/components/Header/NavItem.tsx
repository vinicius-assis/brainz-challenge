import { Link } from "react-router-dom";

interface NavItemProps {
  to?: string;
  children: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
}

const NavItem = ({ to, children, isActive, disabled = false }: NavItemProps) => {
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

export default NavItem;
