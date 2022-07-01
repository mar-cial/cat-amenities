import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
type Props = {
  decreaseAction: MouseEventHandler<HTMLButtonElement> | undefined
  increaseAction: MouseEventHandler<HTMLButtonElement> | undefined

  page: number | undefined
}

const PaginationContainer = (props: Props) => {
  return (
    <motion.div className="flex items-center justify-between px-6 py-4">
      <motion.button
        onClick={props.decreaseAction}
        className="border-2 border-black p-1 md:px-3 md:py-2 text-sm md:text-lg"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        Decrease
      </motion.button>
      <p className="font-title text-2xl md:text-3xl">{`Page: ${props.page}`}</p>
      <motion.button
        onClick={props.increaseAction}
        className="border-2 border-black p-1 md:px-3 md:py-2 text-sm md:text-lg"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        Increase
      </motion.button>
    </motion.div>
  )
}

export default PaginationContainer
