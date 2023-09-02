"use client"

import Link from "next/link";

import { signIn, useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const {data: session} = useSession()

    return (
        <nav className="bg-slate-900 flex items-center py-3 justify-between px-24 text-white">
            <h1>
                Comunidad de Vecinos
            </h1>
            

            {session?.user ? (
                <div className="flex gap-x-2 items-center">
                    <Link  href="/dashboard">
                        Dashboard
                    </Link>
                    <p>{session.user.name} {session.user.email}</p>
                    <button
                        onClick={async () => {
                            await signOut({
                                callbackUrl: "/",
                            })
                        }}
                    >Cerrar sesión</button>
                </div>
            ):(
                <div className="flex gap-x-2 items-center">
                <button onClick={() => signIn()} className="bg-sky-400 px-3 py-2 rounded">
                    Iniciar Sessión
                </button>
            </div> 
            )}
        </nav>
    )
}
