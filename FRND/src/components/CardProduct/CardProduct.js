import React from 'react'
import Dine from "../../assets/images/Dine-Out.png";
import "./CardProduct.css"

const CardProduct = (props) => {
  const { name, city } = props.value

  // const
  // console.log(props.value,"cardPage")
  return (
    <>
      <div className='fl'>
        <img src={Dine} className='cardpro' alt="dineImg" height="80px" width="100px" />
        <span className='abc'>
          <h2>{name}</h2>
          <h3 className="cardCity">{city}</h3>
        </span>
      </div>
    </>
  )
}

export default CardProduct