import React from 'react'
import "../styles/section.css";
import Invite from './Invite';
import PromoPanel from './PromoPanel';
import TopMenu from './TopMenu';
import YourRewards from './YourRewards';


const Section = () => {
  return (
    <div className='section'>
        <TopMenu />
        <PromoPanel />
        <YourRewards />
        <Invite />
    </div>
  )
}

export default Section;