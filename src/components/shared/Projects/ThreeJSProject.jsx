import Project from "../../../Project"

import threeJS from "../../../assets/gif/threeJS.gif"

import DartSVG from "../../../DartSVG"
import DriftSVG from "../../../DriftSVG"
import FlutterSVG from "../../../FlutterSVG"

function ThreeJSProject() {
    return (
      <Project source={[threeJS]} elements={[<DartSVG/>, <FlutterSVG/>, <DriftSVG/>]} elementsNames={["Dart", "Flutter", "Drift"]} title={"3D Touge Chimer Shop"} desc={"Interactive 3D shop showcasing my product, built with Three.js and using Stripe payment processing."}/>
    )
  }

export default ThreeJSProject