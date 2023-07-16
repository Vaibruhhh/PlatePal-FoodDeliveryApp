import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Header from './Header/Header'
const SignUp = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passWord: ""
  })
  //    const [data,setData]=useState([])
  const fun1 = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
    console.log(input, 'rrrrrrrrrrrr')
  }
  //  connect to server
  const handelChange = () => {
    fetch('http://localhost:3036/register', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(input)
    }).then(() => {
      console.log('chal gya')
      navigate('/login')

      // navigate('/login')
    }).catch((err) => {
      console.log(err, "err")

    })
  }
  return (
    <>
      <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
        <form className='w-50 m-auto border bg-dark border-success rounded'>
          <div className="m-3 mt-5">
            <input type='text' className="form-control" onChange={fun1} name='firstName' value={input.firstName} placeholder='Enter your name ' />
            <br /></div>
          <div className="m-3">
            <input type='text' className="form-control" onChange={fun1} name='lastName' value={input.lastName} placeholder='Enter your lastName ' />
            <br /></div>
          <div className="m-3">
            <input type='email' className="form-control" onChange={fun1} name='email' value={input.email} placeholder='Enter your email ' />
            <br /></div>
          <div className="m-3">
            <input type='password' className="form-control" onChange={fun1} name='passWord' value={input.passWord
            } placeholder='password' />
            <br /></div>
            <div className="m-3">
            <button className=" btn btn-success" onClick={handelChange} >Submit</button>
          </div>
          <div className="m-3">
            <Link to='/login' >login </Link>
            </div>
        </form>
      </div>
    </>
  )
}

export default SignUp