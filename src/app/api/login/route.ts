import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextResponse as res } from "next/server";


export async function POST(request: Request, req: NextApiRequest) {
    const a = await request.json()
    if (a.username=="") return res.json({error:"Username tidak boleh kosong"})
    if (a.username !== "admin") return res.json({error:"Username anda Salah"})
    if (a.password !== "admin") return res.json({error:"Password Salah"})
    cookies().set("token","iniadminya",{httpOnly:true,maxAge:3600,secure:true})
    return res.json({message:"Selamat datang admin"}) 
}