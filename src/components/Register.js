import {Button} from 'react-bootstrap';
import React,{useState} from 'react';

function Register()
{    
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

    function signUp()
    {
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
            <h1>Sign Up</h1>
                <br/>
                <br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Name'></input>
                <br/>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Enter Email'></input>
                <br/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'></input>
                <br/>
                <br/>
           
            
            <Button onClick={signUp} variant="primary" type="submit">
            Submit
            </Button>
        </div>
    )
}

export default Register