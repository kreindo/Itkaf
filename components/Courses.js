import Image from 'next/image';

const Courses = () => {
  return (
    <div className="py-20 container mx-auto">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold py-10">Temukan Passion Anda!</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 :gap-5">
        <div className="flex gap-8 shadow-md p-8 rounded-xl">
          <div className="w-16 h-16 relative">
            <Image
              className="absolute"
              src="/assets/Free.png"
              objectFit="contain"
              layout="fill"
              alt="image"
            />
          </div>
          <div>
            <h2 className="text-1xl font-semibold">Passion 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quae.
            </p>
          </div>
        </div>
        <div className="flex gap-8 shadow-md p-8 rounded-xl">
          <div className="w-16 h-16 relative">
            <Image
              className="absolute"
              src="/assets/Free.png"
              objectFit="contain"
              layout="fill"
              alt="image"
            />
          </div>
          <div>
            <h2 className="text-1xl font-semibold">Passion 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quae.
            </p>
          </div>
        </div>
        <div className="flex gap-8 shadow-md p-8 rounded-xl">
          <div className="w-16 h-16 relative">
            <Image
              className="absolute"
              src="/assets/Free.png"
              objectFit="contain"
              layout="fill"
              alt="image"
            />
          </div>
          <div>
            <h2 className="text-1xl font-semibold">Passion 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
