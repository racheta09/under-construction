"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
  // useEffect(() => {
  //   window.location.assign("https://pixelpepegame.com/")
  // })
  return (
    <main className="hero min-h-screen bg-white bg-cover ">
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-slate-950">
            Website is UnderContruction
          </h1>
          <p className="mb-5 text-3xl text-slate-950">
            For more info contact us on{" "}
            <Link href="mailto:support@chainfi.tech">
            support@chainfi.tech
            </Link>
            <br />
            <Link href="https://twitter.com/tmccoin1">
              Twitter @tmccoin1
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
