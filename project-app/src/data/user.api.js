import axios from 'axios';

//קבלת כל המשתמשים-v
export const getAllUsers = async () => 
{
    try {
        const { users } = await axios.get('https://localhost:5000/user');
        return users;
    } 
    catch (error) {
        console.log('error in get users');}
}

//קבלת משתמש
export const getUserById = async (id) => 
{
    try {
        const {user}  = await axios.get('https://localhost:5000/user/'+id);
        return user;
    } 
    catch (error) {
        console.log('error in get user');}
}

//הוספת משתמש-v
export const addUser = async (user) => 
{
    try {
        return await axios.post('https://localhost:5000/user/',user);} 
    catch (error){
        console.log('error in add user');}
}

//עדכון משתמש-v
export const updateUser = async (id, user) => 
{
    try {
        return await axios.put('https://localhost:5000/user/'+id,user);} 
    catch (error){
        console.log('error in put user');}
}

//מחיקת משתמש-v
export const deleteUser = async (id) =>  
{
    try {
        return await axios.delete('https://localhost:5000/user/'+id);} 
    catch (error){
        console.log('error in delete user');}
}