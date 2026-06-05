import Carousel from "./Carousel";

function Project({ source, elements, title, link, desc }) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
      }}
    >
      <div style={{ margin: "0" }}>
        <div
          style={{
            marginTop: "5px",
            padding: "10px",
          }}
        >
          <h2 style={{ marginBottom: "4px", marginTop: "0" }}>
            <a
              href={link}
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              {title}
            </a>
          </h2>

          {desc && (
            <p
              style={{
                margin: "8px 0 12px 0",
                fontSize: "0.9rem",
                lineHeight: "1.5",
                color: "#eee", // closer to white
                fontWeight: "300",
              }}
            >
              {desc}
            </p>
          )}

          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap",justifyContent: "center", alignItems: "center" }}>
            {elements.map((text, i) => (
              <div>{text}</div>              
            ))}
          </div>
        </div>

        <Carousel
          images={source}
          imgStyle={{
            maxHeight: "70vh", // don’t exceed 70% of screen height
            width: "100%", // take full parent width
            height: "auto", // keep aspect ratio
            objectFit: "contain",
            display: "block",
            margin: "0 auto", // center horizontally
            paddingTop: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default Project;