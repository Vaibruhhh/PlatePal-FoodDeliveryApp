import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/platepal-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.webp";
// import "../Card/Card.scss";
import Dine from "../../assets/images/Dine-Out.png";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
const Header = () => {
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')
  // search api data

  const apiFunction = (SearchData) => {

    console.log(SearchData, 'SEARCHdATA')
    fetch(`http://localhost:3036/restaurants/search?q=${SearchData}`).
      then((res) => {
        return res.json()

      }).then((data) => {
        setSearch(data)
        console.log(data, "search data ")
      })

  }
  // api call here

  const serchFunction = (e) => {

    //  apiFunction(e.target.value)
    setInput(e.target.value)

  }
  useEffect(() => {
    apiFunction(input)
  }, [input])


  //  api fetch get all retautants
  const [data, setData] = useState([{

  }])
  let uniqueCities = [];
  data.forEach((d) => {
    if (!uniqueCities.includes(d.city)) {
      uniqueCities.push(d.city);
    }
  })
  const fetchData = () => {
    fetch('http://localhost:3036/restaurants').then((resMeta) => {
      return resMeta.json()

    }).then((data) => {
      console.log(data, "data in functions")
      setData(data)

    }).catch((err) => {
      console.log(err, "errrrrrrr")

    })

  }
  useEffect(() => {
    fetchData()

  }, [])


  const navigate = useNavigate()
  console.log(search, "search")
  const [open, setOpen] = useState(false);
  const obj = localStorage.getItem('myInfo')
  const userObject = JSON.parse(obj)

  const fun2=(id)=>{
    navigate(`/resto/${id}`)
    console.log(id,"idpRODUCT")

  }

  if (userObject) {

    return (
      <>
        <div className="header">
          <nav>
          <div id="fl">
            <img src="https://img.icons8.com/ios/50/000000/p-key.png" alt="" id="image"/>
              <span id="fsize">Home</span>
          </div>
            <div className="right">
            <span id="pad">Get the App</span>
              <span id="pad"><Link to='/addres'>Add restaurants</Link></span>
              <span><h2 id="hiname">Welcome, {userObject.userData.firstName}</h2></span>
              <button id="bttn" onClick={() => {

                localStorage.removeItem('myInfo')
                navigate('/')
              }}>LogOut</button>

            </div>
          </nav>
          <div className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
          </div>
          {open && (
            <div className="sideMenu">
              <img src={blackLogo} alt="logo" />
              <div className="innerMenu">
                <span>Investor Relations</span>
                <span>  <Link to='/addres'>Add restaurants </Link></span>
                <span>Log In</span>
                {/* <span> <Link to ='/signup '> SignUp</Link></span> */}
                <span>Sign Up</span>
              </div>
            </div>
          )}
          <div className="headerContent">
            {/* <img src={Logo} alt="logo" /> */}
            <div id="abc">PlatePal</div>
            <h3>Discover the best food & drinks in your city.</h3>
            <div className="input">
              <select>
                {
                  uniqueCities.map((input) => {

                    console.log(input, "rupesh")
                    return (
                     <>    <option value={input}>{input}</option>
                      </>
                    )

                  })
                }
              </select>
              <input type="text" name="name" value={input} onChange={serchFunction} placeholder="Search for restaurant,  cuisine or a dish" />

            </div>

          </div>
        </div>
        <div>
          <div className="search">
            {search.length != 0 && input != 0 && (
              <div className="dataResult">
                {search.slice(0, 15).map((value, key) => {
                  const id=value._id
                  console.log(value,"cityyyyyyyyyyyyyyyyy")

                  return (
                    <>
                <button onClick={()=>fun2(id)}>
                        <CardProduct    value={value} />
                        </button>
                       
                    </>
                  );
                })}
              </div>
            )}
          </div>


        </div>
      </>
    );
  }

  return (
    <div className="header">
      <nav>
        <span>Get the App</span>
        <div className="right">
          <span>Investor Relations</span>
          <span>  <Link to='/addres'>Add restaurants </Link></span>

          {/* <span><h2>hii,{userObject.userData.firstName}</h2></span> */}
          <span> <Link to='/login'> Log in</Link></span>
          <span> <Link to='/signup '> SignUp</Link></span>
          {/* {
            open?<h2> hii,{obj.firstName}</h2>:''
          } */}

        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restaurants</span>
            <span>Log In</span>
            {/* <span> <Link to ='/signup '> SignUp</Link></span> */}
            <span>Sign Up</span>
          </div>
        </div>
      )}
      <div className="headerContent">
        {/* <img src={Logo} alt="logo" /> */}
        <div id="abc">PlatePal</div>
        <h3>Discover the best food & drinks in your city.</h3>
        <div className="input">
          <select name="" id="">
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          |
          <input type="text" name="name" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search for restaurant,  cuisine or a dish" />
        </div>
      </div>
    </div>
  );


  //  if(obj){
  //   setOpen(true)

  //  }




};

export default Header;
