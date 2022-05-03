import React from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import Form from './Form';
import {useDispatch} from "react-redux";
import {setUser} from 'store/slices/userSlice'
import {useNavigate} from "react-router-dom";

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email:user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <div>
            <Form
                title='sign in'
                handleClick={handleLogin}
            />
        </div>
    );
};

export default LogIn;
