import React from 'react';

type Props = {
  propTitle: string;
  propValue: string;
};

const ChildDetailLabelView = (props: Props) => {
  return (
    <div className="flex items-center justify-between pb-1 border-b-2">
      <p className="text-sm">{props.propTitle}</p>
      <p className="text-lg text-right">{props.propValue}</p>
    </div>
  );
};

export default ChildDetailLabelView;
