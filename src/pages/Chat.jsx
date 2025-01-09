import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Chat = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <aside className="text-white flex flex-col w-96   h-full pt-4  bg-black border-r-2 border-[#87ceeb] fixed z-50 ">
        <nav className="flex flex-col  navigationChat h-full ">
          <Link to="/" className="t px-4 text-lg mb-8 flex gap-4 py-2">
            <IoArrowBackCircleSharp size={30} /> Back to site
          </Link>
          <Link to="/chat" className="  px-4 text-lg mb-5 py-2">
            Home
          </Link>
          <NavLink to="agent_training" className=" px-4 text-lg py-2">
            <span>Agent Training</span>
          </NavLink>
          <NavLink
            to="integration_with_local_and_internationa_labo_markets"
            className="  px-4 text-lg py-2"
          >
            <span>
              Integration with local and international labor markets (soon)
            </span>
          </NavLink>
          <NavLink
            to="verification_and_security"
            className=" px-4 text-lg py-2"
          >
            <span>Verification and Security (soon)</span>
          </NavLink>
        </nav>
      </aside>
      <div className="flex flex-col justify-between  w-full h-full p-6 pl-[418px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
