"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export default function Page() {
    const [data, setData] = useState("")
    const nameRef = useRef()
    const passRef = useRef()
    const router = useRouter()

    async function getData() {
        const d = await axios.post("/api/login",{
            username:nameRef.current.value,
            password:passRef.current.value
        })
        if("message" in d.data){
            console.log(d.data);
            router.push("/admin/dashboard")
        }
    }

    axios
    return (
        <div className="">
            <div className="bg-white min-w-md rounded-md shadow-md">
                <p>{data}</p>
                <input ref={nameRef} type="text" />
                <input ref={passRef} type="password" name="" id="" />
                <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-blue-400" onClick={() => getData()}>Login</button>
            </div>
        </div>
    )
}