import React from 'react'
import './TrendsCard.css'
import trend from '../../data/trend'
import { Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import ShareModal from '../ShareModal/ShareModel';



const TrendsCard = () => {
  const [share, setshare] = useState(false)
  return (
    <div className="TrendCard">
      <h3>Trend for you</h3>
      {trend.map((trend) =>
        <div className='trend'>
          <span><b>{trend.type}</b></span>
          <span>{trend.shares} Shares</span>
        </div>

      )}
      <Button onClick={() => setshare(true)} variant='contained'>Share <ShareIcon /></Button>
      <ShareModal share={share} setshare={setshare} />
    </div>
  )
}

export default TrendsCard