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
      <Project source={[carApp1, carApp2, carApp3, carApp4]} elements={[<DartSVG/>, <FlutterSVG/>, <DriftSVG/>]} elementsNames={["Dart", "Flutter", "Drift"]} title={"Linux Portfolio Website"} desc={"A responsive portfolio website built with React and styled with CSS."}/>
    )
  }

export default LinuxPortfolioWesbiteProject