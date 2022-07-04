import { NextPage } from 'next';
import PageHeaderView from '../components/PageHeaderView';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <PageHeaderView />

      <div className="grid md:grid-cols-8 lg:grid-cols-12">
        <div className="flex flex-col items-center justify-center md:col-start-3 md:col-span-4 lg:col-start-4 lg:col-span-6">
          <h2 className="text-4xl font-bold">Not found!</h2>
          <p>Click the logo above to go back.</p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
