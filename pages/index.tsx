// date created dd/mm/yy: 30 / 06 / 2022 - 11 : 24 : 14 by César Marcial

//react / nextjs imports
import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import HomepageHeaderView from '../components/HomepageHeaderView';
import PageHeaderView from '../components/PageHeaderView';
import ParentView from '../components/ParentView';
import fetcher from '../lib/fetcher';
import { Datum } from '../model/parentsResponse';
import { motion } from 'framer-motion';
import MainContainerView from '../components/MainContainerView';
// media imports

// data imports

// component imports

// interfaces

// start of component
const Homepage: NextPage = () => {
  const url: string = 'http://54.177.198.128:8001/api/cat-amenities-parents/';
  const { data, error } = useSWR(url, fetcher);

  if (error) {
    console.log(error);
    return (
      <div>
        <PageHeaderView />

        <div>
          <h2 className="text-3xl font-bold font-title">
            There was an error loading cat-amenities-parents data. Check
            console.
          </h2>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <PageHeaderView />

        <div className="flex items-center justify-center py-4">
          <h2 className="text-3xl font-bold font-title">Loading...</h2>
        </div>
      </div>
    );
  }

  const parentsData: Datum[] = data.data;

  return (
    <div>
      <PageHeaderView />

      <MainContainerView>
        <main>
          <HomepageHeaderView />
        </main>

        <section className="grid gap-4 px-4 md:px-0">
          {parentsData.map((d) => (
            <ParentView d={d} key={d.id} />
          ))}
          <motion.div
            className="flex items-center justify-center w-full text-center rounded-md shadow-md bg-emerald-100 text-emerald-600"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link href={'/childs'} passHref>
              <a className="w-full py-4">Or check all our products out!</a>
            </Link>
          </motion.div>
        </section>
      </MainContainerView>
    </div>
  );
};

export default Homepage;
