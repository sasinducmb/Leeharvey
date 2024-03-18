import React from 'react';
import AppStoreImg from '../assets/website/app_store.png';
import PlayStoreImg from '../assets/website/play_store.png';

const GooglePlay = () => {
  return (
    <>
      <div className="container py-5 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-2xl text-center sm:text-4xl font-semibold "
          >
            Why Choose LeeHarvey?
          </h1>

          <h1
            data-aos="fade-up"
            className="text-2xl text-center sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary "
          >
            Innovative Solutions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center sm:px-20 text-justify"
          >
            We stay ahead of the curve, continuously exploring new technologies
            and strategies. Customized Approach: Every client is unique, and so
            are our solutions – tailored to meet your specific goals and
            challenges.
          </p>
          <h1
            data-aos="fade-up"
            className="text-lg text-center sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary "
          >
            Proven Results
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center sm:px-20"
          >
            We measure our success by your success. Our focus is on delivering
            measurable outcomes
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a href="#" data-aos="fade-up" data-aos-delay="500">
              <img
                src={AppStoreImg}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="#" data-aos="fade-up" data-aos-delay="700">
              <img
                src={PlayStoreImg}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GooglePlay;
