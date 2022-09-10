import { useState } from 'react';
const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <section className='flex justify-center items-center m-4 ml-0'>
      <article className='flex flex-col justify-center items-center rounded-3xl  font-serif drop-shadow-2xl bg-white w-[30%]'>
        <img src={image} alt={name} className='w-96 h-96' />
        <footer className='flex flex-col justify-start items-start w-96 h-auto'>
          <div className='flex justify-between w-96 m-2 ml-0 font-sans'>
            <h4>{name}</h4>
            <h4 className='bg-blue-300 text-blue-600'>
              <strong>${price}</strong>
            </h4>
          </div>

          <p>
            {readMore ? info.substring(0, 200) : info}
            <button
              className='text-blue-500'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? `Read More` : `Show Less`}...
            </button>
          </p>
          <div className='flex flex-col justify-center items-center w-96 mt-2'>
            <button
              className='border border-red-800 rounded-3xl w-auto p-1 pl-2 pr-2 text-red-500 mb-2  hover:text-red-800 hover:bg-red-300 transition hover:scale-105 duration-300'
              onClick={() => removeTour(id)}
            >
              Not Interseted
            </button>
          </div>
        </footer>
      </article>
    </section>
  );
};
export default Tour;
