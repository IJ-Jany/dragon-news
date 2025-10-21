import React, { use } from 'react';
import { NavLink,Link } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = use(AuthContext) 
    const handleLogout=() =>{
   logOut()
   .then(()=>{
    alert("logout successfully")
   }).catch((error)=>{
    console.log(error)
   })
    }
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                 <NavLink to="/about">About</NavLink>
                  <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex login-btn gap-5'>
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : userImg}`} alt="" />
                {user ? ( <Link onClick={handleLogout}  className='btn btn-primary px-10'>LogOut</Link>) : ( <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)}
               
            </div>
        </div>
    );
};

export default Navbar;