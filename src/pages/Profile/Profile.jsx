import React from 'react'
import FollowersCard from '../../components/FollowersCard/FollowersCard'
import PostHeader from '../../components/PostHeader/PostHeader'
import Post from '../../components/Posts/Post'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import ProfileSide from '../../components/ProfileSide'
import Trends from '../../components/Trends'

import './Profile.css'


const Profile = () => {
  return (
    <div className='profile'>
      <div className="left">
        <ProfileInfo />
        <FollowersCard />
      </div>

      <div className="profile-center">
      <PostHeader />
        <ProfileCard  />
       
        <Post />
      </div>
      <div className="right">
        <Trends />
      </div>

    </div>
  )
}

export default Profile