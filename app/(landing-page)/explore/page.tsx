import { ExploreGrid } from "@/components/explore";

export default async function IndexPage() {
  return (
    <>
      <ExploreGrid
        title="Explore History"
        subtitle="Discover historical places and events around the world."
        items={[
          {
            title: "Hallwyl Museum",
            description:
              "Step into the fascinating world of the Hallwyl Museum, a beautifully preserved mansion showcasing Swedish history and aristocratic life.",
            imageUrl:
              "https://zurizuberi.com/wp-content/uploads/2018/08/Zuri_Zuberi_Hallwyl_Museum_7.jpg",
            location: "Stockholm, Sweden",
            year: "1898 (built)",
            buttonText: "Explore Now",
            buttonHref: "/details/1",
          },
        ]}
      />
    </>
  );
}
