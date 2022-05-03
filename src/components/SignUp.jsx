import React from 'react';
import {useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from './Form';
import {useDispatch} from "react-redux";
import {setUser} from 'store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=> {
                console.log(user);
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
                title='register'
                handleClick={handleRegister}
            />
        </div>
    );
};

export default SignUp;
