function Project({source, elements}) {  
  function generateRandColour(){
    let value = Math.floor(Math.random()*16777215).toString(16);
    if(value.length<=5){
      value+='0'
    }
    return value;
  }
    return (
      <>
      <div style={{marginTop:'20px'}}>
        <img src={source} style={{width:'90vw', height:'auto'}} alt=""></img>
        {elements.map((text, i) => (
        <div key={i} style={{backgroundColor:'#'+generateRandColour()}} className="ColouredDiv"><p>{text}</p></div>
      ))}
      </div>
      </>
    )
  }
  
  export default Project