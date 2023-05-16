import React from 'react'
import { Img } from '../../UI/Img/Img';


export const CardParking = ({urlImage, nameParking, adressParking, priceParking}) => {
  return (
    <div className="cardParking">
      <Img styleImg="ImgParking" url={urlImage} />
      <h3 className='nameParking'>{nameParking}</h3>
      <p className='adressParking'>{adressParking}</p>
      <p className='priceParking'>${priceParking} COP hora</p>
    </div>
  )
}
