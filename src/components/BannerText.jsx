import React from 'react'
import bannerText from '../assets/text-bg.png'
function BannerText({ value }) {
  return (
    <div className={`bannerText text-[5.5vw] px-3 sm:text-[4.5vw] py-0`}>
      {value}
    </div>
  )
}

export default BannerText
