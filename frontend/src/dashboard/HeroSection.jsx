import React from 'react'
import {Link} from 'react-router-dom';
import { BsStars } from "react-icons/bs"
import { FaPlay } from "react-icons/fa";
import screenshotimg from "../assets/homescreen.png";
import { IoMdCloudOutline } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { motion, useMotionValue, useTransform } from "motion/react";
 const advantages = [
    {
      title: "Easy to use",
      icon: <FaRegCircleCheck />,
    },
    {
      title: "Secure & private",
      icon: <MdOutlinePrivacyTip />,
    },
    {
      title: "Access anywhere",
      icon: <IoMdCloudOutline />,
    },
  ];
function HeroSection({isDark}) {
      const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);
  return (
    <>
       <section className="flex lg:flex-row flex-col justify-between  items-center py-4 xs:py-5 sm:py-10 md:py-18 px-6 sm:px-15 bg-gray-100 dark:bg-[#0B1223]">
          <div className="w-full lg:w-[50%] md:pr-30 lg:pr-20 xl:pr-40 pb-6 xs:pb-8 sm:pb-10 md:pb-15 lg:pb-0">
            <h2 className="text-[12px] xs:text-[14px] text-[#2c5e7d] dark:text-neutral-300 flex items-center bg-gray-200 dark:bg-[#17233f] px-1.5 xs:px-4 py-1.5 my-1 rounded-full w-fit font-medium">
              <BsStars />
              <span>Organize. Prioritize. Get Things Done.</span>
            </h2>
            <br />
            <h1 className="text-[28px] xs:text-3xl md:text-[34px] lg:text-4xl xl:text-5xl font-semibold leading-9 md:leading-12 xl:leading-16 lg:leading-12 text-[#0F172A] dark:text-white ">
              Stay Organized. <br />
              Track tasks.{" "}
              <span className="text-[#1A4560] dark:text-[#316281]">
                Achieve more.
              </span>
            </h1>
            <br />
            <p className="text-neutral-600 dark:text-neutral-100 xs:text-neutral-500 text-[15px] xs:text-[16px] leading-5 xs:leading-6 sm:max-w-[420px] md:max-w-[550px] lg:w-full mb-5 xs:mb-5 md:mb-4 lg:mb-6 xl:mb-10 ">
              Task Manager helps you manage your tasks, deadlines and
              productivity - all in one place
            </p>

            <div className="flex flex-col xs:flex-row  gap-2 sm:gap-3 md:gap-4 lg:gap-2 xl:gap-4 leading-10">
              <div className="w-full xs:w-auto ">
                <Link className="block w-full xs:w-auto text-center text-[16px] xs:text-[14px] md:text-[15px] xl:text-[16px] px-6 lg:px-2 xl:px-6 py-0.5  rounded-lg text-white bg-[#1A4560] hover:bg-[#113145] font-semibold dark:bg-[#163e9c] hover:dark:bg-transparent  border-2 dark:border-[#163e9c]">
                  Get Started Free
                </Link>
              </div>
              <div className="w-full xs:w-auto">
                <Link className="flex items-center justify-center w-full xs:w-auto  text-center text-[16px] xs:text-[14px] md:text-[15px] xl:text-[16px] border-2 px-6 lg-px-2 xl:px-6  py-0.5  rounded-lg border-[#255574] text-[#1A4560] dark:text-neutral-100 hover:dark:text-white hover:dark:bg-[#163e9c] dark:border-[#163e9c]">
                  <FaPlay className="inline-block p-1.5 text-[26px]" />
                  <span>Watch Demo</span>
                </Link>
              </div>
            </div>
            <br />
            <div className="flex flex-col xs:flex-row gap-4 md:justify-start lg:justify-between">
              {advantages.map((advantage) => (
                <div className="flex gap-2 items-center" key={advantage.title}>
                  <div className="p-1.5 rounded-full text-[20px]  font-semibold bg-neutral-200 dark:bg-transparent dark:border-[1px] dark:border-neutral-700 text-[#1A4560]">
                    {advantage.icon}
                  </div>{" "}
                  <span className="text-[13px] text-[#0F172A] font-medium dark:text-neutral-300">
                    {advantage.title}
                  </span>{" "}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{ perspective: 1200 }}
            className="relative w-full lg:w-[50%] h-auto"
          >
            <motion.div
              className="relative rounded-lg"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                const mouseX = e.clientX - rect.left - rect.width / 2;
                const mouseY = e.clientY - rect.top - rect.height / 2;

                x.set(mouseX);
                y.set(mouseY);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
            >
              {/* Glow rgba(20,184,166,.35)*/}
              <motion.div
                className={`absolute left-1/2 top-1/2 w-80 h-80
      -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl
      ${isDark ? "bg-teal-400/20" : "bg-teal-500/10"} z-0`}
                style={{
                  backgroundColor: isDark
                    ? "rgba(248,24,75)"
                    : "rgba(248,24,75)",
                  transform: "translateZ(-40px)",
                }}
                animate={{
                  scale: [1,1.08,1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Screenshot 1885 × 916 px*/}
              <motion.img
                src={screenshotimg}
                alt="Dashboard Screenshot"
               widht={1885}
               height={916}
                loading="eager"
   decoding="async"
                className=" h-auto
     object-contain relative z-10 rounded-xl border-8 border-slate-700 shadow-2xl w-full"
                style={{
                  transform: "translateZ(40px)",
                  filter: "drop-shadow(0 35px 60px rgba(0,0,0,.45))",
                }}
                whileInView={{
                  y: [0, -10, 0],
                  rotateZ: [0, 0.8, 0],
                   opacity:1
                }}
                viewport={{ once:true }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Reflection */}
              <div
                className=" inset-0 z-20 rounded-xl pointer-events-none
                 bg-gradient-to-br absolute top-0 left-0 w-1/2 h-full skew-x-[-20deg]
                 via-transparent
                 to-transparent"
              />

              {/* Shadow */}
              <motion.div
                className="absolute -bottom-8 left-8 right-8 h-12 rounded-full bg-teal-500/10 blur-2xl"
                style={{
                  transform: "translateZ(-60px)",
                }}
                animate={{
                  scaleX: [1, 1.08, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </section>
    </>
  )
}

export default HeroSection
