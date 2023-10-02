import React from "react";

const Card = ({ id, title, description, urlToImage, url }) => {
  return (
    <div id={id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
         <img className='w-[500px] h-[200px]' src={urlToImage} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={url} className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
