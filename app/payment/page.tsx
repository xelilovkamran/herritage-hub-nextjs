"use client";

import CheckoutPage from "@/components/payment/checkout";
import { convertToSubcurrency } from "@/lib/utils";
import { useUser } from "@stackframe/stack";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { plans } from "@/lib/constants";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("Stripe public key is not set");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentPage() {
  const user = useUser();
  const searchParams = useSearchParams();

  const plan = searchParams.get("plan") || "basic";
  const amount = plans[plan as keyof typeof plans]?.price;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">{user?.displayName}</h1>
        <h2 className="text-2xl">
          has requested <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage plan={plan} amount={amount} />
      </Elements>
    </main>
  );
}
