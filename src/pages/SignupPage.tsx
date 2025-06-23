import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState, type ChangeEvent } from 'react'

function SignupPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [signupButtonDisabled, setSignupButtonDisabled] = useState(true);

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);     
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);     
    };

    const handleEmailChange= (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);     
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);     
    };

    const handleRetypePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRetypePassword(e.target.value);     
    };

   useEffect(() => {
        if (password !== retypePassword) {
            console.log("Passwords do not match");
        }
        else{
            setSignupButtonDisabled(false);
        }
    }, [password, retypePassword]);

    function handleSignup() {
        // Handle signup logic here
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("ReType Password:", retypePassword);

        // Proceed with signup logic, e.g., API call
    }

  return (
    <div>
        <div className='shadowbox'>
            <h2>Sign Up</h2>
            <Grid container spacing={2} >
                <Grid size={12}>
                    <TextField required name='firstName' onChange={handleFirstNameChange} id="signup-firstname" label="First Name" variant="outlined" size='small'/>
                </Grid>
                <Grid size={12}>
                    <TextField required name='lastName' onChange={handleLastNameChange} id="signup-lastname" label="Last Name" variant="outlined" size='small'/>
                </Grid>
                <Grid size={12}>
                    <TextField required name='email' onChange={handleEmailChange} id="signup-email" label="Email" variant="outlined" size='small'/>
                </Grid>
                <Grid size={12}>
                    <TextField required name='password' onChange={handlePasswordChange} id="signup-password" label="Password" type='password' variant="outlined" size='small'/>
                </Grid>
                <Grid size={12}>
                    <TextField required name='retypePassword' onChange={handleRetypePasswordChange} id="signup-retypepassword" label="ReType Password" type='password' variant="outlined" size='small'/>
                </Grid>
               <Grid size={12}>

                    <Button onClick={handleSignup} disabled={signupButtonDisabled} variant="contained" size='small'>Sign Up</Button>
               </Grid>
                
            </Grid>
           
        </div>
    </div>
  )
}

export default SignupPage