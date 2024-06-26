import React from 'react';

const Card = ({ image, icon, text }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 shadow-md p-4 mx-8 mb-24 w-[500px] h-[550px]">
    <img src={image} className="w-full object-cover rounded-t-lg" />
    <div className="flex flex-col  mt-4">
      <img src={icon} className="text-lg font-medium w-9 "/>
            <p className="text-gray-600 mt-8">{text}</p>
    </div>
  </div>
  );
};



export default Card;
