import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite} flex-col`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <h1 className={`${styles.h1Text} ${styles.blackText}`}> Download the Source Code</h1>
        <p className={`${styles.pText} ${styles.blackText}`}> Get the full source code on GitHub</p>
      </div>
      {/* Button */}
      <div 
        className={styles.btnBlack}
        onClick={() => window.open("https://github.com/ShubhamVishwakarma11/nft-marketplace-showcase", "_blank")}>
        <img src={assets.github} alt="github_icon" className={styles.btnIcon}/>
        <div className='flex flex-col justify-start ml-4'>
          <p className={`${styles.btnText} font-normal text-xs`}>Source Code</p>
        </div>
      </div>
      <div className={styles.flexCenter}>
        <img src={assets.scene} alt="download_png" className={styles.fullImg}/>
      </div>
    </div>
  )
}

export default Download