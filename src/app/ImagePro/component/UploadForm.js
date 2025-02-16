import React from "react";
import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { startUpload, progress } = useStorage();
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      startUpload(selectedFile);
    }
    setSelectedFile(null);
  };
  return (
    <div className=" items-center text-center mt-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button
          type="submit"
          className={`btn gap-3 ${Boolean(progress) && 'loading'}`}
          disabled = {!selectedFile}
        >
          Upload <span>🚀</span>
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
