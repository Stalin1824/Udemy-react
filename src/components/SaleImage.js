import one from "../assets/images/sale-image.jpg"
function SaleImage(){

    return(    <div className="close">
    <div className="sale-image"><img src={one} alt="Sale image"></img></div>
    <div className="sale-image__offer">
  <h1>Udemy Flash Sale! 24 hours to save.</h1>
  <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn </p>
    </div>
  </div>)
  }
export default SaleImage  