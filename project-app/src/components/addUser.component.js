import React, { useState, useRef, useContext } from 'react';
// import { CustomerContext } from '../context/customer.context';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../data/user.api';

export const NewUser = () => {
    // const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const { addCustomer } = useContext(CustomerContext);

    const formEl = useRef();
    //פונקצית הוספת משתמש
    const addNewUser = async (e) => {
        e.preventDefault();
        const user =
        {
            firstName,
            lastName
        };
        console.log(user);

        formEl.current.reset();
        setFirstName('');
        setLastName('');

        const u = await addUser(user);
        console.log(u);
        // addCustomer(u);
    }
    return <form onSubmit={addNewUser} ref={formEl}>
        <h3>Add User</h3>
        <input type="text" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)} /> <br />
        <input type="text" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)} /> <br />
        <button type="submit">Add User</button>
    </form>
}