import Lancaster from "./assets/Lancaster.png"
function Education() {
    return (
        <>
        <div className="fiftyPix">
        <img src={Lancaster} style={{width:'100px', height:'100px'}}></img>
        <h2><a 
    href="https://www.lancaster.ac.uk" 
    style={{ textDecoration: "none", color: "inherit" }}
  >
    Lancaster University
  </a></h2>
        <h4 style={{ margin: "10px 0" }}>Bachelor of Science</h4>
        <h4 style={{ margin: "10px 0" }}>First Class Honours</h4>
        <p style={{margin: "10px 0" }}>in</p>
        <h4 style={{margin: "10px 0" }}>Computer Science</h4>
        
        
      </div>
      <div className="fiftyPix">
        <h3>A-Levels</h3>
        <h4>Economics, Maths, Physics</h4>
        <h5>Grade: A, B, B</h5>
        
      </div>
        </>
        
      
    );
  }
  
  export default Education;