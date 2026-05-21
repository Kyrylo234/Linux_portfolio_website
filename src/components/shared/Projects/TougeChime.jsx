import Project from "../../../Project"

import Photo1 from "../../../assets/images/TougeChime/chime.webp"





function PowerbanderApp() {
    return (
      <Project source={[Photo1]} elements={[<img src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-ESP32-008000?style=flat&logo=espressif&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Bluetooth_LE-0082FC?style=flat&logo=bluetooth&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]}
      title={"Touge Chime"} link={"https://powerbander.tech"} desc={"A mechanical chime device recreating the iconic Toyota AE86 'speeding chime', powered by an ESP32. Designed, built, and sold independently — from firmware to Bluetooth app to 3D store."}/>
    )
  }

export default PowerbanderApp