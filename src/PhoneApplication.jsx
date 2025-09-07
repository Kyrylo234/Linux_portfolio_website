import AboutMe from "./AboutMe";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Volunteering from "./Volunteering";
function PhoneApplication() {  
      return (
        <>  
            <div className="PhoneApplication">
              <div className="AboutMeDiv"><AboutMe/></div>
              <div className="EducationDiv"><Education/></div>
              <div className="VolunteeringDiv"><Volunteering/></div>
              <div className="VolunteeringDiv"><Hobbies/></div>
            </div>
        </>
      )
    }
    
    export default PhoneApplication