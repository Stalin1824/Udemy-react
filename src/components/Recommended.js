import two from  "../assets/images/c4.jpg"
import three from "../assets/images/c3.jpg"
import four from  "../assets/images/c2.jpg"
import five from "../assets/images/c1.jpg"


function Recommended(){

    return(    <div class="recommended">
    <h1 class="recommended__title">Recommended for you</h1>
    <p>Pick the best fit</p>
    <div class="recommended__container">
        <div class="course-card">
            <img src={two}></img>
            <h3>2023 Pyhton Data Visualisation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={three}></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={four}></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={five}></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
            
   
   
        </div>
    </div>
    </div>)
   
   }
   export default Recommended