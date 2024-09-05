"use client";
import React, { useState } from "react";
import Image from "next/image";
const Post = () => {
  const [img, setImg] = useState(null);
  const [text, setText] = useState("");
  return (
    <div className="container mx-auto  max-w-[40rem] bg-gray-400 rounded-md overflow-hidden m-20 text-sm md:text-base ">
      <div className="flex items-center pt-3">
        <img
          className="w-10 h-10 rounded-full m-1"
          src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-1/454003079_1866177973905059_3450008318260556690_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=KAlue23PstYQ7kNvgELkDrC&_nc_ht=scontent.fzyl2-2.fna&oh=00_AYBXls8BZBP2JkY1kUKLz323wVwMTydJdVPTxtK76cBN1g&oe=66B6A9FA"
          alt="image"
        />
        {/* <Image
          src="/"
          alt="alt"
          width={40}
          height={40}
          className=" w-8 h-8 rounded-full m-1"
        /> */}
        <div className=" w-full flex flex-col">
          <a href="/Post">
            {" "}
            <strong>Tasdid Hossain</strong>{" "}
          </a>
          <span>  </span>
          <span className="font-extralight text-xs">a day ago</span>
        </div>
        <div className="flex p-2 gap-2">
          <button> ... </button>
          <button>X</button>
        </div>
      </div>
      <div className="text-left pt-2 pl-1">Ami Roman Bhai er Vokto.</div>
      <div className="flex justify-center bg-slate-700 w-full h-[40rem] overflow-hidden">
        <img src="/img6.jpg" alt="" />
      </div>
      <div className="p-2 pl-3 pr-3">
        <div className="flex justify-between mb-2">
          <span>🥰 20</span>
          <span>1 comment</span>
        </div>
        <hr />
        <div className="p-3 flex justify-between pl-5 pr-5 md:pl-10 md:pr-5 text-xs md:text-base">
          <button>👍 Like</button>
          <button>💬 Comment</button>
          <button>📥 Send</button>
          <button>📲 Share</button>
        </div>
        <hr />
        <div className="flex items-center ">
          {/* <Image
            src="/img1.jpg"
            alt="alt"
            width={40}
            height={40}
            className=" w-10 h-10 rounded-full mt-2 mr-1"
          /> */}
          <img
            src="https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-1/453852875_1822426348285960_2298002443902388463_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=ie6eE00ZlTUQ7kNvgHR8OxK&_nc_ht=scontent-xsp1-3.xx&oh=00_AYAOCTlMS8V2b1FaenluSQAMXy0gK7q_GJ62e5ZrO9RPlQ&oe=66B5EBC0"
            alt="image"
            className=" w-10 h-10 rounded-full mt-2 mr-1"
          />
          <div className="relative w-full mt-3">
            <input
              type="text"
              placeholder="Comment as Roman Howladar"
              className="rounded-full p-2 w-full bg-slate-500"
            />
            <div className="flex absolute top-1/2 right-3 transform -translate-y-1/2 gap-2">
              <button>😃</button>
              <button>😁</button>
              <button>😍</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
