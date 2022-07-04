import React from 'react';
import { Datum } from '../model/parentsResponse';
import { BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';
import { motion } from 'framer-motion';
type Props = {
  d: Datum;
};

const ParentView = ({ d }: Props) => {
  return (
    <article
      className="flex items-center justify-between w-full px-4 py-2 rounded-md shadow-md"
      key={d.id}
    >
      <header>
        <p className="font-mono text-sm text-gray-500">Category name</p>
        <h3 className="text-xl font-bold md:text-2xl">{d.name}</h3>
      </header>

      <motion.div whileHover={{ rotate: -4, y: -2 }}>
        <Link href={`/categories/${d.id}`} passHref>
          <motion.a>
            <BiLinkExternal className="text-3xl" />
          </motion.a>
        </Link>
      </motion.div>
    </article>
  );
};

export default ParentView;
