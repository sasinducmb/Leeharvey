import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx';
import { IoLogoInstagram } from 'react-icons/io';
import { RxLinkedinLogo } from 'react-icons/rx';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <section class="duration-300 overflow-hidden p-6" id="contact">
      <h1
        data-aos="zoom-in"
        className="text-2xl sm:text-4xl font-bold max-w-[650px] mx-auto text-center font-curcise mt-4"
      >
        Contact Us
      </h1>
      <div class="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto duration-300 my-6 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
        <div>
          <h2 class="text-3xl font-extrabold">Get In Touch</h2>
          <p class="text-sm text-gray-400 mt-3">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>
          <form>
            <div class="space-y-4 mt-8">
              <input
                type="text"
                placeholder="Full Name"
                class="px-2 py-3 dark:bg-black dark:text w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              <input
                type="number"
                placeholder="Phone No."
                class="px-2 py-3  dark:bg-black dark:text w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                class="px-2 py-3  dark:bg-black dark:text w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />

              <textarea
                placeholder="Write Message"
                class="px-2 pt-3  dark:bg-black dark:text w-full text-sm border-b-2 focus:border-[#333] outline-none"
              ></textarea>
            </div>
            <button
              type="button"
              class="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#333] text-white hover:bg-[#222]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                class="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
          <ul class="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
            <li class="flex items-center hover:text-blue-500">
              <IoMailOutline size={20} />
              <a href="javascript:void(0)" class="text-current text-sm ml-3">
                <strong>info@leeharvey.co.uk</strong>
              </a>
            </li>
            <li class="flex items-center text-current hover:text-blue-500">
              <BsTelephone size={20} />
              <a href="javascript:void(0)" class="text-current text-sm ml-3">
                <strong>+158 996 888</strong>
              </a>
            </li>
          </ul>
        </div>
        <div class="z-10 relative h-full max-md:min-h-[350px]">
          <div class="bg-[#011c2b] rounded-lg p-6 max-lg:text-center">
            <h2 class="text-xl font-bold text-white">Contact Information</h2>
            <p class="text-sm text-gray-400 mt-3">
              Welcome to LeeHarvey, a forward-thinking digital marketing agency
              where creativity meets technology. Established in [Year], our team
              is driven by a passion for delivering cutting-edge solutions in
              the digital world. We specialize in utilizing the React framework
              to build dynamic, responsive websites and applications, ensuring a
              seamless user experience.
            </p>
            <ul class="mt-16 space-y-10">
              <li class="flex items-center max-lg:justify-center">
                <IoMailOutline size={25} />
                <a href="javascript:void(0)" class="text-white text-sm ml-3">
                  <strong>info@leeharvey.co.uk</strong>
                </a>
              </li>
              <li class="flex items-center max-lg:justify-center">
                <BsTelephone size={25} />
                <a href="javascript:void(0)" class="text-white text-sm ml-3">
                  <strong>+158 996 888</strong>
                </a>
              </li>
              <li class="flex items-center max-lg:justify-center">
                <IoLocationOutline size={25} />
                <a href="javascript:void(0)" class="text-white text-sm ml-3">
                  <strong>123 Street 256 House</strong>
                </a>
              </li>
            </ul>
            <ul class="flex max-lg:justify-center mt-16 space-x-4">
              <li class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <FaFacebookSquare size={25} />
                </a>
              </li>
              <li class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <IoLogoInstagram size={25} />
                </a>
              </li>
              <li class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <RxLinkedinLogo size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
