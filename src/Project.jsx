import RandomColorDiv from "./RandomColorDiv";
import Carousel from "./Carousel";
function Project({source, elements, title}) {  
    return (
      <div style={{ margin: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <div style={{marginTop:'20px'}}>
          <h4 style={{marginBottom: "5px"}}>{title}</h4>
          <Carousel images={source} imgStyle={{             
            maxHeight: "70vh", maxWidth: "90vw", height: "auto", width: "auto" ,              
            paddingTop:'10px',   
            scrollSnapAlign: "start", 
            objectFit: "contain",         
            flex: "0 0 100%"}}/>  
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