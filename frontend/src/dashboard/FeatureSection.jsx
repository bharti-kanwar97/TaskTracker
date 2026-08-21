import React from 'react'

import { Link } from 'react-router-dom'
import { MdOutlineListAlt } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { IoStatsChartOutline, IoCalendarNumberOutline } from "react-icons/io5";
import FeatureCard from './FeatureCard';
const cards = [
    {
      title: "Task Management",
      colorMotion: "#0D9488",
      description:
        "Create,edit and organize tasks with ease. Set priortizes and deadlines.",
      icon: (
        <MdOutlineListAlt className="mx-2 px-4 py-4 bg-teal-100 text-[58px]  text-teal-800 dark:bg-[#0e3b2d] dark:text-teal-600 rounded-lg" />
      ),
    },
    {
      title: "Calendar View",
      colorMotion: "#C026D3",
      description:
        "View your tasks and events in a beautiful calendar and never miss a deadline.",
      icon: (
        <IoCalendarNumberOutline className="mx-2 px-4 py-4 bg-fuchsia-100 dark:bg-[#1E1029] text-[58px]  text-fuchsia-800 dark:text-fuchsia-600 rounded-lg" />
      ),
    },

    {
      title: "Progress Tracking",
      colorMotion: "#16A34A",
      description:
        "Track your progress with insightful statistics and visualizations.",
      icon: (
        <IoStatsChartOutline className="mx-2 px-4 py-4 bg-green-100 text-[58px] dark:bg-[#0F3D2E]  text-green-800 dark:text-green-600 rounded-lg" />
      ),
    },
    {
      title: "Categories & Tags",
      colorMotion: "#EA580C",
      description:
        "Organize task with categories and tags to keep everything structured.",
      icon: (
        <LuTag className="mx-2 px-4 py-4 bg-orange-100  dark:bg-[#4A2C17] text-[58px]  text-orange-800 dark:text-orange-600 rounded-lg" />
      ),
    },
  ];
function FeatureSection({isDark}) {
 
  return (
    <>
      <section className="py-4 px-6 sm:px-15 dark:bg-[#0B1223]">
          <div>
            <div className="text-center md:pt-8 md:pb-4 py-4">
              <h2 className="text-[#1A4560] dark:text-neutral-50 text-[12px] py-2 px-5 rounded-full font-medium bg-gray-100 dark:bg-[#17233f] w-fit mx-auto mb-4 tracking-widest">
                FEATURES
              </h2>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#0F172A] leading-7 md:leading-10 xl:leading-14 pb-4 xs:py-0 dark:text-white">
                Everything you need to stay on track
              </h2>
              <h3 className="text-gray-500 dark:text-gray-300 leading-6 md:leading-10 text-[13px] md:text-[14px] lg:text-[16px]">
                Powerful features designed to boost your productivity
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-around gap-4 max-w-[1300px] mx-auto">
              {cards.map(card => (
               <FeatureCard card={card} isDark={isDark} />
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default FeatureSection
