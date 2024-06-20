import './index.css'
import { useState } from 'react';
import { login } from './utils.js';

const Login =() =>{
    const [UserName,setUserName] =useState('');
    const [password, setPassword] = useState('');
    console.log({UserName});

    const handleLogin = async(e)=>{ 
    e.preventDefault();
    console.log('are we here');
    const result = await login({username:UserName,password});
    console.log(result);
    }

    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input placeholder="Enter Username" type="text"  onChange={(e) => setUserName(e.target.value)}/>
            <br />
            <input placeholder="Enter password" type="password"  onChange={e=>setPassword(e.target.value)}/>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};
export default Login;