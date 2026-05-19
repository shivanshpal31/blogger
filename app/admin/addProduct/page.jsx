"use client";
import Image from "next/image";
import React from "react";
import { assets } from "@/Assets/assets";
import axios from "axios";

const page = () => {
  const [image, setImage] = React.useState(null);
  const [data, setData] = React.useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Admin",
    authorImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImage", data.authorImage);
    formData.append("image", image);
    const response = await axios.post("/api/blogs", formData);
      if (response.data.success) 
        toast.success("Blog Added Successfully");
      else 
        toast.error("Failed to add Blog");
    };
      

  return (
    <>
      <form onSubmit={onSubmitHandler} action="" className="pt-5 px-5 sm:pt-12 sm:pl-16">
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
          onChange={onChangeHandler}
          value={data.title}
          name="title"
          type="text"
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border border-gray-300 rounded-md"
          name=""
          placeholder="Type your Blog Title"
          id=""
        />

        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          type="text-area"
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border border-gray-300 rounded-md"
          onChange={onChangeHandler}
          value={data.description}
          name="description"
          placeholder="Type your Blog Description"
          id=""
          rows={6}
        />

        <p className="text-xl mt-4">Blog Category</p>
        <select
          className="w-full sm:w-[500px] mt-4 px-4 py-2 border border-gray-300 rounded-md"
          name=""
          id=""
          onChange={onChangeHandler}
          value={data.category}
          name="category"
        >
          <option value="">Start Up</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
        </select>
        <br />
        <button className="mt-8 w-40 h-12 bg-black text-white">Add</button>
      </form>
    </>
  );
};

export default page;
