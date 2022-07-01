import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
type Props = {
  action: MouseEventHandler<HTMLButtonElement> | undefined
  page: number | undefined
}

const PaginationContainer = (props: Props) => {
  return (
    <motion.div className="flex items-center justify-between px-6 py-4">
      <button onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}>
        Decrease
      </button>
      <p>{page}</p>
      <button
        onClick={() =>
          setPage((prev) => (prev < data.count / 100 ? prev + 1 : prev))
        }
      >
        Increase
      </button>
    </motion.div>
  )
}

export default PaginationContainer
