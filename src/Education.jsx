import Lancaster from "./assets/Lancaster.png"
function Education() {
    return (
        <>
        <div className="fiftyPix">
        <img src={Lancaster} style={{width:'100px', height:'100px'}}></img>
        <h3>Lancaster University</h3>
        <h4>Grade: First Class</h4>
        <h5>Hons BSc Computer Science</h5>
        
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