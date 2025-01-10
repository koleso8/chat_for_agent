const MessageAgent = ({
  children = ' Okey, send me your code',
  typing = 'typewriter',
  animation = false,
}) => {
  return (
    <div
      className={`rounded-lg impCard mr-auto max-w-[780px] overflow-auto ${
        animation ? 'fadeResp' : ''
      }`}
    >
      <p className={typing}>{children}</p>
    </div>
  );
};

export default MessageAgent;
