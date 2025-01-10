import Input from './Input';
import MessageAgent from './MessageAgent';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MessageClient from './MessageClient';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoading as selectIsLoading,
  selectResponse,
  selectThank,
  selectWait,
} from '../../redux/messages/selectors';
import { addThank, addWait, delThankAndWait } from '../../redux/messages/slice';

const AgentTraining = () => {
  const [userCode, setUserCode] = useState(null);
  const dispatch = useDispatch();
  const thank = useSelector(selectThank);
  const wait = useSelector(selectWait);
  const isLoading = useSelector(selectIsLoading);
  const response = useSelector(selectResponse);

  const sendAwait = () => {
    setTimeout(() => {
      dispatch(addThank());
    }, 1500);
    setTimeout(() => {
      dispatch(addWait());
    }, 3000);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    dispatch(delThankAndWait());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-between h-full overflow-y-scroll w-full">
      <div className="flex flex-col gap-2  pb-20 ">
        <MessageAgent />
        {userCode && <MessageClient>{userCode}</MessageClient>}
        {isLoading && sendAwait()}

        {thank && <MessageAgent>{thank}</MessageAgent>}
        {wait && <MessageAgent>{wait}</MessageAgent>}
        {thank && wait && response && <MessageAgent>{response}</MessageAgent>}
      </div>

      <div className="fixed bottom-3 w-4/6">
        <Input setUserCode={setUserCode} />
      </div>
    </div>
  );
};

export default AgentTraining;
