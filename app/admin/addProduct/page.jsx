"use client";
import Image from "next/image";
import React from "react";
import { assets } from "@/Assets/assets";

const page = () => {
  const [image, setImage] = React.useState(null);

  return (
    <>
      <form action="" className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="upload"
          />
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          type="text"
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border border-gray-300 rounded-md"
          name=""
          placeholder="Type your Blog Title"
          id=""
        />

        <p className="text-xl mt-4">Blog Description</p>
        <input
          type="text-area"
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border border-gray-300 rounded-md"
          name=""
          req
          placeholder="Type your Blog Title"
          id=""
        />
      </form>
    </>
  );
};

export default page;
