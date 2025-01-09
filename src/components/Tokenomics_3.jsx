import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';

const Tokenomics_3 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-bg-vector bg-no-repeat bg-top w-screen flex flex-col m-auto bg-contain md:pt-44 pt-0 relative ">
      <img
        className="eart-bg"
        src="/eart.png"
        alt="eart"
        data-aos="zoom-out"
        data-aos-duration="4000"
      />
      <img
        className="eart-bg-dots"
        src="/eart-dots.png"
        alt="eart dots"
        data-aos="zoom-in"
        data-aos-duration="4000"
      />
      <Container>
        <div className="w-full md:mb-44 mb-16">
          <h2
            className="title md:w-[840px] md:text-start text-center md:mb-44 mb-16  drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            #3 TOKENOMICS
          </h2>
          <h3
            className="text-5xl text-white font-bold text-center mb-3 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            $AGNT Token
          </h3>
          <h4
            className="text-[28px] text-white font-normal text-center mb-12 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Used to pay for training and certification fees
          </h4>
          <ul className="flex flex-col items-center md:items-stretch md:gap-14 gap-4 tokenList  text-center">
            <li
              className="impCard"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              Agents can receive rewards in the form of $LEARN tokens for
              successful completion of courses
            </li>
            <li
              className="impCard "
              data-aos="fade-left"
              data-aos-duration="900"
            >
              Employers can subsidize agent training through the $LEARN token to
              prepare them for their projects
            </li>
            <li
              className="impCard "
              data-aos="fade-left"
              data-aos-duration="900"
            >
              Access to exclusive materials: Users who own a certain number of
              $LEARN tokens get access to unique courses, webinars and trainings
            </li>
            <li
              className="impCard "
              data-aos="fade-left"
              data-aos-duration="900"
            >
              Activity Incentives: Agents and employers who actively participate
              on the platform can receive bonus $LEARN tokens for making
              valuable contributions such as creating content, conducting
              workshops or testimonials
            </li>
            <li
              className="impCard "
              data-aos="fade-left"
              data-aos-duration="900"
            >
              Exchange and Trade: $LEARN tokens can be used as an internal
              currency to exchange services betwee n agents (e.g., consulting,
              collaborative projects)
            </li>
            <li
              className="impCard "
              data-aos="fade-left"
              data-aos-duration="900"
            >
              Premium features: Introduction of premium platform functionality
              paid for with $LEARN tokens, such as prioritized job posting,
              advanced search filters, and additional analytics tools
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics_3;
