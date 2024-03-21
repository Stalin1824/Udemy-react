
import three from "../assets/images/c3.jpg"
import four from  "../assets/images/c2.jpg"
import five from "../assets/images/c1.jpg"
import six from "../assets/images/c5.jpg"
import seven from "../assets/images/c6.jpg"
import eight from "../assets/images/c7.jpg"
import nine from "../assets/images/c8.jpg"
import ten from "../assets/images/c9.jpg"
function Popular(){
    return(      <div class="popular">
    <h1 class="popular__title">Most Popular</h1>
    <p class="popular__subtitle">Pick the best fit</p>
    <div class="popular__container">
        <div class="course-card">
            <img src={ten}></img>
            <h3>2023 Pyhton Data Visualisation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={nine}></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={eight}></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={seven}></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del>
            </p>
  
  
        </div>
  
        <div class="course-card">
            <img src={six}></img>
            <h3>2023 Pyhton Data Visualisation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={five}></img>
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
            <img src={three}></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499<del>1999</del>
            </p>
  
  
        </div>
    </div>
    </div>)
  
  }
  export default Popular