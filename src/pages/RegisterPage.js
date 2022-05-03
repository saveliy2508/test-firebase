import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div>
            <p>REGISTER</p>
            <SignUp/>
            <p>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
};

export default RegisterPage;