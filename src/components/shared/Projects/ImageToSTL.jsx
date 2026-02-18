import Project from "../../../Project"

import photo1 from "../../../assets/images/photo1.png"
import photo2 from "../../../assets/images/photo2.png"

import DartSVG from "../../../DartSVG"
import DriftSVG from "../../../DriftSVG"
import FlutterSVG from "../../../FlutterSVG"

function ImageToSTL() {
    return (
      <Project source={[photo1, photo2]} elements={[<DartSVG/>, <FlutterSVG/>, <DriftSVG/>]} elementsNames={["Dart", "Flutter", "Drift"]} title={"Image To STL Converter"} link={"https://github.com/Kyrylo234/image_to_stl"} desc={"A tool that converts 2D images into 3D printable STL files."}/>
    )
  }

export default ImageToSTL