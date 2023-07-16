
import "./app.scss";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import AddRes from "./components/AddRes";
import GetResto from "./components/Restaurants/GetResto";
import AddproductForm from "./components/Restaurants/AddproductForm";
import RestDetailPage from "./components/Restaurants/RestDetailPage";
import AddProduct from "./components/Restaurants/AddProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/resto" element={<GetResto/>}/>
        <Route  path="/:id" element= {<RestDetailPage/>}/>
        <Route  path="/resto/:id/addproduct" element= {<AddProduct />}/>
        <Route  path="/resto/:id" element={<AddproductForm/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addres" element={<AddRes/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
