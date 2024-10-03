import CV from './assets/Kyrylo_Postupalenko_CV.pdf'
function AboutMe() {
  function generateRandColour(){
    let value = Math.floor(Math.random()*16777215).toString(16);
    if(value.length<=5){
      value+='0'
    }
    return value;
  }

  function copyFunction(event){
    navigator.clipboard.writeText("kyrylop2004@gmail.com");
  }

    return (
      <div className="fiftyPix">
        <h4>About Me</h4>
        <div className='DescriptionDiv'><p>A passionate and hardworking third year computer science student at Lancaster University. Seeking a graduate role in
        software engineering to further develop my skills in a practical environment whilst making a positive contribution to the
        organisation.</p>
        </div>
        <h4>Skills</h4>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Java</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>JavaScript</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>CSS</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>React.js</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Python</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>C</p></div>
        <h4>Languages</h4>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>English</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Ukrainian</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Russian</p></div>
        <h4>Hobbies</h4>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Volleyball</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Gym</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Video Production</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Travelling</p></div>
        <div style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>Cars</p></div>
        <h4>Contact Me</h4>
        <div className='Inline'>
          <h5>kyrylop2004@gmail.com</h5>
          <button onMouseDown={copyFunction}>Copy</button>
        </div>
        
        <a href={CV} download="Kyrylo_Postupalenko_CV">
          <button>Download my cv</button>
        </a>
      </div>
    );
  }
  
  export default AboutMe;