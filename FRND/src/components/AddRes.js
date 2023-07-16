import React,{useState} from 'react'
import { json,useNavigate } from 'react-router-dom'

const AddRes = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        name:'',
        city:''
    })
    const inputF=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    const fun1=()=>{
        console.log(data,"rrrrrrrrr")
        fetch('http://localhost:3036/restaurants',{
            method:"POST",
            headers:{
              'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            console.log('chala gya bhai')
            navigate('/')

        }).catch((err)=>{
            console.log(err,'err')

        })
    } 
  return (   
    <div>
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
        <form className='w-50 m-auto border bg-dark border-success rounded'>
        <div className="m-3 mt-5">
        <input type='text'className="form-control" onChange={inputF} name='name' value={data.name} placeholder='Name' />
        <br/>
        <input type='text' className="form-control" onChange={inputF} name='city' value={data.city} placeholder='City' />
        <br/>
        <button className="btn btn-success" onClick={fun1} >Add Restaurant</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default AddRes