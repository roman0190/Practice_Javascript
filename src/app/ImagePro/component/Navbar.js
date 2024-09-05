import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";


const Navbar = () => {

  const handleLogout = async() =>{
    await signOut(auth).then(() => {
      window.location.href ="/";
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="">
      <div className="navbar bg-base-100 justify-between ">
        <a className="font-bold text-xl ">Gallary 📸</a>
        <button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
