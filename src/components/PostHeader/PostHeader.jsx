import React from 'react'
import './PostHeader.css'
import profile from '../../img/profile.jpg'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';


const PostHeader = () => {
    return (
        <div className='post-side'>
            <div className="header">

                <div className='img-container'>
                    <img src={profile} alt="" className='post-side-image' />
                    <input type="text" placeholder="What's Happening" className='input'/>
                    

                </div>
                <div className="menu">
                <span><PhotoLibraryIcon />Photo</span>
                    <span><OndemandVideoIcon />Video</span>
                    <span><PersonPinCircleIcon />Location</span>
                    <span><CalendarMonthIcon />Schedule</span>
                    
                    <Button size="small" variant='contained'>share<ShareIcon /></Button>
                </div>
            </div>
        </div>
    )
}

export default PostHeader