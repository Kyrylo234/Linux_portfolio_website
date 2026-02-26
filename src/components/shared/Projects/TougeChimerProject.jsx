import Project from "../../../Project"

import Photo1 from "../../../assets/images/TougeChimer/TougeChimerApp.png"





function TougeChimerProject() {
    return (
      <Project source={[Photo1]} elements={[<img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Bluetooth_LE-0082FC?style=flat&logo=bluetooth&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-Android-3DDC84?style=flat&logo=android&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
        ,<img src="https://img.shields.io/badge/-iOS-000000?style=flat&logo=apple&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]}
      title={"Touge Chimer app"} link={"https://github.com/Kyrylo234/CSPPT"} desc={"An App to control the Touge Chimer device through Bluetooth, built with Flutter"}/>
    )
  }

export default TougeChimerProject