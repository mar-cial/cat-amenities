import Link from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { ChildsResult } from '../model/childsResponse';
import ChildDetailLabelView from './ChildDetailLabelView';

type Props = {
  c: ChildsResult;
};

const ChildDetailContainerView = ({ c }: Props) => {
  return (
    <div className="grid gap-1 p-2 shadow-md">
      <ChildDetailLabelView propTitle={'ID'} propValue={c.id.toString()} />
      <ChildDetailLabelView propTitle={'NAME'} propValue={c.name} />
      <ChildDetailLabelView
        propTitle={'SEO FRIENDLY'}
        propValue={c.seo_friendly}
      />
      <ChildDetailLabelView
        propTitle={'PROPERTY CATEGORY'}
        propValue={c.property_category.toString()}
      />
      <ChildDetailLabelView
        propTitle="AMENITY PARENT"
        propValue={c.amenity_parent.toString()}
      />
      <div className="flex items-center justify-between">
        <p className="text-sm">LEARN MORE</p>
        <Link href={`/childs/detail/${c.id}`} passHref>
          <a className="">
            <BiLinkExternal />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ChildDetailContainerView;
