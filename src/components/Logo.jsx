import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Logo = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="relative flex items-center justify-center w-300 md:w-[500] mb-32 md:mb-40 pt-16 md:pt-32">
      <img
        data-aos="zoom-in"
        data-aos-duration="2000"
        src="/logoHeroMain.png"
        alt=""
        className="logo-main"
      />
      <img
        data-aos="zoom-in"
        data-aos-duration="2000"
        src="/logoHeroDots.png"
        alt=""
        className="logo-dots"
      />
    </div>
  );
};

export default Logo;
