// date created dd/mm/yy: 30 / 06 / 2022 - 11 : 24 : 14 by César Marcial

//react / nextjs imports
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useSWR from 'swr';

// media imports

// data imports

// component imports

// interfaces
export interface ResponseData {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  seo_friendly: string;
  property_category: number;
  amenity_parent: number;
}

// next data fetching

const loadingVariants = {
  enter: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    y: -100,
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      delay: 1,
    },
  },
};

/**
 * Fetches json from the provided url.
 *
 * @param url The address string to fetch
 * @returns
 */
const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json().catch((err) => console.log(err)));

// start of component
const Homepage: NextPage = () => {
  const [page, setPage] = useState(1);
  const baseURL = `http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${page}`;

  const { data, error } = useSWR(baseURL, fetcher);

  if (error) {
    return (
      <div>
        <h2>There was an error.</h2>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1 className="px-6 py-4 text-4xl font-title">Doorvel</h1>
      </header>

      <div className="flex items-center justify-between px-6 py-4">
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
      </div>

      <motion.div
        className="grid grid-cols-2 gap-4 px-6 py-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-rows-fr"
        animate={{ y: 10 }}
      >
        {data.results.map((item: Result) => (
          <div className="p-2 border-2" key={item.id}>
            <p>{item.id}</p>
            <h3 className="text-lg font-text">{item.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Homepage;
