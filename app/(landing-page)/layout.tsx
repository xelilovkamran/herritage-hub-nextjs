import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Explore", href: "/explore" },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Pentagon Team"
        builtByLink=""
        githubLink="https://github.com/xelilovkamran"
        twitterLink=""
        linkedinLink="https://linkedin.com/in/kamran-xelilov"
      />
    </div>
  );
}
