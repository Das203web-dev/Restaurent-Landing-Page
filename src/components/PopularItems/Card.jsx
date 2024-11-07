import React from 'react';

function Card({ img, title, desc }) {
    return (
        <div className="bg-white w-full flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform md:hover:scale-105 hover:shadow-2xl">
            <img className="w-32 h-32 mb-4" src={img} alt={title} />
            <div className="h-1 w-10 bg-red-600 mb-4 rounded-full"></div>
            <h3 className="text-xl uppercase font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-center text-sm px-2">{desc}</p>
        </div>
    );
}

export default Card;
