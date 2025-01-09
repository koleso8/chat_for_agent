import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav
      className="flex gap-2"
      data-aos="zoom-in"
      data-aos-duration="4000"
      data-aos-anchor-placement="top-bottom"
    >
      <a
        href="x"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center hover:scale-105 transition-all hover:border-[#6ebefb]"
      >
        <FaXTwitter color="#fff" size={30} />
      </a>
      <a
        href="tg"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center hover:scale-105 transition-all hover:border-[#6ebefb]"
      >
        <FaTelegramPlane color="#fff" size={30} />
      </a>
    </nav>
  );
};

export default Navigation;
