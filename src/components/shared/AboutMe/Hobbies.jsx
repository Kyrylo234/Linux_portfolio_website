import car from '../../../assets/images/Hobbies/Cars/1.png'
import car2 from '../../../assets/images/Hobbies/Cars/rx7.png'
import travel1 from '../../../assets/images/Hobbies/Travelling/2.png'
import travel2 from '../../../assets/images/Hobbies/Travelling/3.png'
import travel3 from '../../../assets/images/Hobbies/Travelling/4.png'
import travel4 from '../../../assets/images/Hobbies/Travelling/5.png'
import travel5 from '../../../assets/images/Hobbies/Travelling/6.png'
import travel6 from '../../../assets/images/Hobbies/Travelling/7.png'
import volleyball from '../../../assets/images/Hobbies/Fitness/8.png'



import Carousel from '../../../Carousel';
function copyFunction(event){
  navigator.clipboard.writeText("kyry1o");
}

function Hobbies() {
    return (
      <div className="fiftyPix" style={{ display: 'flex', flexDirection: 'column'}}>
      <h1 style={{ marginTop: "0"}}>Hobbies</h1>
      <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <h3 style={{ marginTop: "0" , marginBottom: "0"}}>Cars/Video Production</h3>
        <div style={{ marginTop: "10px",padding: "5px",border: "1px solid #ddd", borderRadius: "8px" }}>
          <p
            style={{
              margin: "8px 0 12px 0",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              color: "#eee", // closer to white
              fontWeight: "300",
            }}
          >I restored a Mazda RX 7 FC which has been off the road since 1997!</p>
        </div>
      <Carousel
        images={[car, car2]}
        imgStyle={{
          maxHeight: "70vh",  // don’t exceed 70% of viewport height
          maxWidth: "90vw",   // don’t exceed 90% of viewport width
          width: "100%",      // fill container width
          height: "100%",     // fill container height
          paddingTop: "10px",
          scrollSnapAlign: "start",
          objectFit: "contain", // scale down without cropping
          flex: "0 0 100%",
        }}
      />   
      <h4 style={{ marginBottom: "0"}}>Instagram:</h4>
      <div style={{ 
              display: "flex", 
              justifyContent: "center", // center horizontally
              alignItems: "center", 
              gap: "8px", 
              marginBottom: "16px" 
            }}>
              <a  href="https://www.instagram.com/kyry1o/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>@kyry1o</a>
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
      </div>
      <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <h3 style={{ marginTop: "0" , marginBottom: "0"}}>Travelling</h3>
        <div style={{ marginTop: "10px",padding: "5px",border: "1px solid #ddd", borderRadius: "8px" }}>
          <p
            style={{
              margin: "8px 0 12px 0",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              color: "#eee", // closer to white
              fontWeight: "300",
            }}
          >I like to travel and explore new places.</p>
        </div>
        <Carousel
        images={[travel1, travel2, travel3, travel4, travel5, travel6]}
        imgStyle={{
          maxHeight: "70vh",  // don’t exceed 70% of viewport height
          maxWidth: "90vw",   // don’t exceed 90% of viewport width
          width: "100%",      // fill container width
          height: "100%",     // fill container height
          paddingTop: "10px",
          scrollSnapAlign: "start",
          objectFit: "contain", // scale down without cropping
          flex: "0 0 100%",
        }}
      />    
      </div>
       <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <h3 style={{ marginTop: "0" , marginBottom: "0"}}>Volleyball/Fitness</h3>
        <div style={{ marginTop: "10px",padding: "5px",border: "1px solid #ddd", borderRadius: "8px" }}>
          <p
            style={{
              margin: "8px 0 12px 0",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              color: "#eee", // closer to white
              fontWeight: "300",
            }}
          >I enjoy playing volleyball and to workout.</p>
        </div>
        <Carousel
        images={[volleyball]}
        imgStyle={{
          maxHeight: "70vh",  // don’t exceed 70% of viewport height
          maxWidth: "90vw",   // don’t exceed 90% of viewport width
          width: "100%",      // fill container width
          height: "100%",     // fill container height
          paddingTop: "10px",
          scrollSnapAlign: "start",
          objectFit: "contain", // scale down without cropping
          flex: "0 0 100%",
        }}
      />    
      </div>
    </div>
    );
  }
  
  export default Hobbies;