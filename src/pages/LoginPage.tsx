import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin() {
        // Handle login logic here
        console.log("Username:", username);
        console .log("Password:", password);
        navigate("/savejob"); 

    }

    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
   
    };

     const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
   
    };

  

  return (
    <div>
        <div className='shadowbox'>
            <h2>Login</h2>
            <Grid container spacing={2} >
                <Grid size={12}>
                    <TextField name='username' onChange={handleUserNameChange} id="login-username" label="Username" variant="outlined" size='small'/>
                </Grid>
                <Grid size={12}>
                    <TextField name='password' onChange={handlePasswordChange} id="login-password" label="Password" type='password' variant="outlined" size='small'/>
                </Grid>
               <Grid size={12}>
                    <Button onClick={handleLogin} variant="contained" size='small'>LogIn</Button>
               </Grid>
                
            </Grid>
           
        </div>
    </div>
  )
}

export default LoginPage