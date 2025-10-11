import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const data = await req.json();
// TODO: integrate email provider or DB storage
    console.log("Contact form submission:", data);
    return NextResponse.json({ ok: true });
}