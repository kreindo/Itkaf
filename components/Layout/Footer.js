import React from 'react';
import LogoVPN from '../../public/assets/Logo.svg';
import Facebook from '../../public/assets/Icon/facebook.svg';
import Twitter from '../../public/assets/Icon/twitter.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <LogoVPN className="h-8 w-auto mb-6" />
          <div className="flex w-full mt-2 mb-8 mx-2">
            <a
              href="https://facebook.com"
              className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - ITKAF</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
