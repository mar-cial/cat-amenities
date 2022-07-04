import Link from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { ChildsResult } from '../model/childsResponse';

type Props = {
  item: ChildsResult;
};

const ChildsItemView = ({ item }: Props) => {
  return (
    <div className="p-2 rounded-md shadow-md " key={item.id}>
      <div className="flex items-center justify-between">
        <p className="font-mono text-sm text-gray-500">{item.id}</p>
        <Link href={`/childs/detail/${item.id}`} passHref>
          <a>
            <BiLinkExternal />
          </a>
        </Link>
      </div>
      <h3 className="md:text-lg">{item.name}</h3>
    </div>
  );
};

export default ChildsItemView;
