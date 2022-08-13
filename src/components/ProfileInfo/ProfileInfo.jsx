import React from 'react'
import './ProfileInfo.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Button } from '@mui/material';
import { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';

const ProfileInfo = () => {
    const [modalopen, setmodalopen] = useState(false)
    return (
        <div className='infocard'>
            <div className="infoHead">
                <h4>Your info</h4>
                <ModeEditIcon onClick={()=> setmodalopen(true)} />
                <ProfileModal modalopen={modalopen} setmodalopen={setmodalopen}/>
            </div>

            <div className="info">
                <span><b>Status</b></span>
                <span>Relationship</span>
            </div>

            <div className="info">
                <span><b>Lives in</b></span>
                <span>New York</span>
            </div>

            <div className="info">
                <span><b>Works at</b></span>
                <span>Jay-Construction</span>
            </div>
            <Button className='btn' variant='contained'>Logout</Button>
        </div>
    )
}

export default ProfileInfo