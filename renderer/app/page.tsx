import Link from 'next/link'

export default function HomePage() {
  return (
    <section>
      <h1 className='mt-10 text-4xl font-bold text-center text-green-600'>Home Page</h1>

      {/* Go to next page */}

      <Link href='/next'>
        <span className='block mt-5 text-center text-blue-600'>Go to next page</span>
      </Link>
    </section>
  )
}
