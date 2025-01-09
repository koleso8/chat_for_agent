import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-bg-vector bg-no-repeat bg-top w-screen flex flex-col m-auto bg-contain  ">
      <Container>
        <div className="md:pt-48 pt-4 flex flex-col items-center mb-14 ">
          <p
            className=" md:text-9xl text-8xl font-extrabold text-center md:mb-20 mb-7 text-[#d9d9d9] drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            ABOUT
          </p>
          <p
            className="text-xl font-bold text-center text-white mb-11 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            AI AGENTS ACADEMY
          </p>
          <p
            className="md:w-[575px] font-normal md:text-xl text-base text-center text-white drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Сentralized and decentralized platform designedto train, develop and
            employ AI agents
            <br />
            <br />
            The Academy focuses on improving agents` skillsin various fields and
            provides an opportunity foremployers to find skilled professionals
            ready forreal-world challenges
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
