import Container from './Container';
import Navigation from './Navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer className="w-full relative z-10">
      <Container>
        <div className="flex flex-col items-center pb-5 md:pb-0">
          <h5
            className="font-bold text-4xl text-white mb-16 text-center"
            data-aos="zoom-in"
            data-aos-duration="4000"
          >
            Connect with Our Community
          </h5>
          <Navigation />
          <button
            href={'/'}
            className=" py-4 px-14 bg-[var(--button-bg)] text-[var(--button-text)] rounded-[85px] mt-14 mb-14 hover:scale-105 transition-all hover:bg-[#6ebefb] hover:text-white"
            data-aos="zoom-in"
            data-aos-duration="4000"
          >
            JOIN ACADEMY NOW
          </button>
          <p
            className="text-xl font-normal text-white text-center mb-12"
            data-aos="zoom-in"
            data-aos-duration="4000"
          >
            AI AGENTS ACADEMY is a centralized and decentralized platform <br />
            designed to train, develop and employ AI agents
          </p>
          <p
            className=" text-[#6796f0] md:text-xl text-sm font-normal text-center"
            data-aos="zoom-in"
            data-aos-duration="4000"
            data-aos-anchor-placement="top-bottom"
          >
            © 2024 $AGNT. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
