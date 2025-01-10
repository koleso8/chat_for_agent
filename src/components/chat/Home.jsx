import { useEffect } from 'react';
import BGForOutlet from './BGForOutlet';
import ChatModal from './ChatModal';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delThankAndWait, falseLoading } from '../../redux/messages/slice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(delThankAndWait());
    dispatch(falseLoading());
  }, [dispatch]);

  return (
    <div className="text-white h-[96%]">
      <BGForOutlet />
      <ChatModal>
        <div className="flex flex-col items-center ">
          <img src="/logo.png" alt="" className="w-36" />

          <h3 className="text-2xl font-bold text-center text-white mb-4">
            Hi! I`m Agent, your AI Companion.
          </h3>
          <Link
            to={'/agent_training'}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xl font-bold transition-colors  h-10 px-4 py-2  w-full active cursor-pointer static z-50"
          >
            Hello, update my Agent code
          </Link>
        </div>
      </ChatModal>
    </div>
  );
};

export default Home;
