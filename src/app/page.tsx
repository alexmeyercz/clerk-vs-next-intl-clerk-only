import React, { type FC } from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const f = '⇒ page.tsx (HomePage):'

const HomePage: FC = () => {
  return (
    <div>
      <h1>Just Clerk</h1>
      <div>User Button:</div>
      <div className='mt-8'>
        <UserButton />
      </div>
      <div className='mt-8'>
        <Link
          href={`/protected/`}
          className='btn'
        >
          Link to the protected page
        </Link>
      </div>
    </div>
  )
}
export default HomePage
