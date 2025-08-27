import RandomColorDiv from "./RandomColorDiv";
import Carousel from "./Carousel";
function Project({source, elements, title, link}) {  
    return (
      <div style={{ margin: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <div style={{marginTop:'20px'}}>
          <h4 style={{marginBottom: "5px"}}><a href={link} style={{ color: "inherit", textDecoration: "underline" }}>{title}</a></h4>
          <Carousel
  images={source}
  imgStyle={{
    maxHeight: "70vh",   // don’t exceed 70% of screen height
    width: "100%",       // ✅ take full parent width
    height: "auto",      // ✅ keep aspect ratio
    objectFit: "contain",
    display: "block",    // ✅ remove inline spacing
    margin: "0 auto",    // ✅ center horizontally
    paddingTop: "10px",
  }}
/>
          <div style={{ marginTop: "10px",padding: "5px",border: "1px solid #ddd", borderRadius: "8px" }}>
            {elements.map((text, i) => (
              <RandomColorDiv key={i} text={text}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Project