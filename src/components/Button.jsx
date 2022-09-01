import React from 'react'
import styles from '../styles/Global'

const Button = ({assetUrl, link}) => {
  return (
    <div 
      className={styles.btnBlack}
      onClick={() => window.open("https://expo.dev/@pikachu_65/nft-marketplace?serviceType=classic&distribution=expo-go", "_blank")}
    >
      <img src={assetUrl} alt="expo-icon" className={styles.btnIcon}/>
      <div className='flex flex-col justify-start ml-4'>
        <p className={`${styles.btnText} font-normal text-xs`}>View it on </p>
        <p className={`${styles.btnText} font-bold text-xs`}>Expo store </p>
      </div>
    </div>
  )
}

export default Button