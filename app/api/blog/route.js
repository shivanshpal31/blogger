import { NextResponse } from "next/server";
import connectDB from "../../../lib/config/db";
import { writeFile } from "fs/promises";
import fs from "fs";
import BlogModel from "../../../lib/models/BlogModel";
const fs = require("fs");

// const LoadDB = async () => {
//     await connectDB();
// }

LoadDB();

export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id");

    if(blogId) {
        console.log("Single Blog GET hit");
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json({ success: true, blog });
    }
    const blogs = await BlogModel.find({});
    return NextResponse.json({ success: true, blogs });
}

// API end point to get all blog posts
export async function GET(request) {
    console.log("All Blog GET hit");
    const blogs = await BlogModel.find({});
    return NextResponse.json({ success: true, blogs });
}

// Handle POST request to create a new blog post
export async function POST(request) {
    console.log("Blog POST hit");
    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);
    const imageName = `${timeStamp}_${image.name}`;
    const imagePath = `./public/uploads/${imageName}`;
    
    // Save the image to the uploads directory
    await fs.promises.writeFile(imagePath, imageBuffer);
    const imgUrl = `${imageName}`;
    console.log(imgUrl);

    const blogData = {
        title: `$formData.get("title")`,
        description: `$formData.get("description")`,
        category:  `$formData.get("category")`,
        author:  `$formData.get("author")`,
        image: imgUrl,
        authorImg: `$formData.get("authorImg")`
    };

    await BlogModel.create(blogData);
    console.log("Blog saved");
    

    return NextResponse.json({ success: true, message: "Blog post created successfully!" });
}

//Creating API end point to delete a blog post
export async function DELETE(request) {
    console.log("Blog DELETE hit");
    const blogId = request.nextUrl.searchParams.get("id");
    const blog= await BlogModel.findById(blogId);
    fs.unlink(`./public/uploads/${blog.image}`, (err) => {
        if (err) {
            console.error("Error deleting image file:", err);
        } else {
            console.log("Image file deleted successfully");
        }
    });
    await BlogModel.findByIdAndDelete(blogId);
    return NextResponse.json({ success: true, message: "Blog post deleted successfully!" });
}
