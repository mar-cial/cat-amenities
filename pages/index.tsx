// date created dd/mm/yy: 30 / 06 / 2022 - 11 : 24 : 14 by César Marcial

//react / nextjs imports
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useSWR from 'swr'
import Link from 'next/link'

// media imports

// data imports

// component imports

// interfaces

// start of component
const Homepage: NextPage = () => {
  return (
    <div>
      <header className="px-6 py-3">
        <h1 className="text-4xl font-title">Doorvel</h1>
      </header>

      <div>
        <Link href={'/childs'} passHref>
          <a>Children</a>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
