import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Explore", href: "/explore" },
          // { title: "Github", href: "https://github.com/stack-auth/stack-template", external: true },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Holberton School students"
        builtByLink="https://www.holbertonschool.com/"
        githubLink="https://github.com/stack-auth/stack-template"
        twitterLink="https://twitter.com/stack_auth"
        linkedinLink="linkedin.com/company/stack-auth"
      />
    </div>
  );
}
