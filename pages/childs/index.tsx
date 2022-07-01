import { NextPage } from 'next'
import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { AnimatePresence, motion } from 'framer-motion'
import PaginationContainer from '../../components/PaginationContainer'
import PageHeader from '../../components/PageHeader'

export interface ResponseData {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  id: number
  name: string
  seo_friendly: string
  property_category: number
  amenity_parent: number
}
const ChildrenPage: NextPage = () => {
  const [page, setPage] = useState(1)
  const baseURL = `http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${page}`

  // swr for caching, pagination, error handling, etc.
  // Actual fetching or remote url is done by fetcher function,
  // using async/await fetch()
  const { data, error } = useSWR(baseURL, fetcher)

  // check for errors
  if (error) {
    console.log(`error fetching data:\n${error}`)

    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="font-title text-6xl">
          There was an error fetching data.
        </h2>
      </div>
    )
  }

  const handleDecrease = () => {
    page > 1 ? setPage(page - 1) : setPage(page)
  }

  const handleIncrease = () => {
    page < data.count / 100 ? setPage(page + 1) : setPage(page)
  }

  return (
    <>
      <PageHeader />
      <AnimatePresence>
        {data ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={'main-content'}
          >
            <PaginationContainer
              decreaseAction={handleDecrease}
              increaseAction={handleIncrease}
              page={page}
            />

            <motion.div className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-rows-fr">
              {data.results.map((item: Result) => (
                <div className="p-2 border-2" key={item.id}>
                  <p>{item.id}</p>
                  <h3 className="text-lg font-text">{item.name}</h3>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            animate={{ height: 50 }}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            className="flex justify-center items-center bg-black text-white"
            key={'loading-screen'}
          >
            <h2 className="font-title text-3xl">Loading...</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default ChildrenPage
