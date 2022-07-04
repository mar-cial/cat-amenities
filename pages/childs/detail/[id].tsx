import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import ChildDetailLabelView from '../../../components/ChildDetailLabelView';
import MainContainerView from '../../../components/MainContainerView';
import PageHeaderView from '../../../components/PageHeaderView';
import { ChildsResponse, ChildsResult } from '../../../model/childsResponse';

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Response = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-childs/'
  );

  const childsResponse: ChildsResponse = await res.json();
  const nPaths = [...Array(childsResponse.count).keys()];
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
    `http://54.177.198.128:8001/api/cat-amenities-childs/?id=${params?.id}`
  );

  const childs: ChildsResponse = await res.json();

  const child: ChildsResult | undefined = childs.results.find(
    (c) => c.id.toString() == params?.id
  );

  if (!child) {
    return {
      notFound: true,
    };
  }

  return {
    props: { child },
  };
};

const ItemDetail: NextPage = ({
  child,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <div>
      <PageHeaderView />

      <MainContainerView>
        <div className="flex flex-col items-center justify-center gap-4 py-6">
          <header className="flex flex-col text-center">
            <p className="text-sm">Nombre del producto</p>
            <h2 className="text-4xl font-bold">{child.name}</h2>
          </header>
          <div className="w-full px-6 md:w-1/2 md:px-0 ">
            <ChildDetailLabelView propTitle="ID" propValue={child.id} />
            <ChildDetailLabelView
              propTitle="SEO FRIENDLY"
              propValue={child.seo_friendly}
            />
            <ChildDetailLabelView
              propTitle="PROPERTY CATEGORY"
              propValue={child.property_category}
            />
            <ChildDetailLabelView
              propTitle="AMENITY PARENT"
              propValue={child.amenity_parent}
            />
          </div>
        </div>
      </MainContainerView>
    </div>
  );
};

export default ItemDetail;
