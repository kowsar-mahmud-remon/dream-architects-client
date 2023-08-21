import React from 'react';
import facebook from '../../assets/FacebookOctDenoiserBeauty_001 copy.png';
import pinterest from '../../assets/3D Pinterest.png';
import twitter from '../../assets/TwitterOctDenoiserBeauty_001 copy.png';
import youtube from '../../assets/YoutubeOctDenoiserBeauty_001 copy (1).png';
import instagram from '../../assets/InstagramOctDenoiserBeauty_001 copy.png';
import linkedin from '../../assets/LinkedInOctDenoiserBeauty_001 copy.png';

const GetInTouch = () => {
  return (
    <div className='flex justify-center py-10 px-5 lg:px-0'>
      <div className="text-center lg:w-3/4">
        <h1 className="text-4xl lg:text-6xl font-bold text-indigo-600">Get In Touch!
        </h1>
        <h4 className='text-lg font-semibold mt-8'>WE ARE LOOKING FORWARD TO START A PROJECT WITH YOU!
        </h4>
        <p className="mt-4 text-lg">Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet convallis erat. Class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus nec dolor suscipit faucibus.
        </p>
        <div className=" py-10">
          <div className="flex justify-center mt-3 lg:mt-0">
            <div className="social-icon flex space-x-2 items-center">
              <img className='cursor-pointer' src={facebook} alt="Facebook" />
              <img className='cursor-pointer' src={pinterest} alt="Pinterest" />
              <img className='cursor-pointer' src={twitter} alt="Twitter" />
              <img className='cursor-pointer' src={youtube} alt="YouTube" />
              <img className='cursor-pointer' src={instagram} alt="Instagram" />
              <img className='cursor-pointer' src={linkedin} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;