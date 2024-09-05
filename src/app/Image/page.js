'use client';
import React, { useState } from "react";

const img = [
  {
    id: 1,
    path: "/img1.jpg",
  },
  {
    id: 2,
    path: "/img2.jpg",
  },
  {
    id: 3,
    path: "/img3.jpg",
  },
  {
    id: 4,
    path: "/img4.jpg",
  },
];

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  const [animationClass, setAnimationClass] = useState("");
  const [newImage, setNewImage] = useState(selectedImage);

  const handleSelection = (id) => {
    if (id === selectedImage) return;

    const direction = id > selectedImage ? "left" : "right";
    setAnimationClass(direction);
    setNewImage(id);

    setTimeout(() => {
      setSelectedImage(id);
      setAnimationClass("");
    }, 300);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-neutral-600">
      <div className="relative m-4 overflow-hidden h-[25rem] w-[35rem]">
        <img
          className={`absolute h-full w-full rounded-xl border border-green-300 transition-transform duration-300 ease-in-out ${animationClass === 'left' ? 'slide-out-left' : animationClass === 'right' ? 'slide-out-right' : ''}`}
          src={img.find((image) => image.id === selectedImage).path}
          alt={`Image ${selectedImage}`}
        />
        <img
          className={`absolute h-full w-full rounded-xl border border-green-300 transition-transform duration-300 ease-in-out ${animationClass === 'left' ? 'slide-in-right' : animationClass === 'right' ? 'slide-in-left' : ''}`}
          src={img.find((image) => image.id === newImage).path}
          alt={`Image ${newImage}`}
        />
        <ul className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {img.map((image) => (
            <li
              key={image.id}
              onClick={() => handleSelection(image.id)}
              className={`w-8 h-1 border border-white bg-opacity-50 ${
                selectedImage === image.id ? "bg-blue-600" : "bg-transparent"
              } cursor-pointer`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;