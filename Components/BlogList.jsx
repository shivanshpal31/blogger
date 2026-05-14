import React from "react";
import { assets,blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";

const BlogList = ({blog}) => {

    const [menu,setMenu] = React.useState("All");


    return (
        <div className='border border-solid border-black shadow-[-7px_7px_0px_#000000] p-5'>
            <div className="flex justify-center gap-6 my-10">
                <button className="bg-black text-white py-1 px-5 rounded-sm" onClick={() => setMenu("All")}>All</button>
                <button className="bg-black text-white py-1 px-5 rounded-sm" onClick={() => setMenu("Technology")}>Technology</button>
                <button className="bg-black text-white py-1 px-5 rounded-sm" onClick={() => setMenu("Startup")}>Startup</button>
                <button className="bg-black text-white py-1 px-5 rounded-sm" onClick={() => setMenu("Lifestyle")}>Lifestyle</button>
            </div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {blog_data.map((item, index) => {
                    if (menu === "All" || item.category === menu) {
                        return (
                            <BlogItem key={index} title={item.title} description={item.description} category={item.category} image={item.image} />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default BlogList;