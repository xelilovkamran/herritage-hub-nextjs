export default function DetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src={`/threejs-app/index.html?id=${id}`} // Or replace with the URL where your app is deployed
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
