import React from 'react';
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {id, title, author, published_date, thumbnail_url, details, ratings, total_view } = news;

  const formetDate = new Date(news.author.published_date).toLocaleDateString()

  return (
    <div className='card bg-base-100 shadow-md mb-6 border'>
      <div className='bg-base-200 flex justify-between items-center p-4'>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='w-10 rounded-full'>
              <img src={author?.img || "https://via.placeholder.com/150"} alt="" />
            </div>
          </div>
          <div>
            <h2 className='font-bold text-sm'>{author?.name || "Unknown Author"}</h2>
            <p className='text-xs text-accent'>{formetDate}</p>
          </div>
        </div>
        <button className='text-accent hover:text-primary flex gap-1'>
            <FaRegBookmark/>
          <FaShareAlt />

        </button>
      </div>

      <div className='px-4'>
        <h2 className='text-lg font-bold text-primary hover:underline cursor-pointer'>
          {title}
        </h2>
      </div>

      <div className='px-4 py-2'>
        <img src={thumbnail_url} className='w-full h-48 object-cover rounded-md' alt="" />
      </div>

      <div className='px-4 text-sm text-accent'>
        {details?.length > 200 ? (
          <>
            {details.slice(0, 200)}....
            <Link to={`/news-details/${id}`} className='text-primary font-semibold hover:underline cursor-pointer'>Read More</Link >
          </>
        ) : details}
      </div>

      <div className='flex justify-between mt-3 border-t py-3 items-center px-4'>
        <div className='flex items-center gap-1 text-secondary'>
          {Array.from({ length: ratings?.number || 0 }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className='ml-2 text-accent'>{ratings?.number || 0}</span>
        </div>

        <div className='flex items-center gap-2 text-accent'>
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
