import { NextResponse } from "next/server";
import connectDB from "../../../lib/config/db";
import EmailModel from "../../../lib/models/EmailModel";

const loadDB = async () => {
    await connectDB();
}

loadDB();

export async function POST(request) {
    console.log("Email POST hit");
    const formData = await request.formData();
    const emailData = {
        email: formData.get("email"),
    };

    await EmailModel.create(emailData);
    return NextResponse.json({ success: true, message: "Email saved successfully!" });
}