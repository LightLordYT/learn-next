import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen text-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Link href="/about">Go to about page</Link>
    </main>
  )
}
