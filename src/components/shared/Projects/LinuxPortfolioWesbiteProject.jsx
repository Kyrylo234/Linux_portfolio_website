import Project from "../../../Project"

import Image1 from "../../../assets/images/Website/website1.png"
import Image2 from "../../../assets/images/Website/website2.png"
import Image3 from "../../../assets/images/Website/website3.png"
import Image4 from "../../../assets/images/Website/website4.png"



function LinuxPortfolioWesbiteProject() {
    return (
      <Project source={[Image1, Image2, Image3, Image4]} elements={[]} elementsNames={["Dart", "Flutter", "Drift"]} title={"Linux Portfolio Website"} desc={"A responsive portfolio website built with React and styled with CSS."}/>
    )
  }

export default LinuxPortfolioWesbiteProject