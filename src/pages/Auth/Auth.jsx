import React from 'react'
import './Auth.css'
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div className='auth'>
            <div className="leftSide">
                <div className="info">
                    <GroupsIcon />
                    <h1 style={{ fontSize: "60px" }}>Nature Media</h1>
                    <p>Explore Nature and share ideas around</p>
                </div>
            </div>
            <div className="rightSide">
                <div className="login-form">
                    <div className='form-header'>
                        <PersonIcon className='icon' />
                        <h2>Sign Up</h2>

                    </div>
                    <div className='nameInput'>
                        <input type="name" placeholder='First Name' required className='login-input' />
                        <input type="name" placeholder='Last Name' required className='login-input' />
                    </div>
                    <input type="name" placeholder='Username' required className='login-input' />
                    <div className='nameInput'>
                        <input type="password" placeholder='Password' required className='login-input' />
                        <input type="password" placeholder='Password' required className='login-input' />
                    </div>
                    <div className="footer">
                        <Link to='login'><p>Already have an account Login</p></Link>
                        <Button size="small" variant='contained'>Sign Up</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Auth