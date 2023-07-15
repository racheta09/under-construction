import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="hero min-h-screen bg-[url(/construction.gif)] bg-cover ">
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-slate-950">
            Website is under Construction
          </h1>
          <p className="mb-5 text-3xl text-slate-950">
            For more info contact us on{" "}
            <Link href="mailto:admin@bscgrand.exchange">
              admin@dogereversed.lol
            </Link>
            <br />
            <Link href="https://twitter.com/dogereversed">
              Twitter @dogereversed
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
