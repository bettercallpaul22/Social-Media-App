import React from 'react'
import PostSide from '../../components/PostSide'
import ProfileSide from '../../components/ProfileSide'
import Trends from '../../components/Trends'
import './HomePage.css'



const HomePage = () => {
  return (
    <div className='HomePage'>
     <ProfileSide />
     <PostSide />
  <Trends />
    </div>
  )
}

export default HomePage