import { db, storage } from "../../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../context/AuthContext";

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const user = useAuth();

  const startUpload = (file) => {
    if (!file) {
      return;
    }
    const fileId = uuidv4();
    const formateFile = file.type.split("/")[1];

    const storageRef = ref(storage, `images/${fileId}.${formateFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setProgress(progress);
        //store data firestore
        const docRef = await addDoc(collection(db, "images"), {
          imageUrl:downloadURL,
          createAt: new Date(),
          useEmail: user?.email,
        });
      }
    );
  };

  return { progress, error, startUpload };
};

export default useStorage;
