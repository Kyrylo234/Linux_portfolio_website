import './App.css'
function HomeButton({ setApp1Visible }) { 
  const handleClick = () => {
    setApp1Visible();
  }; 

  return (
    <div className="HomeButton" onClick={handleClick}>
      <div className="Circle">
        <div className="Square"></div>
      </div>
    </div>
  );
}

export default HomeButton;