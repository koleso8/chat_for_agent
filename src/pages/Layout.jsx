import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center w-screen bg-[var(--background-main)]  bg-bg-pattern bg-repeat bg-right md:bg-center relative">
      <Toaster position="top-center" />
      <main className="min-h-screen w-full  relative z-10">{children}</main>
      <div className="bg"></div>
    </div>
  );
};

export default Layout;
