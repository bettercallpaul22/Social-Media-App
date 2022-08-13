import React from 'react'
import './ProfileSide.css'
import Search from './SearchBar/Search'
import ProfileCard from './ProfileCard/ProfileCard'
import FollowersCard from './FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
    <Search />
    <ProfileCard />
    <FollowersCard />
    </div>
  )
}

export default ProfileSide