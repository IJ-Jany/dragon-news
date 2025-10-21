import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightAside from './homelayout/RightAside';
import NewsCard from './NewsCard';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [news,setNews] = useState({})
    useEffect(()=>{
const newsDetails = data.find((singleNews)=>singleNews.id == id)
setNews(newsDetails)
    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
<main className='mx-auto w-11/12 grid grid-cols-12'>
<section className='col-span-9'>
    <h2 className='font-bold mb-5'>News Details</h2>
    <NewsDetailsCard news={news}></NewsDetailsCard>
</section>
<aside className='col-span-3'>
    <RightAside></RightAside>
</aside>
</main>
        </div>
    );
};

export default NewsDetails;