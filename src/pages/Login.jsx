import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [error,seterror] = useState("")
  const { login } = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const handleLogin =(e)=>{
e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value
 login(email,password)
 .then(res=>{
          const user = res.user;
console.log(user)
navigate(`${location.state? location.state:"/"}`)
        })
        .catch(error=>{
          const errorCode = error.errorCode
          const message = error.message;
          seterror(errorCode)
        })
  }
    return (
       <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
        {error && <p className='text-red-600 text-sm'>{error}</p>}
          <button className="btn btn-neutral mt-4">Login</button>
            <p className='font-semibold text-center pt-5'>Don't have an account? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </fieldset>
      </form>
    </div>
       </div>
    );
};

export default Login;