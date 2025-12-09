import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutPage";
import { ItemsProvider } from "./contexts/ItemsContext";
// 🔹 Admin Components
import Dashboard from "./Dashboard";
import AdminItems from "./AdminItems";
import AdminUpdate from "./AdminUpdate";
import AdminDelete from "./AdminDelete";
import RatingPage from "./RatingPage";
import AdminRating from "./AdminRating";
import AdminMessages from "./AdminMessages";

// 🔹 User Components
import Landing from "./Landing";
import CandlesGallery from "./CandlesGallery";
import MirrorsGallery from "./MirrorsGallery";
import VasesGallery from "./VasesGallery";
import FramesGallery from "./FramesGallery";

// 🔹 Auth Components
import Login from "./Login";
import RegistrationPage from "./Registrationpage";

// 🔹 Main and Shared Components
import MainHome from "./MainHome";
import Bar from "./Bar";
import ProfilePage from "./ProfilePage";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";

// ✅ Stripe setup
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export default function App() {
  return (
    <BrowserRouter>
      {/* Optional Top Bar */}
     <Bar/>
   <ItemsProvider>
     <Routes>
        
        {/* MAIN ENTRY PAGE */}
        <Route path="/" element={<MainHome />} />

        {/* USER ROUTES */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/candles" element={<CandlesGallery />} />
        <Route path="/mirrors" element={<MirrorsGallery />} />
        <Route path="/vases" element={<VasesGallery />} />
        <Route path="/frames" element={<FramesGallery />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage/>} />

        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Dashboard />}>
          <Route
            index
            element={
              <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                🏠 Welcome to Home Décor Admin Dashboard
              </h3>
            }
          />
          <Route path="create" element={<AdminItems />} />
          <Route path="update" element={<AdminUpdate />} />
          <Route path="delete" element={<AdminDelete />} />
          <Route path="rating" element={<RatingPage />} />
          <Route path="ratings-view" element={<AdminRating />} />
          <Route path="messages" element={<AdminMessages />} />
        </Route>

        {/* STRIPE CHECKOUT ROUTE */}
        <Route
          path="/checkout"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }
        />
      </Routes>
    </ItemsProvider>
      
    </BrowserRouter>
  );
}
