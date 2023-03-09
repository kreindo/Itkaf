import { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Daftar = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      id="daftar"
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <div className="flex flex-col justify-between items-center md:flex-row md:items-center xl:flex-row">
            <div className="h-full w-full">
              <Image
                src="/assets/Illustration3.svg"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </div>
            {/* <div className="p-10" /> */}
            <iframe
              className="rounded-xl shadow-md"
              src="https://whatsform.com/DGe42E"
              width="90%"
              height="700"
            ></iframe>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Daftar;
