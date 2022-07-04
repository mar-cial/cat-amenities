import React, { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
type Props = {
  decreaseAction: MouseEventHandler<HTMLButtonElement> | undefined;
  increaseAction: MouseEventHandler<HTMLButtonElement> | undefined;

  page: number | undefined;
};

const PaginationContainerView = (props: Props) => {
  return (
    <motion.div className="flex items-center justify-between px-6 py-4">
      <motion.button
        onClick={props.decreaseAction}
        className="p-1 text-sm border-2 border-black md:px-3 md:py-2 md:text-lg"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        Decrease
      </motion.button>
      <p className="text-2xl font-title md:text-3xl">{`Page: ${props.page}`}</p>
      <motion.button
        onClick={props.increaseAction}
        className="p-1 text-sm border-2 border-black md:px-3 md:py-2 md:text-lg"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        Increase
      </motion.button>
    </motion.div>
  );
};

export default PaginationContainerView;
