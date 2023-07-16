import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:'',
        passWord:""
    })

    const fun1=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setData({...data,[name]:value})
        console.log(data,"data")

    }

    const handleChange=(e)=>{
        e.preventDefault()
    
        fetch('http://localhost:3036/login',{
            method:"POST",
            headers:{
              'Content-type':'application/json'},
              body:JSON.stringify(data)

        }).then((res)=>{
            return res.json()
            // console.log('chal gya login page',res.json())

        }).then((resData)=>{
            console.log(resData,"resData")
            localStorage.setItem('myInfo',JSON.stringify(resData.data))
            navigate('/')


        })
        .catch((err)=>{
            console.log('err',err)
        })

    }
  

    
  return (
    <div>
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
        <form className='w-50 m-auto border bg-dark border-success rounded'>
        <div className="m-3 mt-5">
            <input type='text' className="form-control" onChange={fun1} name='email' value={data.email} placeholder='enter your email'/></div>
            <div className="m-3">
            <input type="text" className="form-control" onChange={fun1} name='passWord' value={data.passWord} placeholder='Enter your password'/></div>
            <div className="m-3">
            <button className="btn btn-success" onClick={handleChange}> Submit</button>
            <br/></div>

            <NavLink to='/'>Sign in page</NavLink>
        </form>
        </div>
    </div>
  )
}

export default Login