import React from 'react';
import './UserInformation.css';

const UserInformation = (props) => {
    const {name,email,gender,ip_address,city,country,street,phone,company,img,selary} = props.userdata;
    return (
        <div className='userinformation-container'>
            <div className="userinformatin-image"><img src={img} alt="" /></div>
            <div>
            <div className="userinformation-details">
                <div className="indormetion-d">
                    <h4>Name: {name}</h4>
                    <h5>Email: {email}</h5>
                    <h5>Gender: {gender}</h5>
                    <h5>Phone: {phone}</h5>
                    <h5>Company Name: {company}</h5>
                </div>
                <div className="information-d1">                    
                    <p>City: {city}</p>
                    <p>Country: {country}</p>
                    <p>Street: {street}</p>
                    <p>Selary: ${selary}</p>
                    <p>IP-Address: {ip_address}</p>
                </div>
            </div> 
            <button className='button' onClick={()=> props.buttonHandel (props.userdata) }><i class="fa-solid fa-plus"></i>Click</button>
            </div>
 
        </div>
    );
};

export default UserInformation;