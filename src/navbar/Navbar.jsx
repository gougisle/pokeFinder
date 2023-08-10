import "./navbar.scss";

function Navbar() {
  const checkStorage = () => {
    const fetchedDataString = window.sessionStorage.getItem("pikachu");
    //const fetchedDataObject = JSON.parse(fetchedDataString);
    console.log(fetchedDataString);
  };

  return (
    <nav className="navbar">
      <h3 className="navbar-item">PokeApp</h3>
      <a className="navbar-item" href="#contact" onClick={checkStorage}>
        Check Storage
      </a>
    </nav>
  );
}

export default Navbar;
