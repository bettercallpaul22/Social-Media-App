import React from 'react'
import FollowersCard from '../../../components/followersCard/FollowersCard'
import LogoSearch from '../../../components/SearchBar/LogoSearch'
import ProfileInfoCard from '../../../components/profileInfoCard/ProfileInfoCard'


const ProfileLeft = () => {
  return (
    <div className='profileLeft'>
        <LogoSearch />
        <ProfileInfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft