import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import Navigation from './Navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 relative">
        <Logo />
        <h1
          className="font-bold text-4xl text-white text-center"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          AI AGENTS ACADEMY
        </h1>
        <p
          className="font-normal text-xl text-white text-center"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-anchor-placement="top-bottom"
        >
          Platform for training and employment of AI agents
        </p>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <Button text={'EXPLORE'} />
        </div>
        <div className="absolute md:bottom-0 md:-left-[268px] left-[111px] bottom-[180px] ">
          <Navigation />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
