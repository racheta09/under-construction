"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
  // useEffect(() => {
  //   window.location.assign("https://pixelpepegame.com/")
  // })
  return (
    <main className="hero min-h-screen bg-[url(/construction.gif)] bg-cover ">
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          {/* <h1 className="mb-5 text-5xl font-bold text-slate-950">
            Please visit our new website at{" "}
            <Link href="https://pixelpepegame.com/">pixelpepegame.com</Link>
          </h1> */}
          <p className="mb-5 text-3xl text-slate-950">
            For more info contact us on{" "}
            <Link href="mailto:admin@pixelpepegame.com">
              admin@bullrun2-0.com
            </Link>
            <br />
            <Link href="https://twitter.com/BullRunDefi">
              Twitter @BullRunDefi
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
