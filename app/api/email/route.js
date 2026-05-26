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

export async function GET() {
    console.log("Email GET hit");
    const emails = await EmailModel.find({});
    return NextResponse.json({ success: true, data: emails });
}

export async function DELETE(request) {
    console.log("Email DELETE hit");
    // const { searchParams } = new URL(request.url);
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
        return NextResponse.json({ success: false, message: "ID is required for deletion." }, { status: 400 });
    }

    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Email deleted successfully!" });
}