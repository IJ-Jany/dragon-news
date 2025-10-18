import React from 'react';
import swimImg from '../../assets/swimming.png'
import playimg from '../../assets/playground.png'
import classimg from '../../assets/class.png'

const Qzone = () => {
    return (
        <div className='bg-base-100 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5'>
<img src={swimImg} alt="" />
<img src={playimg} alt="" />
<img src={classimg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;