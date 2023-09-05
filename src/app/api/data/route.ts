import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse as res } from "next/server";
import pool from "./../database"

export async function POST(request: Request, req: NextRequest) {
    const conn = await pool.getConnection()
    const [row, fields] = await conn.query("select * from barang");
    conn.release()
    return res.json({ message: "ini Data ya", row })
}