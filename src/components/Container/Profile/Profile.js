import React from 'react';

import Users from '../../../config/users';
import  './Profile.css';


const Profile = (props) => {
    return (
        <div className="user-container">
            <div className="inner-user-container">
                <h1>User: {Users[props.enteredUser].firstName} {Users[props.enteredUser].lastName}</h1>
                <p>Age: {Users[props.enteredUser].age}</p>
                <p>Profession: {Users[props.enteredUser].job}</p>
            </div>
        </div>
    )
}

export default Profile;