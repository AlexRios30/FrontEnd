import React from 'react'
import styles from "./HomeUser.css"
import { CardParking } from '../../../Layouts/CardParking/CardParking'

export const HomeUser = () => {
  return (
    <div id='HomeUser'>
        <header className='headerUser'>
            <div className="contIcon">
                <i className='icon-user'></i>
            </div>
            <h3 id='nameUser'>Nombre Usuario</h3>
            <input placeholder='Buscar Parqueadero' type="text" name="" id="inputSearch" />

            <i className='icon-bell'></i>
            <img className='logoSp' src="https://res.cloudinary.com/miguelgo205/image/upload/v1682989733/SpaceParking/Logosolo.png" alt="" />
        </header>

        <main id='mainHomeUser'>
          <div className="containerParkings">
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169573/SpaceParking/Parking-rafiki_rhgxqq.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1679893318/SpaceParking/logoParking_uam7is.jpg" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169574/SpaceParking/Parking-bro_pjjqbt.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169573/SpaceParking/Parking-pana_m8lpb8.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1679893318/SpaceParking/logoParking_uam7is.jpg" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169573/SpaceParking/Parking-rafiki_rhgxqq.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169574/SpaceParking/Parking-bro_pjjqbt.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1679893318/SpaceParking/logoParking_uam7is.jpg" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169573/SpaceParking/Parking-pana_m8lpb8.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169573/SpaceParking/Parking-rafiki_rhgxqq.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169574/SpaceParking/Parking-bro_pjjqbt.png" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1679893318/SpaceParking/logoParking_uam7is.jpg" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1679893318/SpaceParking/logoParking_uam7is.jpg" />
            <CardParking priceParking="800" adressParking="MZ 3 #33 B/la cejita" nameParking="Parqueadero la cejita" urlImage="https://res.cloudinary.com/miguelgo205/image/upload/v1683169574/SpaceParking/Parking-bro_pjjqbt.png" />
          



          </div>            
        </main>
    </div>
  )
}
