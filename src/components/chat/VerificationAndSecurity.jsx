import React from 'react';
import Input from './Input';
import BGForOutlet from './BGForOutlet';

const VerificationAndSecurity = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <BGForOutlet bottom={false} />
      <p className="text-white">Verification and Security (тоже soon)</p>
      <Input />
    </div>
  );
};

export default VerificationAndSecurity;
