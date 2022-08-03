import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllUsers } from "../data/user.api";
// import { ServicesContext } from '../context/services.context';

export const Users = () => {

//   const { getServices } = useContext(ServicesContext);
let users;
useEffect(async() => {
    users = await getAllUsers();
    console.log(users);
},[users])
  return (
    <div>
      <Link to="newUser">Add user</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            <Link to={`${user.id}`}> {user.name} </Link>{" "}
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};