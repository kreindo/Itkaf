import Image from 'next/image';
import { SiCanva } from 'react-icons/si';
import { MdWeb, MdVideocam } from 'react-icons/md';

const Courses = () => {
  return (
    <div className="py-20 container mx-auto">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold py-10">Beberapa pilihan kelas</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 :gap-5">
        <div className="flex gap-8 shadow-md p-8 rounded-xl">
          <div className="w-16 h-16 flex justify-center items-center">
            <SiCanva size={32} />
          </div>
          <div>
            <h2 className="text-1xl font-semibold">Canva Design</h2>
            <p>Belajar design poster modern dengan menggunakan canva.</p>
          </div>
        </div>
        <div className="flex gap-8 shadow-md p-8 rounded-xl">
          <div className="w-16 h-16 flex justify-center items-center">
            <MdVideocam size={32} />
          </div>
          <div>
            <h2 className="text-1xl font-semibold">Canva Video Editing</h2>
            <p>Belajar mengedit video menggunakan canva.</p>
          </div>
        </div>
        <div className="flex gap-8 shadow-md p-8 rounded-xl">
          <div className="w-16 h-16 flex justify-center items-center">
            <MdWeb size={32} />
          </div>
          <div>
            <h2 className="text-1xl font-semibold">Landing Page</h2>
            <p>
              Belajar membuat landing page dengan menggunakan HTML, CSS, dan
              Javascript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
