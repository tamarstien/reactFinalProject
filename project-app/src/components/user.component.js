import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { ServicesContext } from '../context/services.context';
import { getUserById, deleteUser } from "../data/user.api";



export const User = () => {
    // שליפה של פרמטרים מה url
    const { userId } = useParams();
    // const { getServiceById } = useContext(ServicesContext);
    const navigate = useNavigate();
    const user = getUserById(userId);
    //  הפונקציה תרוץ רק כאשר משתנה אחד הפרמטרים במערך שנשלח
    useEffect(() => {
        // חובה לעשות את הבדיקה הנ"ל רק בתוך useEffect
        // מכיוון שפונקציה זו רצה לאחר שתהליך הרינדור מסתיים, וזה ב=השמן שבו ניתן להשפיע שוב על תהליך הרינדור
        // אם הבדיקה היתה נכתבת בגוף הקומפוננטה, היה נוצר כישלון.
        if (!user) {
            console.log('no user');
            // דוגמא לניווט ע"י קוד
            navigate('/user');
        }
    }, [userId]);

    const Delete= async()=>{
        const u = await deleteUser(user.id);
        console.log(u);
        return u;
    }

    return user ? <div>
        <h3> first name: {user.firstName}</h3>
        <h4> last name: {user.lastName} </h4>
        <button onClick={Delete}>to delete</button>
        <Link to={`update/${user.id}`}> to update </Link>{" "}
    </div> : 'no such a user';
}