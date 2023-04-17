import React from 'react';

const Service = ({service}) => {
    const {name,price, images,text1,text2,text3,text4,text5,text6,text7,} = service;
    return (
        <div>
     <div className="card w-96 bg-base-100 shadow-xl lg:flex">
  <figure ><img src={images} alt="wedding img" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <h3 className='lg:text-3xl text-2xl font-bold'>{price}</h3>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>
    <p>{text4}</p>
    <p>{text5}</p>
    <p>{text6}</p>
    <p>{text7}</p>
   
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-success">Checkout</button>
    </div>
  </div>
</div>
    </div>
    );
};

export default Service;