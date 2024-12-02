"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
};

export function PricingCard(props: PricingCardProps) {
  const user = useUser();
  const router = useRouter();

  const onclick = () => {
    if (user && user.clientMetadata.subscriptionPlan === "unselected") {
      router.push(props.buttonHref);
    } else if (!user) {
      router.push("/handler/sign-in");
    } else {
      router.push("/explore");
    }
  };

  return (
    <Card
      className={`w-full max-w-sm ${
        props.isPopular ? "border-primary border-2 shadow-lg" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold">{props.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-2">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={
            (buttonVariants({
              variant: "outline",
            }),
            "w-full hover:opacity-90 transition-all duration-300")
          }
          onClick={onclick}
        >
          {props.buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function PricingGrid(props: {
  title: string;
  subtitle: string;
  items: PricingCardProps[];
}) {
  return (
    <section
      id="features"
      className="container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">{props.title}</h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg">
          {props.subtitle}
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {props.items.map((item, index) => (
          <PricingCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
