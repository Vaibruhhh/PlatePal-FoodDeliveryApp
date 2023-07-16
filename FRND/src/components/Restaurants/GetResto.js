import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Dine from "../../assets/images/Dine-Out.png";


const GetResto = () => {
    const navigate=useNavigate()
    const [data, setData] = useState([])
    const fun1 = () => {
        fetch('http://localhost:3035/restaurants')
            .then((res) => res.json())
            .then((muskan) => {
                setData(muskan)
                console.log(muskan, "data")

            }).catch((err) => {
                console.log(err, 'err')
            })

    }
    const fun4=(resId)=>{
        navigate(`/${resId}`)
        console.log(resId,"click id ")

    }
    useEffect(() => {
        fun1()

    }, [])
    return (
        <div>
            <h3> Get all restaurant</h3>
            {
                data.map((res,index) => {
                    const id=res._id
                    console.log(id,'iddddddddddd')
                    return (
                        <>
                            <div className='card' onClick={()=>fun4(id)}>
                                <div className="cardImg">
                                    <img src={Dine} alt="dineImg" />
                                    <h1>{res.name}</h1>
                                    <span>{res.city}
                                    {/* <Link> add product</Link> */}
                                    </span>
                                </div>

                            </div>

                        </>
                    )

                })
            }
        </div>
    )
}

export default GetResto