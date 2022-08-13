import React from 'react'
import './TrendsNavBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import CampaignIcon from '@mui/icons-material/Campaign';
import CommentIcon from '@mui/icons-material/Comment';
import {Link} from 'react-router-dom'


const TrendsNavBar = () => {
  return (
    <div className='right-side'>
      <div className="nav">
      <Link to='/'> <HomeIcon className='home-icon'/></Link>
       
        <CommentIcon />
        <CampaignIcon />
        <SettingsIcon />

      </div>
    </div>
  )
}

export default TrendsNavBar