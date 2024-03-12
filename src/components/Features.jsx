import React from 'react';

import boxandbowl from '../assets/images/boxandbowl.png';
import inubill from '../assets/images/INUBILL.jpg';
const Features = () => {
  return (
    <section id='features' style={{ backgroundColor: '#ececec' }}>
      {/* Flex Container */}
      {/* <img src={inubill} alt='' className='w-full' /> */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        {/* What's Different */}
        
        
        

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Choose a Wallet
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Choose a Wallet
              </h3>
              <p className='text-darkGrayishBlue'>
                A Sui wallet is essential to use, trade, or hodl $SWAG
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Buy $SUI
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Buy $SUI
              </h3>
              <p className='text-darkGrayishBlue'>
                $SUI can be purchased across all major exchanges:
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Exchange for $SWAG
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Exchange for $SWAG
              </h3>
              <p className='text-darkGrayishBlue'>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
