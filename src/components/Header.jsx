import './Header.css';

const Header = () => {
  const name = 'Bastien Krettly';

  return (
    <header className="Header">
      <h1>{name}</h1>
      <h2>Formateur JavaScript</h2>
    </header>
  );
};

export default Header;
