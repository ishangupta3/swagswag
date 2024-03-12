import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

import mainimagedog from "../assets/images/mainimagedog.png";
import mainimagecaption from "../assets/images/group8main.png";
import seriousBiz from "../assets/images/wolf1.png";
import seriousBizCaption from "../assets/images/group8wolf.png"
import millionaire from "../assets/images/millionaire.png";
import millionaireCaption from "../assets/images/millionairecaption.png"
import jong from "../assets/images/jong.png";
import jongcaption from "../assets/images/jongcaption.png";

export default function Slider() {
  const sliderData = [
    {
      id: 1,
      title: "Serious Biz",
      url: "../assets/images/wolf1.png",
    },
    {
      id: 2,
      title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
      url: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
    },
    {
      id: 3,
      title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
      url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    },
    {
      id: 4,
      title: "Elegant Woman in City Setting with a Chic Attitude",
      url: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
    },
    {
      id: 5,
      title: "Majestic Tree in Vibrant Autumn Colors",
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];

  return (
    <div className="flex justify-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
            <CarouselItem>
              <div className="p-1 flex flex-col items-center">
              <h2 className="text-lg font-bold mb-2 bg-black text-white py-2 px-4">{"Serious Bizz"}</h2>                <img className="w-full h-auto" alt={"Serious Biz"} src={seriousBiz} />
                <img className="w-full" alt={"Serious Biz"} src={seriousBizCaption} />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1 flex flex-col items-center">
                <h2 className="text-lg font-bold mb-2 bg-black text-white py-2 px-4">{"Main Character"}</h2>
                <img className="w-full h-auto" alt={"Serious Biz"} src={mainimagedog} />
                <img className="w-full h-auto" alt={"Serious Biz"} src={mainimagecaption} />
              </div>
            </CarouselItem>


            <CarouselItem>
              <div className="p-1 flex flex-col items-center">
                <h2 className="text-lg font-bold mb-2 bg-black text-white py-2 px-4">{"Moleionaire"}</h2>
                <img className="w-full h-auto" alt={"Serious Biz"} src={millionaire} />
                <img className="w-full h-auto" alt={"Serious Biz"} src={millionaireCaption} />
              </div>
            </CarouselItem>


            <CarouselItem>
              <div className="p-1 flex flex-col items-center">
                <h2 className="text-lg font-bold mb-2 bg-black text-white py-2 px-4">{"SWAG JONG"}</h2>
                <img className="w-full h-auto" alt={"Serious Biz"} src={jong} />
                <img className="w-full h-auto" alt={"Serious Biz"} src={jongcaption} />
              </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
