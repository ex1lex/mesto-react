import logoPath from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logoPath} alt="Логотип" />
    </header>
  );
}
