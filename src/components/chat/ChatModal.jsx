import React from 'react';

const ChatModal = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full w-full ">
      <div className="flex items-center justify-center p-3 bg-black border-[1px] rounded border-[#87ceeb]">
        {children}
      </div>
    </div>
  );
};

export default ChatModal;
