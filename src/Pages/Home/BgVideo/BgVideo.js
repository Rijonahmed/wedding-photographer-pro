import React from 'react';
import weddingVideo from '../../../Video/wedding.mp4'

const BgVideo = () => {
    return (
        <div>
        

            <div className="hero ">
            <video autoPlay muted loop>
        <source src={weddingVideo} type='video/mp4' />
      </video>
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <img src="https://my-portfolio-ee291.web.app/static/media/fortfolioRijon.cb2a1b87448b60cdcacd.png" className="max-w-sm rounded-lg shadow-2xl" alt='img'/> */}
    <div className='text-white'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BgVideo;