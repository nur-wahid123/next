import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextResponse as res } from "next/server";


export async function POST(request: Request, req: NextApiRequest) {
    cookies().delete("token")
    return res.json({message:"Logout Berhasil"}) 
}