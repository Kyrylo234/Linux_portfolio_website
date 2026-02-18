import Project from "../../../Project"

import threeJS from "../../../assets/gif/threeJS.gif"



function ThreeJSProject() {
    return (
      <Project source={[threeJS]} elements={[]} elementsNames={["Dart", "Flutter", "Drift"]} title={"3D Touge Chimer Shop"} desc={"Interactive 3D shop showcasing my product, built with Three.js and using Stripe payment processing."}/>
    )
  }

export default ThreeJSProject