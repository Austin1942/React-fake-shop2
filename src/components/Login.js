import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';



function Login()
{    
    function signIn(){
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    
    return(
        <div className='col-sm-6 text-white offset-sm-3'>
            <h1>Please Login</h1>
            <br />
            <input type="text" className='form-control' placeholder='Name'></input>
            <br />
            <input type="password" className='form-control' placeholder='Password'></input>
            <br />
            <br />
            <Button onClick={signIn} variant="warning" type="submit">
            Login
            </Button>
            
        </div>
    )
}

export default Login