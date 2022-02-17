import React from 'react'
import "../styles/section.css";
import Invite from './Invite';
import PromoPanel from './PromoPanel';
import Table from './Table';
import TopMenu from './TopMenu';
import YourRewards from './YourRewards';


const Section = () => {
  return (
    <div className='section'>
        <TopMenu />
        <PromoPanel />
        <YourRewards />
        <Invite />
        <Table />
    </div>
  )
}

export default Section;