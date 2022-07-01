// date created dd/mm/yy: 30 / 06 / 2022 - 11 : 24 : 14 by César Marcial

//react / nextjs imports
import { NextPage } from 'next'
import Link from 'next/link'
import PageHeader from '../components/PageHeader'

// media imports

// data imports

// component imports

// interfaces

// start of component
const Homepage: NextPage = () => {
  return (
    <div>
      <PageHeader />

      <div>
        <Link href={'/childs'} passHref>
          <a>Children</a>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
