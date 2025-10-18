import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const MainLayout = () => {
    return (
        <div>
            <header>
             <Header/>
            <section className='w-11/12 mx-auto'>
                <LatestNews/>
            </section>
            <nav className='w-11/12 mx-auto'>
                <Navbar/>
            </nav>
            </header>
           
            <main className='gap-5 w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className=' col-span-3'>
                    <LeftAside />
                </aside>
                <section className='main col-span-6'>
                    <Outlet/>
                </section>
                <aside className=' col-span-3'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;