import React from 'react'
import './FollowersCard.css'
import followers from '../../data/followersData'
import { Button } from '@mui/material'

const FollowersCard = () => {
    return (
        <div className='followers-card'>
            <h4>Who is following you</h4>
            {followers.map((followers) =>
                <div className='followers'>

                    <img src={followers.img} alt="image" className='follower-image' />
                    <div className="name">
                        <span>{followers.name}</span>
                        <span>{followers.username}</span>

                    </div>
                    <Button size="small" variant='contained'>follow</Button>
                </div>
            )}
        </div>
    )
}

export default FollowersCard