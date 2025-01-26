import trollFace from "../assets/trollFace.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header--image" src={trollFace} alt="" />
        <h1 className="header--title">Meme generator</h1>
      </header>
    </>
  );
};

export default Header;
