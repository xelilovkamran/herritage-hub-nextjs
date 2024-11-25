import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "@/stack";
import {
  EnterIcon,
  GlobeIcon,
  LockClosedIcon,
  Share1Icon,
  Link2Icon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

export default async function IndexPage() {
  const user = await stackServerApp.getUser();

  if (!user?.clientMetadata) {
    await user?.update({
      clientMetadata: {
        subscriptionPlan: "basic",
      },
    });
  }

  return (
    <>
      <Hero
        capsuleText="Unveiling the Past, One Click at a Time."
        capsuleLink="https://github.com/xelilovkamran"
        title="Discover History Through Immersive Exploration"
        subtitle="Crafted for seamless exploration. Next.js + TypeScript + Three.js."
        primaryCtaText="Get Started"
        primaryCtaLink={stackServerApp.urls.signUp}
        secondaryCtaText="GitHub"
        secondaryCtaLink="https://github.com/xelilovkamran"
      />

      <div id="features" />
      <FeatureGrid
        title="Features"
        subtitle="Discover What Makes Us Unique."
        items={[
          {
            icon: <EnterIcon className="h-12 w-12" />,
            title: "Immersive Exploration",
            description:
              "Dive into history with an engaging and interactive experience.",
          },
          {
            icon: <GlobeIcon className="h-12 w-12" />,
            title: "Cultural Connection",
            description:
              "Seamlessly connect with history and culture through immersive design.",
          },
          {
            icon: <LockClosedIcon className="h-12 w-12" />,
            title: "Secure and Seamless Access",
            description:
              "Effortlessly explore history with user-friendly and secure accessibility.",
          },
          {
            icon: <Share1Icon className="h-12 w-12" />,
            title: "Shared Exploration",
            description:
              "Join others on a journey through history and culture, together.",
          },
          {
            icon: <Link2Icon className="h-12 w-12" />,
            title: "Universal Access",
            description:
              "Explore rich cultural content, available to all, everywhere.",
          },
          {
            icon: <LightningBoltIcon />,
            title: "Dynamic Experiences",
            description:
              "Crafted for flexibility and tailored for cultural discovery.",
          },
        ]}
      />

      {/* <div id="pricing" />
      <PricingGrid
        title="Plans"
        subtitle="Choose the plan that fits your exploration needs."
        items={[
          {
            title: "Basic",
            price: "Free",
            description: "Perfect for individual explorers and small groups.",
            features: [
              "Full access to content",
              "100% Open-source",
              "Community-driven support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Get Started",
            buttonHref: stackServerApp.urls.signUp,
          },
          {
            title: "Pro",
            price: "$0.00",
            description: "Ideal for teams and collaborative explorers.",
            features: [
              "Full access to content",
              "100% Open-source",
              "Community-driven support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Upgrade to Pro",
            // isPopular: true,
            buttonHref: stackServerApp.urls.signUp,
          },
          // {
          //   title: "Enterprise",
          //   price: "Still Free",
          //   description: "For large organizations or educational institutions.",
          //   features: [
          //     "Full access to content",
          //     "100% Open-source",
          //     "Community-driven support",
          //     "Free forever",
          //     "No credit card required",
          //   ],
          //   buttonText: "Contact Us",
          //   buttonHref: stackServerApp.urls.signUp,
          // },
        ]}
      /> */}
    </>
  );
}
