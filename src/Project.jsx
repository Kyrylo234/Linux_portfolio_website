import RandomColorDiv from "./RandomColorDiv";
function Project({source, elements}) {  
    return (
      <>
      <div style={{marginTop:'20px'}}>
        <img src={source} style={{width:'90vw', height:'auto'}} alt=""></img>
        {elements.map((text, i) => (
        <RandomColorDiv key={i} text={text}/>
      ))}
      </div>
      </>
    )
  }
  
  export default Project