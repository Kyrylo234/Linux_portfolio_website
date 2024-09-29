function HomeButton({setApp1Visible}) { 
  const handleClick = () => {
    setApp1Visible();
    } 
    return (
      <>
        <div className="HomeButton" onClick={handleClick}><div className="Circle"><p>Home</p></div></div>
      </>
    )
  }
  
  export default HomeButton