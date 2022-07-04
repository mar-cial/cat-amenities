import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import ChildDetailContainerView from '../../components/ChildDetailContainerView';
import MainContainerView from '../../components/MainContainerView';
import PageHeaderView from '../../components/PageHeaderView';
import { ChildsResponse, ChildsResult } from '../../model/childsResponse';

export const getStaticPaths: GetStaticPaths = async () => {
  const nPaths = [...Array(16).keys()];
  nPaths.shift();
  const paths = nPaths.map((c) => ({
    params: { id: c.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res: Response = await fetch(
    `http://54.177.198.128:8001/api/cat-amenities-childs/?property_category_id=${params?.id}`
  );

  const childs: ChildsResponse = await res.json();

  const children = childs.results.map((c) => c);

  if (!children) {
    return {
      notFound: true,
    };
  }

  return {
    props: { children },
  };
};

const CategoriesDetail = ({
  children,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <div>
      <PageHeaderView />
      <MainContainerView>
        <div className="grid gap-4 py-6">
          {children.map((c: ChildsResult) => (
            <ChildDetailContainerView c={c} key={c.id} />
          ))}
        </div>
      </MainContainerView>
    </div>
  );
};

export default CategoriesDetail;
