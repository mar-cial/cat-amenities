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
      <button onClick={props.decreaseAction}>Decrease</button>
      <p>{props.page}</p>
      <button onClick={props.increaseAction}>Increase</button>
    </motion.div>
  )
}

export default PaginationContainer
