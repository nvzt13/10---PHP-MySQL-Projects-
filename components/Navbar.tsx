import Link from 'next/link'

export default function Navbar () {
  return (
    <div className="flex bg-blue-200 p-3 font-sans justify-between font-bold">
      <div>
        <h1> Personal Blog App</h1>
      </div>
      <div>
        <Link href="/" className="mx-2" >Home</Link>
        <Link href="/create-blog" className="mx-2">Create Blog</Link>
      </div>
    </div>
    )
}