const MessageAgent = ({ children = ' Okey, send me your code' }) => {
  return (
    <div className=" rounded-lg impCard mr-auto ">
      <p className="typewriter">{children}</p>
    </div>
  );
};

export default MessageAgent;
