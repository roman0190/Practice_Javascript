"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked,setChecked] = useState(false)
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/ImagePro", { scroll: false });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        return errorMessage;
      });
  };

  const handleCheck = (e) =>{
    e.preventDefault()
    if(checked){
      setChecked(false)
    }else{
      setChecked(true)
    }
    
    
  }
  return (
    <div className="text-stone-950 bg-black h-screen flex justify-center items-center">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col bg-white/30 h-auto w-[24rem] justify-center items-center p-6 rounded-md ">
          <input
            className="p-4 m-4 w-[20rem] rounded-xl bg-white input-primary"
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex">
            <input
              className="p-4 m-4 translate-x-2 w-[20rem] rounded-xl bg-white input-primary"
              type={checked ? 'text' : 'password'}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label onClick={handleCheck} className="flex cursor-pointer justify-center items-center ">
              <input type="checkbox" id="id" name="name" className="hidden" />
              👁️
            </label>
          </div>
          {error && (
            <span className="text-red-600 w-[20rem] flex justify-center mt-3">
              {error}
            </span>
          )}
          <button
            className="p-4 mt-6 w-[10rem]  bg-white hover:bg-slate-200 rounded-full"
            type="submit"
          >
            Login
          </button>
          <span className="m-2 mt-6 text-xs font-serif">Don't Have any account?<Link href={'/Auth/SignUp'} className="ml-1 underline text-blue-500">Sign Up</Link></span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
