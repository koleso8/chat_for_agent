import React from 'react';
import BGForOutlet from './BGForOutlet';
import ChatModal from './ChatModal';

const Home = () => {
  return (
    <div className="text-white h-[96%]">
      <BGForOutlet />
      <ChatModal>
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="" className="w-36" />

          <h3 className="text-2xl font-bold text-center text-white mb-4">
            Hi! I`m Agent, your DeFi Companion.
          </h3>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xl font-bold transition-colors  h-10 px-4 py-2  w-full active">
            Get started
          </button>
        </div>
      </ChatModal>
    </div>
  );
};

export default Home;
