// date created dd/mm/yy: 30 / 06 / 2022 - 11 : 24 : 14 by César Marcial

//react / nextjs imports
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';

// media imports

// data imports

// component imports

// interfaces
export interface ResponseData {
  data: Datum[];
  date_recived: DateRecived;
}

export interface Datum {
  id: number;
  property_category_id: number;
  name: string;
  seo_friendly: string;
  active_record: boolean;
  created_at: Date;
  updated_at: Date;
  created_by: string;
}

export interface DateRecived {
  format: string;
}

// next data fetching

// start of component
const Homepage: NextPage = () => {
  console.log(parents);

  return (
    <div>
      <nav className="p-4">
        <h1 className="text-4xl font-bold tracking-widest font-title">
          Doorvel.
        </h1>
      </nav>

      <main className="flex flex-col items-center justify-center px-12 py-4 md:py-8">
        <section className="grid w-full gap-6 md:grid-cols-2">
          <div className="flex items-center justify-center w-full">
            <div className="w-1/2">
              <Image
                src={'/cat.png'}
                width={880}
                height={1428}
                layout="responsive"
              />
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4"></div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
