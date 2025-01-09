import Input from './Input';
import BGForOutlet from './BGForOutlet';
import MessageAgent from './MessageAgent';

const AgentTraining = () => {
  return (
    <div className="flex flex-col justify-between h-full overflow-y-scroll w-full ">
      {/* <BGForOutlet bottom={false} /> */}

      <div>
        <MessageAgent />
      </div>

      <div className="fixed bottom-3 w-4/6">
        <Input />
      </div>
    </div>
  );
};

export default AgentTraining;
