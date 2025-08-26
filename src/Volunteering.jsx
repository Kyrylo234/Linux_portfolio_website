import Image from './assets/IMG_8472.JPG'
function Volunteering() {
    return (
      <div className="fiftyPix" style={{ display: 'flex', flexDirection: 'column'}}>
      <h1 style={{ marginTop: "0"}}>Volunteering</h1>
      <h4 style={{ marginTop: "0" , marginBottom: "0"}}>Help Deliver Aid To Ukraine</h4>
      <p>I coordinated and was part of a team of volunteers who were tasked with packing and loading humanitarian aid onto the lorries. Additionally, I helped raise funds by running the charity's social media. <br/> Instagram:@helpdeliveraidtoukraine</p> 
      <img src={Image} style={{ width: '100%', height:'auto'}}></img>
    </div>
    );
  }
  
  export default Volunteering;