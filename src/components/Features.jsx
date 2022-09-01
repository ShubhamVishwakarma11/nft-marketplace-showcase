import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'


const FeatureCard = ({icon, iconText}) => {
  return (
    <div className={`${styles.featureCard}`}>
      <img src={icon} alt="icon" className={`${styles.featureImg}`}/>
      <p className={`${styles.featureText}`}> {iconText} </p>
    </div>
  )
}


const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03 flex-col`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <h1 className={`${styles.h1Text} ${styles.whiteText}`}> Technologies </h1>
        <p className={`${styles.pText} ${styles.whiteText}`}> ProNef has been developed using a cross-platform technology, React Native</p>
      </div>
      <div className={`${styles.flexWrap}`}>
        <FeatureCard icon={assets.react} iconText="React-Native"/>
        <FeatureCard icon={assets.javascript} iconText="JavaScript"/>
        
      </div>
    </div>
  )
}

export default Features