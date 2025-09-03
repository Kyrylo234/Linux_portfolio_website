import PDFViewer from "./PDFViewer"
function CVApplication() {  
      return (
        <div className="PhoneApplication" style={{paddingTop:"20px", paddingBottom:"60px"}}>
          <PDFViewer file="/assets/Kyrylo_Postupalenko_CV.pdf" />
        </div>
      )
    }
    
    export default CVApplication