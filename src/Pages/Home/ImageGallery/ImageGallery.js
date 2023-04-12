import React, { useState } from "react";
import "./ImageGallery.css";
import { ImageData } from "../../../FakeData/FakeData";
import { FaTimes } from "react-icons/fa";

const ImageGallery = () => {
  const [modal, setModal] = useState(false);
  const [viewImg, setViewImg] = useState("");

  const getImg = (img) => {
    setViewImg(img);
    setModal(true);
  };

  return (
    <>
    <h2 className="text-3xl font-bold text-center my-8">Wedding Photo Gallery</h2>
      <div className={modal ? " open" : "imgmodal"}>
        <img src={viewImg} alt="images" />
        <FaTimes onClick={() => setModal(false)} />
      </div>
      <div className="ImageGallery">
        {ImageData.map((item, i) => {
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
