import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutPage";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export default function StripePage() {
  if (!stripePromise) return <p>Stripe not initialized!</p>;
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
