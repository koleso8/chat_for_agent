import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Button from './Button';
import Container from './Container';

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header className=" ">
      <section className="pt-4 md:pt-0">
        <Container>
          <div
            className="flex items-center justify-between w-full relative z-10"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <Button text={'CA'} to={'#123'} />
            <Button text={'ACADEMY'} link={'chat'} />
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
