import Project from "../../../Project"

import Photo1 from "../../../assets/images/ImageToSTL/photo1.png"
import Photo2 from "../../../assets/images/ImageToSTL/photo2.png"




function ImageToSTL() {
    return (
      <Project source={[Photo1, Photo2]} elements={[<img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-Pillow-FFD43B?style=flat&logo=pillow&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-NumPy-013243?style=flat&logo=numpy&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-Trimesh-FF6600?style=flat&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-Gradio-1DA1F2?style=flat&logo=gradio&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]} 
      title={"Image To STL Converter"} desc={"A tool that converts 2D images to 3D STL files using Python, Pillow, Trimesh, and Gradio."}/>
    )
  }

export default ImageToSTL