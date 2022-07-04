import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MainContainerView = ({ children }: Props) => {
  return (
    <div className="grid md:grid-cols-8 lg:grid-cols-12">
      <div className=" md:col-start-3 md:col-span-4 lg:col-start-4 lg:col-span-6">
        {children}
      </div>
    </div>
  );
};

export default MainContainerView;
