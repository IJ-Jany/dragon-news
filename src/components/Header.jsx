import React from 'react';
import logoImg from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-[350px]' src={logoImg} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <h3 className='font-semibold text-accent'>{format(new Date(),"EEEE ,MMMM MM, yyyy")}</h3>
        </div>
    );
};

export default Header;