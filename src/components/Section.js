import React from 'react'
import "../styles/section.css";
import PromoPanel from './PromoPanel';
import TopMenu from './TopMenu';
import YourRewards from './YourRewards';


const Section = () => {
  return (
    <div className='section'>
        <TopMenu />
        <PromoPanel />
        <YourRewards />
    </div>
  )
}

export default Section;