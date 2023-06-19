import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url(/construction.gif)] bg-cover">
      <h1 className="text-6xl text-center font-bold">
        Website is under Construction
      </h1>
      <p className="text-3xl">
        For more info contact us on{" "}
        <Link href="mailto:admin@bscgrand.exchange">
          admin@bscgrand.exchange
        </Link>
      </p>
    </main>
  )
}
