import React,{useState} from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom';


const AddProduct = () => {
    let { id } = useParams();
    console.log(id,"iddddadddres")
    const [data,SetData]=useState({
        name:"",
        price:0,
        desc:""

    })
    const hadleChange=(e)=>{
        const {name,value}=e.target
        SetData({
            ...data,[name]:value
        })
        console.log(data,"rrrrr")

    }
    const Submit=()=>{
         fetch(`http://localhost:3035/restaurants/${id}/products`,{
            method:"POST",
            headers:{
                'Content-type':'application/json'},
                body:JSON.stringify(data)

         }).then((res)=>{
            return res.json()

            // console.log(  res,'data chala gyya shayd mauj karo')


         }).then((resData)=>{
            console.log(  resData,'data chala gyya shayd mauj karo')


         })
         
         .catch((err)=>{
            console.log(err,'err')

         })

    }
  return (
    <div>
        <input type="text"  onChange={hadleChange} name='name' value={data.name} placeholder='Name'/>
        <br/>
        <input type="Number" onChange={hadleChange} name='price' value={data.price} placeholder='price'/>
        <br/>
        <input type="text" onChange={hadleChange} name='desc' value={data.desc} placeholder=' desc'/>
        <br/>
        <button onClick={Submit}> send</button>


    </div>
  )
}

export default AddProduct