import React from 'react'
import cover from '../../img/cover.jpg'
import profile from '../../img/profile.jpg'
import './ProfileCard.css'
import {Link} from 'react-router-dom'

const profilePage = true

const ProfileCard = () => {
    return (
        <div className="profile-Card">
            <div className="profile-images">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="profile-name">
                <span>Jenny Jo</span>
                <span>Web Developer</span>
            </div>
            <div className="follow-status">
                <hr />
                <div>
                    <div className="follow">
                        <span>3,728</span>
                        <span>Followings</span>
                    </div>
                    <div className='vl'></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <Link to='/profile'>
            {profilePage? '' :<span className='myProfile'>My Profile</span> }
            
            </Link>
            
        </div>
    )
}

export default ProfileCard