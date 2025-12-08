import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      {/* <Link path="/login">Login</Link>
      <Link path="/registration">RegistrationPage</Link>
       <Link path="/Candlesgallery">CandlesGallery</Link>
        <Link path="/mirrorsgallery">MirrorsGallery</Link>
        <Link path="/framesgallery">FramesGallery</Link>
        <Link path="/vasesgallery">VasesGallery</Link>
      <Link path="/">Landing page</Link>
      <Link path="/rating">RatingPage</Link> */}
      <Link path="/admin">Dashboard</Link>
      <Link path="/create">AdminItems</Link>
    
    </>
  );
}

export default Menu;