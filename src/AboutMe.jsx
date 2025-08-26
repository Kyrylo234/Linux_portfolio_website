import CV from './assets/Kyrylo_Postupalenko_CV.pdf'
import RandomColorDiv from './RandomColorDiv';
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
        <RandomColorDiv text="Java"/>
        <RandomColorDiv text="JavaScript"/>
        <RandomColorDiv text="CSS"/>
        <RandomColorDiv text="React.js"/>
        <RandomColorDiv text="Python"/>
        <RandomColorDiv text="C"/>
        <h4>Languages</h4>
        <RandomColorDiv text="English"/>
        <RandomColorDiv text="Ukrainian"/>
        <RandomColorDiv text="Russian"/>
        <h4>Hobbies</h4>
        <RandomColorDiv text="Volleyball"/>
        <RandomColorDiv text="Fitness"/>
        <RandomColorDiv text="Video Production"/>
        <RandomColorDiv text="Travelling"/>
        <RandomColorDiv text="Cars"/>
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