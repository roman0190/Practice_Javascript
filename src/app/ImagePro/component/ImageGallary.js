import React from "react";
import useFireStore from "../hooks/useFireStore";
import { Timestamp } from "firebase/firestore";

const ImageGallary = () => {
  const { docs: images, loading } = useFireStore("images");

  if (loading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 p-5 justify-center gap-4 mt-10">
      {images.map((image) => (
        <div
          key={image.imageUrl}
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure className='max-h-[15rem]'>
            <img src={`${image.imageUrl}`} alt="Shoes" className='object-contain h-full w-full' />
          </figure>
          <div className="card-body">
            <p>Upload By: {image.userEmail}</p>
            <span>Created At: {image.createAt && image.createAt instanceof Timestamp ? image.createAt.toDate().toLocaleDateString() : "Unknown"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallary;