import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Popular from "./components/Popular"
import Topics from "./components/Topics"
import Recommended from "./components/Recommended"
import SaleImage from "./components/SaleImage"
import Categories from "./components/Categories"
function App(){

return(<div>

    <Navbar></Navbar>
    <Categories></Categories>
    <SaleImage></SaleImage>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
    </div>)



}
export default App