import Project from "../../../Project"

import carApp1 from "../../../assets/carApp1.png"
import carApp2 from "../../../assets/carApp2.png"
import carApp3 from "../../../assets/carApp3.png"
import carApp4 from "../../../assets/carApp4.png"

import DartSVG from "../../../DartSVG"
import DriftSVG from "../../../DriftSVG"
import FlutterSVG from "../../../FlutterSVG"

function LinuxPortfolioWesbiteProject() {
    return (
      <Project source={[carApp1, carApp2, carApp3, carApp4]} elements={[<DartSVG/>, <FlutterSVG/>, <DriftSVG/>]} elementsNames={["Dart", "Flutter", "Drift"]} title={"3D Touge Chimer Shop"} desc={"Interactive 3D shop showcasing my product, built with Three.js and using Stripe payment processing."}/>
    )
  }

export default LinuxPortfolioWesbiteProject