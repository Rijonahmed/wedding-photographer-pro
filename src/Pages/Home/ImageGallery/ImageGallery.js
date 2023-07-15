import React, { useState } from "react";
import "./ImageGallery.css";
import { FaTimes } from "react-icons/fa";
import Loading from '../../../Shared/Loading';
import { useQuery } from "@tanstack/react-query";

const ImageGallery = () => {
  const [modal, setModal] = useState(false);
  const [viewImg, setViewImg] = useState("");

  const getImg = (img) => {
    setViewImg(img);
    setModal(true);
  };
  const { data: Photos = [],isLoading } = useQuery({
    queryKey: ['photo'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/photos`)
      const data = await res.json()
      return data
    }
  })
 
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <>
    <h2 className="lg:text-3xl font-bold text-center my-8">Wedding Photo Gallery</h2>
      <div className={modal ? " open" : "imgmodal"}>
        <img src={viewImg} alt="images" />
        <FaTimes onClick={() => setModal(false)} />
      </div>
      <div className="ImageGallery">
        {Photos.map((item, i) => {
          return (
            <div className="pic" key={i} onClick={() => getImg(item.img)}>
              <img src={item.img} className="w-fit" alt="images" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
