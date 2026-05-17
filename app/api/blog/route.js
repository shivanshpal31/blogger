import { NextResponse } from "next/server";
import connectDB from "../../../lib/config/db";
import { writeFile } from "fs/promises";
import fs from "fs";
import BlogModel from "../../../lib/models/BlogModel";

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

export async function GET(request) {
    console.log("Blog GET hit");
    return NextResponse.json({ message: "Hello from the Blog API!" });
}

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