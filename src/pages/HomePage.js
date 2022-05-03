import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

const HomePage = () => {
    const dispatch = useDispatch()
    const {email} = useSelector(user => user.user)
    return (
        <div>
            <h1>HOMEPAGE</h1>
            <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
        </div>
    );
};

export default HomePage;