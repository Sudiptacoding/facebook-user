import React from 'react';
import './User.css';
import UserData from '../../FakeData/FakeData.json';
import { useState } from 'react';
import UserInformation from '../UserInformation/UserInformation';
import Card from '../Card/Card';

const User = () => {
    const [userdata ,setUserdata] = useState(UserData);
    const [selary, setSelary] = useState([]);

    const buttonHandel = (user)=>{
        console.log(user);
        const total =[...selary,user];
        setSelary(total);
        
    }
    return (
        <div className='user-container'>
            <div className='user-container-data'>
                {
                userdata.map( userdata => <UserInformation buttonHandel={buttonHandel} key={userdata.id} userdata = {userdata}></UserInformation> )
                }

            </div>
            <div className='user-container-card' >
                <Card Card={selary}></Card>            
            </div>
            
            <ul>

                
            </ul>
        </div>
    );
};

export default User;