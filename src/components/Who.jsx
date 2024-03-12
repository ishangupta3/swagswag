import React from "react";
import mainimagedog from '../assets/images/mainimagedog.png';
import group7 from '../assets/images/group7.png';

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 px-8">
      <h1 className="text-4xl font-bold mb-8">WHO TF IS HE?</h1>
      <div className="relative">
        <img className="w-full max-w-screen-lg mx-auto" alt="Asset INU" src={group7} />
      </div>
      <p className="max-w-screen-lg text-xl font-normal mt-8">
        <span className="font-medium">HOBBIES: </span>
        <span className="font-light">
          Being a menace to society, burning $$$, clubbing, and sometimes being a crypto coin (his only redeeming quality).
        </span>
      </p>
    </div>
  );
};

export default AboutSection;