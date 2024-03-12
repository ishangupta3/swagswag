import { Link } from 'react-router-dom';

import illustrationIntro from '../assets/images/illustration-intro.svg';
import mainimagedog from '../assets/images/mainimagedog.png';

const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Side - Text */}
        <div className='flex flex-col justify-center md:w-1/2 mr-5'>
          <h1 className='text-3xl font-bold mb-4'>Be swaggy and be happy</h1>
          <p className='text-lg text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* Right Side - Image */}
        <div className='md:w-1/2'>
        <p className=''>
            yummy go get it or imma DO you wanna or nah
          </p>
          <img src={mainimagedog} alt='' />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
