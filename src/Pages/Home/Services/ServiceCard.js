import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=' h-64' src={img} alt="Shoes" />
        </figure>
        <div className='card-body'>
          <div className="flex justify-between items-center px-3 mt-5">
            <div>
              <h2 className="card-title">{title}</h2>
              <p className="text-2xl text-orange-600 font-semibold">
                Price: ${price}
              </p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;