"use client"

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar(){
    const { data: session } = useSession();
    return(
        <nav className="bg-slate-900 flex items-center py-3 justify-between px-24 text-white">
            <Link href="">
                Comunidad de propietarios
            </Link>
            <div className="flex gap-x-2 items-center">
                <Link href="">{session?.user?.name}</Link>
            
                <button
                    onClick={() => signOut()}
                    className="bg-sky-900 px-3 py-2 rounded"
                    >
                    Log Out
                </button> 
            </div>
        </nav>
    )
}