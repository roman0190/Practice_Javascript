"use client";
import React from "react";
import Navbar from "./component/Navbar";
import UploadForm from "./component/UploadForm";
import { useAuth } from "./context/AuthContext";
import ImageGallary from "./component/ImageGallary";

const ImagePro = () => {
  const user = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="h-screen bg-slate-200">
        <Navbar />
        <UploadForm />
        <ImageGallary />
      </div>
    </div>
  );
};

export default ImagePro;
