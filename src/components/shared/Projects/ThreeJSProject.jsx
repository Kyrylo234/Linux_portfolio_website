import Project from "../../../Project"

import threeJS from "../../../assets/images/ThreeJSWebsite/threeJS.jpg"



function ThreeJSProject() {
    return (
      <Project source={[threeJS]} elements={[    <img src="https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
    ,<img src="https://img.shields.io/badge/-Stripe-635BFF?style=flat&logo=stripe&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
    ,<img src="https://img.shields.io/badge/-Blender-F5792A?style=flat&logo=blender&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
    ,<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }}/>
    ,<img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
    ,<img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
    ,<img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]} elementsNames={["Dart", "Flutter", "Drift"]} title={"3D Touge Chimer Shop"} desc={"Interactive 3D shop showcasing my product, built with Three.js and using Stripe payment processing."}/>
    )
  }

export default ThreeJSProject