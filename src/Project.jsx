import RandomColorDiv from "./RandomColorDiv";
import Carousel from "./Carousel";

function Project({ source, elements, elementsNames, title, link, desc }) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        border: "2px solid #dddddd8e",
        borderRadius: "8px",
      }}
    >
      <div style={{ margin: "0" }}>
        <div
          style={{
            marginTop: "5px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ marginBottom: "4px", marginTop: "0" }}>
            <a
              href={link}
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              {title}
            </a>
          </h4>

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
              <div><RandomColorDiv key={i} text={text} />
                <p style={{
                  margin: "8px 0 12px 0",
                  fontSize: "0.75rem",
                  lineHeight: "1.5",
                  color: "#eee", // closer to white
                  fontWeight: "300",
                }}>{elementsNames[i]}</p></div>              
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