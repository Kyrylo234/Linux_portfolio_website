import Image from './assets/IMG_8472.JPG'
import truckImage from './assets/IMG_5593.JPG'
import truckImage2 from './assets/truck2.JPG'
import truckImage3 from './assets/IMG_5576.JPG'
import packing from './assets/packing.png'
import packing2 from './assets/packing2.png'


import Carousel from './Carousel';
function copyFunction(event){
  navigator.clipboard.writeText("helpdeliveraidtoukraine");
}

function Volunteering() {
    return (
      <div className="fiftyPix" style={{ display: 'flex', flexDirection: 'column'}}>
      <h1 style={{ marginTop: "0"}}>Volunteering</h1>
      <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
      <h3 style={{ marginTop: "0" , marginBottom: "0"}}>Help Deliver Aid To Ukraine</h3>
      <Carousel images={[Image, packing, packing2]} imgStyle={{             
            maxHeight: "70vh", maxWidth: "90vw", height: "auto", width: "auto" ,              
            paddingTop:'10px',   
            scrollSnapAlign: "start", 
            objectFit: "contain",         
            flex: "0 0 100%"}}/>     
      <h5>I coordinated and was part of a team of volunteers who were tasked with packing and loading humanitarian aid onto the lorries. Additionally, I helped raise funds by running the charity's social media.</h5> 
      <h4 style={{ marginBottom: "0"}}>Instagram:</h4>
      <div style={{ 
              display: "flex", 
              justifyContent: "center", // center horizontally
              alignItems: "center", 
              gap: "8px", 
              marginBottom: "16px" 
            }}>
              <a  href="https://www.instagram.com/helpdeliveraidtoukraine/" style={{ textDecoration: "none", color: "inherit" }}>@helpdeliveraidtoukraine</a>
              <button 
                onMouseDown={copyFunction}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#008080",
                  color: "white",
                  cursor: "pointer"
              }}>Copy</button>
        </div>
      <h4 style={{ marginBottom: "0"}}>Features on the News:</h4>
      <p><a  href="https://media.fredolsencruises.com/pressreleases/suffolk-based-fred-olsen-companies-fund-lorry-to-send-team-donations-to-ukraine-3167273" style={{color: "inherit" }}>Suffolk-based Fred. Olsen companies fund lorry to send team donations to Ukraine</a></p>
      <p><a  href="https://www.farmersguide.co.uk/rural/farm-turns-unused-shed-into-sorting-centre-for-ukrainian-donations/" style={{color: "inherit" }}>Farm turns unused shed into sorting centre for Ukrainian donations</a></p>
      <p><a  href="https://www.gazette-news.co.uk/news/19984464.war-ukraine-spurs-volunteers-extraordinary-lengths/" style={{color: "inherit" }}>War in Ukraine spurs volunteers to extraordinary lengths</a></p>
      <p><a  href="https://www.ipswichstar.co.uk/news/21883950.three-lorries-goods-heading-ukraine-overwhelming-response/" style={{color: "inherit" }}>Three lorries of goods heading to Ukraine after 'overwhelming' response</a></p>
      </div>
      <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <h3 style={{ marginTop: "0" , marginBottom: "0"}}>Ukro-Saxons</h3>
        <Carousel images={[truckImage, truckImage2, truckImage3]} imgStyle={{             
            maxHeight: "70vh", maxWidth: "90vw", height: "auto", width: "auto" ,              
            paddingTop:'10px',   
            scrollSnapAlign: "start", 
            objectFit: "contain",         
            flex: "0 0 100%"}}/>     
        <h5>Helping to deliver 4x4’s packed with humanitarian aid to Ukraine.</h5> 

      </div>

    </div>
    );
  }
  
  export default Volunteering;