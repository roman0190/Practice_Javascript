import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../Firebase/firebase";


const useFireStore = (collectionName) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, collectionName),orderBy('createAt','desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const images = [];
      querySnapshot.forEach((doc) => {
        const imageUrl = doc.data().imageUrl
        const createAt = doc.data().createAt
        const userEmail = doc.data().useEmail
        images.push({imageUrl,createAt,userEmail});
      });
      setDocs(images);
      setLoading(false); 
    }, (error) => {
      console.log(error);
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, [collectionName]);

  return { docs, loading };
};

export default useFireStore;