import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Card/Card.scss'
import Online from "../../assets/images/Online-Food.png";
import NavBar from '../../CartNav/NavBar';
const AddproductForm = () => {
  let { id } = useParams();
  const [data, setData] = useState([])
  const fun1 = () => {
    fetch(`http://localhost:3036/restaurants/${id}`).
      then((res) => res.json()).
      then((data) => {
        setData([data])
      }).catch((err) => {
        console.log(err, "err")
      })
  }
  useEffect(() => {
    fun1()
  }, []) 

  // add to cart function
  const [singleCardData,setSingleCardData]=useState([])
  const addtoCart=(ProductId,arrData)=>{

  const newPoduct=  arrData.filter((d)=>d._id===ProductId)
  setSingleCardData(newPoduct)
    console.log(newPoduct,"arrayData")
   


  }

  return (
    <div>

      <div>
        <NavBar/>
      </div>
      {
        data.map((restroData) => {
          return (
            <>
              <h2>{restroData.name}</h2>
              <h4>{restroData.city}</h4>
              <div className='card'>
                {restroData.products.map((item) => {
                  const arr=restroData.products
                  // console.log(arr,"arr produvt")
                  const id=item._id
                  // console.log(item, "item")
                  return (<>
                      <div>
                    <div className="cardImg">
                      <img src={Online} alt="onlineImg" />
                      <h1>{item.name}</h1>
                      <span>{item.price}</span>
                    </div>
                 {/* {
                  item && <div> <button>incre</button><button>incre</button></div>
                 } */}
                    <button onClick={()=>addtoCart(id,arr)}> Add to cart</button>
                    </div>
                  </>
                  )
                })
                }
              </div>
            </>
          )

        })
      }
    </div>
  )
}

export default AddproductForm