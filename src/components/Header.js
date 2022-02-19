

const Header = () => {
  return <div className='header'>
      <img className="logo" alt="Cats Cycles Logo" src={process.env.PUBLIC_URL + `/CatsLogoMobile.png`}></img>
      <h1 className="motto">Your One Stop Shop For All Your Motorcycle Needs</h1>
  </div>;
};

export default Header;
