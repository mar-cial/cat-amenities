import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import MainContainerView from '../../components/MainContainerView';
import PageHeaderView from '../../components/PageHeaderView';
import { Datum, ParentsResult } from '../../model/parentsResponse';

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Response = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-parents/'
  );

  const parents: ParentsResult = await res.json();

  const paths = parents.data.map((p) => ({
    params: { category: p.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res: Response = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-parents/'
  );

  const parents: ParentsResult = await res.json();

  const parent: Datum | undefined = parents.data.find(
    (p) => p.id.toString() == params?.category
  );

  if (!parent) {
    return {
      notFound: true,
    };
  }
  return {
    props: { parent },
  };
};

const PropertyCategory = ({
  parent,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <div>
      <PageHeaderView />

      <MainContainerView>
        <h2>ola</h2>
      </MainContainerView>
    </div>
  );
};

export default PropertyCategory;
