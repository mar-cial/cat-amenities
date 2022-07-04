import Link from 'next/link';
import { FC } from 'react';

const PageHeaderView: FC = () => {
  return (
    <header className="text-center">
      <Link href="/" passHref>
        <a>
          <h1 className="px-6 py-4 text-4xl font-title">Doorvel.</h1>
        </a>
      </Link>
    </header>
  );
};

export default PageHeaderView;
