import React from 'react'
import product from '../product'

const Image = () => {
  return (
    <div>
        <img src={product.imgURL} alt="shoes"  width="200px" height="200px"/>
    </div>
  )
}

export default Image
