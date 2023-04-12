import React from 'react';
import Banner from '../Banner/Banner';
import ImageGallery from '../ImageGallery/ImageGallery';
import BgVideo from '../BgVideo/BgVideo';


const Home = () => {
    return (
        <div>
          
          <BgVideo></BgVideo>
            
            <ImageGallery></ImageGallery>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/kGYD4NB/education-removebg-preview.png" className="lg:max-w-sm  rounded-lg shadow-2xl" alt='img'/>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;