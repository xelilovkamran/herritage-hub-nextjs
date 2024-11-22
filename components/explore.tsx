import React from "react";
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

type ExploreCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  year: string;
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
};

export function ExploreCard(props: ExploreCardProps) {
  return (
    <Card
      className={`w-full max-w-sm ${
        props.isPopular ? "border-primary border-2 shadow-lg" : ""
      }`}
    >
      <CardHeader>
        {/* Image section */}
        <div className="relative h-64">
          {/* eslint-disable-next-line */}
          <img
            src={props.imageUrl}
            alt={props.title}
            className="w-full h-full rounded-md"
          />
        </div>
        <CardTitle className="text-2xl font-bold mt-4">{props.title}</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Additional information like location and year */}
        <div className="mt-2 text-sm text-muted-foreground">
          <p>
            <strong>Location:</strong> {props.location}
          </p>
          <p>
            <strong>Year:</strong> {props.year}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={props.buttonHref}
          className={buttonVariants({
            variant: props.isPopular ? "default" : "outline",
          })}
        >
          {props.buttonText}
        </Link>
      </CardFooter>
    </Card>
  );
}

export function ExploreGrid(props: {
  title: string;
  subtitle: string;
  items: ExploreCardProps[];
}) {
  return (
    <section
      id="explore"
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
          <ExploreCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
