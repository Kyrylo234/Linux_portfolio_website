import Lancaster from "../../../assets/Lancaster.png"
function Education() {
    return (
        <>
        <div className="fiftyPix" style={{ marginTop: "10%" }}>
        <img src={Lancaster} style={{width:'100px', height:'100px'}} alt="Lancaster University Logo"></img>
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
      <div className="fiftyPix" style={{ marginBottom: "10%" }}>
        <h3>A-Levels</h3>
        <h4>Economics(A), Maths(B), Physics(B)</h4>        
      </div>
        </>
        
      
    );
  }
  
  export default Education;