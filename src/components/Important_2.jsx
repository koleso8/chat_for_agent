import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';

const Important_2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container>
      <div className="w-full mb-20 ">
        <h2
          className="title md:w-[840px] md:text-start text-center md:mb-14 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          #2 Important functions and components
        </h2>
        <ul className="flex flex-col w-full items-center ">
          <li className="w-full">
            <h3
              className="impTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)] text-center md:text-start"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              A
            </h3>
            <h4
              className="impSubTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)] text-center md:text-start"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              Agent Training and Development
            </h4>
            <div className="flex flex-col md:flex-row gap-9 justify-center items-center ">
              <div
                className="impCard transition-all "
                data-aos="flip-right"
                data-aos-duration="900"
              >
                <h5 className="pb-5 font-bold text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  • PERSONALIZED TRAINING
                </h5>
                <p className="cardSub pb-5 text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Agents will take courses customized based on their current
                  skills and goals.The training will utilize adaptive learning
                </p>
                <h5 className="pb-5 font-bold text-center md:w-[360px] drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  • INTERACTIVE COURSES AND HANDS-ON ASSGNMENTS
                </h5>
                <p className="cardSub  text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  to improve weaknesses. Courses will range from basic AI skills
                  to complex areas such as machine learning, blockchain
                  development, and data analytics
                </p>
              </div>
              <div
                className="impCard "
                data-aos="flip-left"
                data-aos-duration="900"
              >
                <h5 className="pb-5 font-bold text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  • PROGRESS ASSESSMENTS
                </h5>
                <p className="cardSub pb-5 text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  The system will track agents` progress, make recommendations
                  for improvement, and refer them to additional courses or
                  hands-on training to develop missing skills.
                </p>
                <h5 className="pb-5 font-bold text-center  drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  • CERTIFICATION
                </h5>
                <p className="cardSub  text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Upon completion of the courses, agents can earn certificates
                  that will validate their skills and help employers select the
                  right talent
                </p>
              </div>
            </div>
          </li>
          <li className="w-full">
            <h3
              className="impTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)] text-center md:text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              B
            </h3>
            <h4
              className="impSubTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)] text-center md:text-start"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              Integration with local and international labor markets
            </h4>
            <div className="flex flex-col md:flex-row gap-9 justify-center items-center ">
              <div
                className="impCard "
                data-aos="flip-right"
                data-aos-duration="900"
              >
                <h5 className="pb-5 font-bold text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Access to international market:
                </h5>
                <p className="cardSub  text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  The platform will be open to employers and agents globally,
                  allowing them to find jobs and skilled professionals in any
                  country
                </p>
              </div>
              <div
                className="impCard "
                data-aos="flip-left"
                data-aos-duration="900"
              >
                <h5 className="pb-5 font-bold text-center  drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Adaptation for different markets:
                </h5>
                <p className="cardSub  text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Training and employment models will be adapted according to
                  the region, allowing for legislative and cultural differences
                </p>
              </div>
            </div>
          </li>
          <li className="w-full">
            <h3
              className="impTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)] text-center md:text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              C
            </h3>
            <h4
              className="impSubTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)] text-center md:text-start"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              Verification and Security
            </h4>
            <div className="flex flex-col md:flex-row gap-9 justify-center items-center ">
              <div
                className="impCard "
                data-aos="flip-right"
                data-aos-duration="900"
              >
                <h5 className="pb-5 font-bold text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Identity Verification:
                </h5>
                <p className="cardSub  text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  The platform will use a verification system (e.g. via e-mail,
                  KYC providers orlocal documents) to ensure that all agents are
                  real people with verified credentials
                </p>
              </div>
              <div
                className="impCard "
                data-aos="flip-left"
                data-aos-duration="900"
              >
                <h5 className="pb-5 font-bold text-center  drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Adaptation for different markets:
                </h5>
                <p className="cardSub  text-center drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
                  Training and employment models will be adapted according to
                  the region, allowing for legislative and cultural differences
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Important_2;
