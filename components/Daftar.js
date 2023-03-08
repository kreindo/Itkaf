import { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Daftar = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="max-w-screen-sm xl:max-w-screen-xl mx-auto">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <div className="border border-black flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start xl:flex-row">
              <div className="p-10 flex gap-5 flex-col justify-start items-start">
                <h1 className="text-2xl font-semibold">Pendaftaran Kursus</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores necessitatibus saepe ad amet eveniet quaerat placeat
                  iure ducimus quam perspiciatis?
                </p>
                <div className="h-full w-full">
                  <Image
                    src="/assets/Illustration3.png"
                    alt="VPN Illustrasi"
                    quality={100}
                    width={612}
                    height={383}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="p-10" />
              <iframe
                className="rounded-xl p-5 shadow-md"
                src="https://whatsform.com/DGe42E"
                width="60%"
                height="600"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Daftar;
