import PDFViewer from "../../shared/PDFViewer"
function CVPhoneApplication() {  
      return (
        <div className="PhoneApplication" style={{paddingTop:"20px", paddingBottom:"60px"}}>
          <a href="/assets/Kyrylo_Postupalenko_CV.pdf" download="cv" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "8px 14px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#444",
                color: "white",
                cursor: "pointer"
            }}>Download my CV</button>
          </a>
          <PDFViewer file="/assets/Kyrylo_Postupalenko_CV.pdf" />
        </div>
      )
    }
    
    export default CVPhoneApplication