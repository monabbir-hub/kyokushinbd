import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

const HalughatBranch = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-s2 md:shadow-xl pt-[85px]">
        <div className="relative w-full aspect-[3/1]">
          {" "}
          {/* Maintain a 3:1 aspect ratio */}
          <Image
            src="/assets/branches/haluaghat.jpeg"
            layout="fill"
            objectFit="cover" // Fill the container without empty spaces
            alt="HaluaghatBranch"
          />
        </div>
      </div>

      {/* Contents */}
      <div className="bg-white w-full items-center justify-between">
        <div className="text-center my-2">
          <h2 className="text-rose-900 font-bold text-[36px]">
            Kyokushin Karate Haluaghat Branch
          </h2>
          <p className="font-medium text-[26px] py-1">
            Haluaghat Uttar Bazar, Haluaghat, Mymensingh
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-10">
          <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/branches/sumon.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h3 className="text-rose-900 font-bold text-[30px]">
              Senpai Shahariyajjaman Sumon
            </h3>
            <p className="font-medium text-[20px]">
              Black Belt 2nd Dan from Japan
            </p>
            <p className="font-medium text-[20px]">
              Dojo Operator, Kyokushin Bangladesh
            </p>
            <p>Contact: +880 1823 184997</p>

            {/* Wrapper for icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4 md:ml-[7.5rem]">
              <Link
                href="https://www.facebook.com/kyokushinmymensingh/"
                passHref
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebookSquare className="text-rose-900 text-[50px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center ml-[150px] md:ml-[450px] mb-4">
        <div className="w-full md:w-[1000px] h-[300px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14449.80992684961!2d90.33335565390088!3d25.120388894164506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757b8355998396b%3A0x227b0f7ac1dba06a!2sHaluaghat%2C%20Bangladesh!5e0!3m2!1sen!2sca!4v1730957804972!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HalughatBranch;