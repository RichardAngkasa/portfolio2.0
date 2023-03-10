/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import profile from "../assets/profile.png";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import temenOnline from "../assets/temenOnline.jpg";
import privateCO from "../assets/private.jpg";
// import glassLeft from "../assets/Left.svg";
// import glassCenter from "../assets/Center.svg";
// import glassRight from "../assets/Right.svg";
// import glassPattern from "../assets/glassPattern.svg"

export default function Home() {
  const [dialogFlag, setDialogFlag] = useState<boolean>(false);
  const [work1, setWork1] = useState<boolean>(false);
  const [work1Upper, setWork1Upper] = useState<boolean>(false);
  const [work2, setWork2] = useState<boolean>(false);
  const [work2Upper, setWork2Upper] = useState<boolean>(false);
  const [aboutMeUpper, setAboutMeUpper] = useState<boolean>(false);
  const [contactMeUpper, setContactMeUpper] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Richard Angkasa</title>
        <meta name="description" content="Train go tut tut tuuut" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style></style>
      </Head>
      <div className=" w-screen h-screen flex items-center justify-start bg-primary">
        <div className="w-full flex flex-col gap-5 ">
          <div className="font-game font-bold text-base px-4 relative">
            Richard Angkasa
          </div>
          <div className="overflow-clip relative">
            {/* train */}
            <div className="overflow-auto  bg-transparent  absolute w-full ">
              <div className="relative min-w-[90rem]  overflow-hidden z-50 shakeit ">
                {/* UPPER CONTENT */}
                <div className="grid grid-cols-4 bg-neutral-400 h-32 w-full ">
                  <div className="col-span-1 h-full flex flex-col items-start relative">
                    <div className="w-full shrink-0 px-4 z-50 bg-neutral-400 pt-8">
                      <div
                        className="p-4 border-4 bg-white border-black z-50 w-full"
                        onClick={() => {
                          work1Upper
                            ? setWork1Upper(false)
                            : setWork1Upper(true);
                        }}
                      >
                        <div className=" flex justify-between w-full items-center ">
                          <h1 className="font-game text-lg text-black">
                            Work 1
                          </h1>
                          <div className="flex justify-center items-center ">
                            <div className="ping  h-5 w-5 rounded-full bg-black  "></div>
                            <div className=" absolute h-5 w-5 rounded-full bg-white "></div>
                            <FaArrowAltCircleUp
                              className={`${
                                work1Upper ? "" : "rotate-180"
                              } cursor-pointer fill-black text-2xl duration-1000 absolute `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        work1Upper ? "" : "-translate-y-full"
                      } relative duration-1000 w-full h-full flex justify-end shrink-0  mt-2 z-40`}
                    >
                      <div
                        className={`${
                          work1Upper ? "bg-white" : "bg-neutral-300"
                        } text-sm font-game text-black w-2/3 mx-4  border-4 border-black absolute px-2 py-4 leading-6 duration-500 gap-2 flex flex-col`}
                      >
                        <li>Next.js</li> <li>Typescript</li>
                        <li>Tailwind</li>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 h-full flex flex-col items-start relative">
                    <div className="w-full shrink-0 px-4 z-50 bg-neutral-400 pt-8">
                      <div
                        className="p-4 border-4 bg-white border-black z-50 w-full"
                        onClick={() => {
                          work2Upper
                            ? setWork2Upper(false)
                            : setWork2Upper(true);
                        }}
                      >
                        <div className=" flex justify-between w-full items-center ">
                          <h1 className="font-game text-lg text-black">
                            Work 2
                          </h1>
                          <div className="flex justify-center items-center ">
                            <div className="ping  h-5 w-5 rounded-full bg-black  "></div>
                            <div className=" absolute h-5 w-5 rounded-full bg-white "></div>
                            <FaArrowAltCircleUp
                              className={`${
                                work2Upper ? "" : "rotate-180"
                              } cursor-pointer fill-black text-2xl duration-1000 absolute `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        work2Upper ? "" : "-translate-y-full "
                      }  relative duration-1000 w-full h-full flex justify-end shrink-0  mt-2 z-40`}
                    >
                      <div
                        className={`${
                          work2Upper ? "bg-white" : "bg-neutral-300"
                        } text-sm font-game text-black w-2/3 mx-4  border-4 border-black absolute px-2 py-4 leading-6 duration-500 gap-2 flex flex-col`}
                      >
                        <li>Figma</li> <li>Illustrator</li>
                        <li>Photoshop</li>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 h-full flex flex-col items-start relative">
                    <div className="w-full shrink-0 px-4 z-50 bg-neutral-400 pt-8">
                      <div
                        className="p-4 border-4 bg-white border-black z-50 w-full"
                        onClick={() => {
                          aboutMeUpper
                            ? setAboutMeUpper(false)
                            : setAboutMeUpper(true);
                        }}
                      >
                        <div className=" flex justify-between w-full items-center ">
                          <h1 className="font-game text-lg text-black">
                            About Me
                          </h1>
                          <div className="flex justify-center items-center ">
                            <div className="ping  h-5 w-5 rounded-full bg-black  "></div>
                            <div className=" absolute h-5 w-5 rounded-full bg-white "></div>
                            <FaArrowAltCircleUp
                              className={`${
                                aboutMeUpper ? "" : "rotate-180"
                              } cursor-pointer fill-black text-2xl duration-1000 absolute `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        aboutMeUpper ? "" : "-translate-y-full"
                      } relative duration-1000 w-full h-full flex justify-end shrink-0  mt-2 z-40`}
                    >
                      <div
                        className={`${
                          aboutMeUpper ? "bg-white" : "bg-neutral-300"
                        } text-sm font-game text-black w-2/3 mx-4  border-4 border-black absolute px-2 py-4 leading-6 duration-500 gap-2 flex flex-col`}
                      >
                        <li>Code</li> <li>Gym</li>
                        <li>Sleep</li>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 h-full flex items-start relative">
                    <div className="absolute w-full px-4 z-50 bg-neutral-400 pt-8">
                      <div
                        className="p-4 border-4 bg-white border-black z-50 w-full"
                        onClick={() => {
                          contactMeUpper
                            ? setContactMeUpper(false)
                            : setContactMeUpper(true);
                        }}
                      >
                        <div className=" flex justify-between w-full items-center ">
                          <h1 className="font-game text-lg text-black">
                            Contact Me
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ALL Window */}
                <div className="h-40 w-full ">
                  {/* backframe */}

                  <div className="absolute w-full">
                    <div className=" grid grid-cols-5 h-40 w-full gap-0 ">
                      <div className="col-span-1 border-y-8 border-x-[10px] border-neutral-800 "></div>
                      <div className="col-span-1 border-y-8 border-x-[10px] border-neutral-800 "></div>
                      <div className="col-span-1 border-y-8 border-x-[10px] border-neutral-800 "></div>
                      <div className="col-span-1 border-y-8 border-x-[10px] border-neutral-800 "></div>
                      <div className="col-span-1 border-y-8 border-x-[10px] border-neutral-800 "></div>
                    </div>
                  </div>
                  <div className="people1 w-full  absolute h-40"></div>
                  <div className="people2 w-full  absolute h-40"></div>
                  <div className="people3 w-full  absolute h-40"></div>
                  <div className="glassPattern w-full h-40 absolute"></div>

                  {/* Content */}
                  <div className="absolute w-full">
                    <div className=" grid grid-cols-4 w-full relative">
                      <div className="col-span-1 px-4">
                        <img
                          src={temenOnline.src}
                          alt="temen.online"
                          className={`${
                            work1 ? "translate-y-2" : "translate-y-40 "
                          }    duration-1000 relative  object-cover`}
                        ></img>
                      </div>
                      <div className="col-span-1 px-4">
                        <img
                          src={privateCO.src}
                          alt="temen.online"
                          className={`${
                            work2 ? "translate-y-2" : "translate-y-40 "
                          }  duration-1000 relative  object-cover`}
                        ></img>
                      </div>
                      <div className="col-span-1">
                        <div className="w-full justify-end flex h-full items-start px-10 ">
                          {/* <div className="duration-1000 relative w-fit h-fit object-cover p-4 bg-white border-4 border-black font-game text-black">
                            Blog
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* windoww */}
                  <div className="absolute w-full ">
                    <div className="  grid grid-cols-4 h-40">
                      <div className="col-span-1 flex border-x-[16px] border-y-8  border-r-neutral-700  border-t-neutral-600 border-b-neutral-500 border-l-neutral-500 mx-4">
                        <div className="w-full items-end justify-end flex h-full">
                          <div
                            className={`${
                              work1 ? "" : "translate-y-80"
                            }   p-2 border-4 border-black  bg-neutral-100 duration-1000 transition-all `}
                          >
                            <h1 className=" fill-black font-game text-black text-xs">
                              click
                            </h1>
                          </div>
                        </div>
                        {/* <img
                          src={glassLeft.src}
                          alt=""
                          className="fill-white w-1/3 h-20"
                        />
                        <img
                          src={glassCenter.src}
                          alt=""
                          className="fill-white w-1/3"
                        />
                        <img
                          src={glassRight.src}
                          alt=""
                          className="fill-white w-1/3"
                        /> */}
                      </div>
                      <div className="col-span-1  border-x-[16px] border-y-8  border-r-neutral-700  border-t-neutral-600 border-b-neutral-500 border-l-neutral-500 mx-4"></div>
                      <div className="col-span-1  border-x-[16px] border-y-8  border-r-neutral-700  border-t-neutral-600 border-b-neutral-500 border-l-neutral-500 mx-4"></div>
                      <div className="col-span-1  border-x-[16px] border-y-8  border-r-neutral-700  border-t-neutral-600 border-b-neutral-500 border-l-neutral-500 mx-4"></div>
                    </div>
                  </div>
                  {/* tiang */}
                  <div className=" absolute w-full ">
                    <div className=" grid grid-cols-4 h-40 w-full  ">
                      <div className="col-span-1 border-x-[20px]  border-neutral-400 "></div>
                      <div className="col-span-1 border-x-[20px]  border-neutral-400 "></div>
                      <div className="col-span-1 border-x-[20px]  border-neutral-400 "></div>
                      <div className="col-span-1 border-x-[20px]  border-neutral-400 "></div>
                    </div>
                  </div>
                  {/* frame */}
                  <div className="absolute w-full ">
                    <div className=" grid grid-cols-4 h-40 w-full ">
                      {work1 ? (
                        <a
                          target="_blank"
                          href="https://www.temen.online/"
                          className="col-span-1 border-x-4 border-y-4 mx-4 border-neutral-600  "
                        ></a>
                      ) : (
                        <div className="col-span-1 border-x-4 border-y-4 mx-4  border-neutral-600 "></div>
                      )}

                      <div className="col-span-1 border-x-4 border-y-4 mx-4  border-neutral-600 "></div>
                      <div className="col-span-1 border-x-4 border-y-4 mx-4  border-neutral-600 "></div>
                      <div className="col-span-1 border-x-4 border-y-4 mx-4  border-neutral-600 "></div>
                    </div>
                  </div>
                </div>
                {/* DOWN CONTENT */}
                <div className="grid grid-cols-4 bg-neutral-400 h-52 w-full overflow-hidden relative  ">
                  <div className="col-span-1 p-4 relative">
                    <div className=" flex justify-between gap-4 items-start border-4 bg-white border-black h-full">
                      <div className="flex flex-col gap-2">
                        <div
                          className="flex flex-row justify-between items-center pt-4 px-4 "
                          onClick={() =>
                            work1 ? setWork1(false) : setWork1(true)
                          }
                        >
                          <h1 className="font-game text-base font-bold text-black">
                            Temen.Online
                          </h1>
                          <div className="flex justify-center items-center">
                            <div className="ping  h-5 w-5 rounded-full bg-black  "></div>
                            <div className=" absolute h-5 w-5 rounded-full bg-white "></div>
                            <FaArrowAltCircleDown
                              className={`${
                                work1 ? "" : "-rotate-180"
                              } cursor-pointer fill-black text-2xl duration-1000 absolute `}
                            />
                          </div>
                        </div>
                        <div className="overflow-y-scroll h-24 px-4 ">
                          <h1 className="font-game text-sm text-black leading-6">
                            Personal project. We provide companionship and
                            gaming buddies to users by hiring talented Player.
                            My role are front-end developer and ui/ux designer.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 p-4 relative">
                    <div className=" flex justify-between gap-4 items-start border-4 bg-white border-black h-full">
                      <div className="flex flex-col gap-2">
                        <div
                          className="flex flex-row justify-between items-center pt-4 px-4 "
                          onClick={() =>
                            work2 ? setWork2(false) : setWork2(true)
                          }
                        >
                          <h1 className="font-game text-base font-bold text-black">
                            Moderated
                          </h1>
                          <div className="flex justify-center items-center">
                            <div className="ping  h-5 w-5 rounded-full bg-black  "></div>
                            <div className=" absolute h-5 w-5 rounded-full bg-white "></div>
                            <FaArrowAltCircleDown
                              className={`${
                                work2 ? "" : "-rotate-180"
                              } cursor-pointer fill-black text-2xl duration-1000 absolute `}
                            />
                          </div>
                        </div>
                        <div className="overflow-y-scroll h-24 px-4 ">
                          <h1 className="font-game text-sm text-black leading-6">
                            Our team is anonymous, we do game intergration. My
                            role in this project are ui/ux designer. My
                            contribution is Redesign whole website to modern
                            present.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 p-4 relative">
                    <div className=" flex justify-between gap-4 items-start border-4 bg-white border-black h-full">
                      <div className="flex flex-col gap-2">
                        <div className="overflow-y-scroll  p-4 ">
                          <h1 className="font-game text-sm text-black leading-6">
                            Based with design, influence by coders geek friends.
                            Now a Website Designer.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 p-4 relative">
                    <div className=" flex justify-between gap-4 items-start border-4 bg-white border-black h-full">
                      <div className="flex flex-col gap-2">
                        <div className=" p-4 ">
                          <h1 className="font-game text-sm text-black leading-6 flex flex-col gap-2">
                            <a
                              target="_blank"
                              href="https://mail.google.com/mail/?view=cm&fs=1&to=richardangkasa01@gmail.com&su=&body="
                            >
                              Gmail
                            </a>
                            <a
                              target="_blank"
                              href="https://www.linkedin.com/in/richard-angkasa-40182a249/"
                            >
                              Linkedin
                            </a>
                            <a
                              target="_blank"
                              href="https://www.instagram.com/richard_angkasa_/?hl=id"
                            >
                              Instagram
                            </a>
                            <a
                              target="_blank"
                              href="https://github.com/RichardAngkasa"
                            >
                              Github
                            </a>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div className="h-[31rem] w-full flex  items-start pt-20 justify-center bg-neutral-100  relative">
              <div className="back1 h-full w-full absolute"></div>
              <div className="back2 h-full w-full absolute"></div>
              <div className="back3 h-full w-full absolute"></div>
              <div className="back4 h-full w-full absolute"></div>
              <div className="w-full h-20 bg-black mt-44"></div>
            </div>
          </div>
          <div className="px-4 gap-5 flex items-center justify-center relative w-full ">
            <div className="max-w-[96rem] flex flex-col sm:flex-row items-start ">
              <div
                className="border-white border-4 p-4 flex items-center gap-4 fit cursor-pointer"
                onClick={() => {
                  dialogFlag ? setDialogFlag(false) : setDialogFlag(true);
                }}
              >
                <img src={profile.src} alt="richardAngkasa" />
                <h1
                  className={`${
                    dialogFlag ? "hidden" : "block"
                  } font-game text-xs sm:text-xs test leading-6 text-white`}
                >
                  Hi there traveler, please welcome to my humble train
                </h1>
                <h1
                  className={`${
                    dialogFlag ? "block" : "hidden"
                  } font-game text-xs sm:text-xs text-white leading-6`}
                >
                  {"there's not much here yet, but hey the train is moving!"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
