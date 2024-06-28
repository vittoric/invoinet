import React from 'react';

const Card = ({ image, icon, text }) => {
  return (
    <div className="max-w-[500px] rounded overflow-hidden shadow-lg m-6 p-3 ">
            <div className=' rounded  pt-10 pr-8 bg-radial hover:overflow-hidden'>
              <img className="h-auto 
              transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={image} alt="Card" />
              </div>
            <div className="px-6 py-4">
                <img src={icon} alt="icon" className='w-[30px] mt-4'/>
                <p className="text-myBlack text-lg corbel-bold mt-4">
                    {text}
                </p>
            </div>
        </div>
  );
};



export default Card;
