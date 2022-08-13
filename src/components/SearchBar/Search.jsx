import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <TwitterIcon />
        <div className="search">
            <input type="text" placeholder='#Explore'/>
            <div className="search-icon">
                    <SearchIcon />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch