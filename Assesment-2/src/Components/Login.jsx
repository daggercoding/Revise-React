import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setLogin}) => {
  let [username, setUsername] = useState([]);
  let [password, setPassword] = useState([]);
  const naviagte = useNavigate()

  function OnChangeHandler(event) {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  function onSubmitHandler()
  {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username:username,
        password:password,
        // username: 'kminchelle',
        // password: '0lelplR',
      })
    })
    .then(res => res.json())
    .then(data=>{
      localStorage.setItem("token",data.token)
      naviagte("/home")
      setLogin(false)
    });
  }

  return (
    <div className='Login-Form'>
      <label htmlFor='username'>UserName</label>
      <input
        className='Form-Input'
        type='text'
        name='username'
        value={username}
        onChange={OnChangeHandler}
      ></input>
      <label htmlFor='password'>Password</label>
      <input
        className='Form-Input'
        type='password'
        name='password'  
        value={password}
        onChange={OnChangeHandler}
      ></input>

      <button className="Headerbtn btn btn-outline-info" onClick={onSubmitHandler} type='submit'>Login</button>
    </div>
  );
};

export default Login;
