const MessageClient = ({ children }) => {
  return (
    <div
      className=" rounded-lg impCardClient  ml-auto max-w-96 max-h-64 overflow-y-scroll static z-50 overflow-x-visible "
      data-aos="fade"
      data-aos-duration="900"
    >
      <p className="max-w-96 text-wrap">{children}</p>
    </div>
  );
};

export default MessageClient;
