import Project from "../../../Project"

import Photo1 from "../../../assets/images/PowerbanderApp/TougeChimeApp.webp"





function PowerbanderApp() {
    return (
      <Project source={[Photo1]} elements={[<img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Bluetooth_LE-0082FC?style=flat&logo=bluetooth&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Android-3DDC84?style=flat&logo=android&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-iOS-000000?style=flat&logo=apple&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]}
      title={"Powerbander App"} link={"https://apps.apple.com/us/app/powerbander/id6762231997"} desc={"An Bluetooth companion App to control the Touge Chime device, built with Flutter"}/>
    )
  }

export default PowerbanderApp