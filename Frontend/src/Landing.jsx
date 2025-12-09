
import GallerySection from "./GallerySection";
import InstagramSection from "./InstagramSection";
import View from "./View";
import Footer from "./Footer";
import About from "./Banner";
import MostSaledItem from "./MostSaledItem";
import Banner from "./Banner";
import Navbar from "./Bar";

import RegistrationPage from "./Registrationpage";
import Login from "./Login";
import CandlesGallery from "./CandlesGallery";

import Prac from "./Prac";
import MirrorsGallery from "./MirrorsGallery";
import RateSection from "./RateSection";

function Landing()
{ 
    return(
<>
<div className="container-fluid">

{/* <Navbar/> */}
<Banner/>
<GallerySection/>
<View/>
<MostSaledItem/>
<RateSection/>
<Footer/>


</div> 
</>
    
    
    )
}
export default Landing;