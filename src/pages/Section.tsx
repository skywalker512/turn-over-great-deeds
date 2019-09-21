import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SectionHeader from '../component/SectionHeader';

const SectionPage: React.FC<RouteComponentProps<{ step: string }>> = ({
  match: { params },
}) => {
  const { step } = params;
  const stepNum = parseInt(step, 10);
  return (
    <>
      <SectionHeader />
      <div>
        每一个关卡:
        {stepNum}
      </div>
    </>
  );
};

export default SectionPage;
