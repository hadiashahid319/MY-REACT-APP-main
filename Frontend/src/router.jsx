import { createBrowserRouter } from "react-router-dom";
import Landing from "./Landing";

import Login from "./Login";
import RegistrationPage from "./Registrationpage";
import CandlesGallery from "./CandlesGallery";
import MirrorsGallery from "./MirrorsGallery";
import FramesGallery from "./FramesGallery";
import VasesGallery from "./VasesGallery";
import RatingPage from "./RatingPage";
import TableOfContents from "./TableOfContents";
import Dashboard from "./Dashboard";
import AdminItems from "./AdminItems";

const router = createBrowserRouter([
    // { path: "/" , element:  <Landing /> },
    //  { path: "/registrationpage" , element:  <RegistrationPage /> },
    //  { path: "/candlesgallery" , element:  <CandlesGallery/> },
    //  { path: "/mirrorsgallery" , element:  <MirrorsGallery /> },
    //   { path: "/framesgallery" , element:  <FramesGallery /> },
    //      { path: "/vasesgallery" , element:  <VasesGallery /> },
    // { path: "/login" , element: <Login /> },
    // { path: "/rating" , element: <RatingPage /> },
    { path: "/admin" , element: <Dashboard /> },
    { path:"/create ", element:<AdminItems/>}
]);

export default router;