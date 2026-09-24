import Lancaster from "../../../assets/Lancaster.webp"
import StAndrews from "../../../assets/stAndrews.webp"
function Education() {
    return (
        <>
        <div className="fiftyPix" style={{ marginTop: "10%", marginBottom: "10%" }}>

        <img src={StAndrews} style={{width:'160px', height:'160px'}} alt="St Andrews University Logo"></img>
        <h2><a 
    href="https://www.st-andrews.ac.uk" 
    style={{ textDecoration: "none", color: "inherit" }}
  >
    University of St Andrews
  </a></h2>
        <p style={{margin: "0" }}>Studying</p>
        <h4 style={{ margin: "10px 0" }}>Master of Science</h4>
        <p style={{margin: "10px 0" }}>in</p>
        <h4 style={{margin: "10px 0 50px 0px" }}>Computer Science</h4>


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
        </>
        
      
    );
  }
  
  export default Education;