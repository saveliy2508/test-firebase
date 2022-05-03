import React from 'react';
import {Link} from "react-router-dom";
import LogIn from "../components/LogIn";

const LoginPage = () => {
    return (
        <div>
            <p>LOGIN</p>
            <LogIn/>
            <p><Link to='/register'>Register</Link></p>
        </div>
    );
};

export default LoginPage;
