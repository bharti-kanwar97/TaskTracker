import React from 'react'
import {motion} from 'motion/react'

function FeatureCard({card,isDark}) {
         const cardVariants = {
        initial: {
          y: 1,
          rotate: 0,
          borderColor: "#E5E5E5",
          boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        },
        hover: (colorMotion) => ({
          y: 1.03,
          borderColor: colorMotion,
          boxShadow: `0px 10px 30px ${colorMotion}50`,
          transition: { duration: 0.3 },
        }),
      };
      const iconVariants = {
        initial: {
          y: 1,
          rotate: 0,
          brightness: 1,
        },
        hover: (isDark) => ({
          y: 1.05,
          rotate: -8,
          filter: isDark ? "brightness(1.35)" : "brightness(1.05)",
        }),
      };
  return (
    <div>
       <motion.div
                  className="flex items-start border-2 border-neutral-200 dark:bg-[#0F172A]  dark:border-neutral-700 rounded-lg gap-2 py-4"
                  key={card.title}
                  variants={cardVariants}
                  custom={card.colorMotion}
                  initial="initial"
                  whileHover="hover"
                  whileTap="hover"
                  transition={{ duration: 0.3 }}
                >
                  <motion.div variants={iconVariants} custom={isDark}>
                    {card.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-[14px] font-bold leading-5 pb-2">
                      {card.title}
                    </h2>
                    <p className="text-[12px] text-gray-600 dark:text-gray-300 font-medium pr-2 lg:pr-3 xl:pr-[29px] leading-5 text-balance">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
    </div>
  )
}

export default FeatureCard
