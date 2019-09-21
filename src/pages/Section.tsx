import React from 'react';
import useRouter from 'use-react-router';
import SectionHeader from '../component/SectionHeader';

const SectionPage: React.FC = () => {
  const {
    match: { params },
  } = useRouter<{ step: string }>();
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
