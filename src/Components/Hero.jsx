import React from 'react';
import HeroPng from '../assets/Lines.png';


const Hero = ({ togglePlay }) => {
  return (
    <>
      <div className="py-12 sm:py-0 duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-5xl font-semibold">
                Unlock The Power Of <br></br>
                <span className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Digital Marketing
                </span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify"
              >
                Welcome to LeeHarvey, a forward-thinking digital marketing
                agency where creativity meets technology. Established in [Year],
                our team is driven by a passion for delivering cutting-edge
                solutions in the digital world. We specialize in utilizing the
                React framework to build dynamic, responsive websites and
                applications, ensuring a seamless user experience.
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Free stratergy Session
                </button>
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="" className="" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
