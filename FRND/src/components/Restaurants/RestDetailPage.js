import React,{useEffect, useState} from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom';
const RestDetailPage = () => {
    let { id } = useParams();
    const [data,setData]=useState([])
    const fun1=()=>{
        fetch(`http://localhost:3036/restaurants/${id}`).
        then((res)=>res.json()).
        then((data)=>{
          console.log(data,"data")
          setData([data])
        }).catch((err)=>{
          console.log(err,"err")

        })
    }
    useEffect(()=>{

  fun1()
    },[])

  return (

    <div>
      {
        data.map((restroData)=>{
          console.log(restroData,'rrrrrrrrrrrrr')
          return(
            <>
            <h2>{restroData.name}</h2>
            <h4>{restroData.city}</h4>
            <Link to={`/resto/${id}/addproduct`}> addProduct</Link>
            {/* <button>add Product</button> */}

            </>
          )

        })
      }
    </div>
  )
}

export default RestDetailPage