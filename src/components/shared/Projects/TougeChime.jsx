import Project from "../../../Project"

import Photo1 from "../../../assets/images/TougeChime/chime.webp"





function PowerbanderApp() {
    return (
      <Project source={[Photo1]} elements={[<img src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-ESP32-008000?style=flat&logo=espressif&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Bluetooth_LE-0082FC?style=flat&logo=bluetooth&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]}
      title={"Touge Chime"} link={"https://powerbander.tech"} desc={"Engineered a modern recreation of the iconic Toyota AE86 mechanical speeding chime. Documented progress on social media to build launch traction."}/>
    )
  }

export default PowerbanderApp