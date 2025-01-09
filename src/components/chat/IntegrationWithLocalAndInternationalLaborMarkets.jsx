import React from 'react';
import Input from './Input';
import BGForOutlet from './BGForOutlet';

const IntegrationWithLocalAndInternationalLaborMarkets = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <BGForOutlet bottom={false} />
      <p className="text-white">
        Integration with local and international labor markets
      </p>
      <Input />
    </div>
  );
};

export default IntegrationWithLocalAndInternationalLaborMarkets;
