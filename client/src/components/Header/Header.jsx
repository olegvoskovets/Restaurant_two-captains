import "./header.scss";

const Header = () => {
  return (
    <section className="header" id="header">
      <div className="logo">
        <img src="images/logo1.png" alt="logo two_captains" />
      </div>
      <div className="links" id="nav">
        <a href="#Home">HOMEPAGE</a>
        <a href="#about">ABOUT</a>
        <a href="#MENU">MENU</a>
        <a href="#team">RESERVATION</a>
        <a href="#Blog">NEWS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </section>
  );
};

export default Header;
