import AboutMe from "../../shared/AboutMe/AboutMe";
import Education from "../../shared/AboutMe/Education";
import Hobbies from "../../shared/AboutMe/Hobbies";
import Volunteering from "../../shared/AboutMe/Volunteering";
function AboutMePhoneApplication() {  
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
    
    export default AboutMePhoneApplication