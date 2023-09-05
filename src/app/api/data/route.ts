import { sql } from "@vercel/postgres";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse as res } from "next/server";
import pool from "./../database"

export async function POST(request: Request, req: NextRequest) {
    const {rows} = await sql`select * from kategori`;
    return res.json({ message: "ini Data ya", rows })
}