import React, { useState, useRef, useContext } from 'react';
// import { ServiceContext } from '../context/services.context';
import { useNavigate } from 'react-router-dom';
import { updateUser , getUserById } from '../data/user.api';

export const UpdateUser = (id, u) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(u.firstName);
    const [lastName, setLastName] = useState(u.lastName);

    // const { loadService } = useContext(ServiceContext);

    const user = getUserById(id);
    console.log(user);
    if(user)
    {
        user.firstName = firstName;
        user.lastName = lastName;
    }


    const formEl = useRef();

    formEl.current.reset();
    console.log(user);

    //בעקרון נראה לי יותר יפה לעשות את זה עם USEEFFECT
    const Update= async()=>{
        await updateUser(user.id, user);
        // .then(() => {
        //     loadUsers().then((data) => {
        //         setUsers([...data]);
        //     });
        // })
    }
 
    navigate('/user');  
    return <form onSubmit={Update} >
        <h3>Update User</h3>
        <input type="text" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)} /> <br />
        <input type="text" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)} /> <br />
        <button type="submit">Save</button>
    </form>
}