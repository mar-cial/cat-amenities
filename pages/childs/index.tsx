import { NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { AnimatePresence, motion } from 'framer-motion';
import PaginationContainerView from '../../components/PaginationContainerView';
import PageHeaderView from '../../components/PageHeaderView';
import { mainContentVariants } from '../../animations/childsAnimation';
import { ChildsResult } from '../../model/childsResponse';
import ChildsItemView from '../../components/ChildsItemView';

const ChildrenPage: NextPage = () => {
  const [page, setPage] = useState(1);
  const baseURL = `http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${page}`;

  // swr for caching, pagination, error handling, etc.
  // Actual fetching or remote url is done by fetcher function,
  // using async/await fetch()
  const { data, error } = useSWR(baseURL, fetcher);

  // check for errors
  if (error) {
    console.log(`error fetching data:\n${error}`);

    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-6xl font-title">
          There was an error fetching data.
        </h2>
      </div>
    );
  }

  const handleDecrease = () => {
    page > 1 ? setPage(page - 1) : setPage(page);
  };

  const handleIncrease = () => {
    page < data.count / 100 ? setPage(page + 1) : setPage(page);
  };

  return (
    <>
      <PageHeaderView />
      <AnimatePresence>
        {data && (
          <motion.div
            variants={mainContentVariants}
            animate="enter"
            initial="initial"
            exit={'exit'}
            key={'main-content'}
          >
            <PaginationContainerView
              decreaseAction={handleDecrease}
              increaseAction={handleIncrease}
              page={page}
            />

            <motion.div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-rows-fr">
              {data.results.map((item: ChildsResult) => (
                <ChildsItemView item={item} key={item.id} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ChildrenPage;
