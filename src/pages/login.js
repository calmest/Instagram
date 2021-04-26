import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import FirebaseContext from '../context/firebase';


export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const  [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {};

    return (<p>Login Page!</p>);
}