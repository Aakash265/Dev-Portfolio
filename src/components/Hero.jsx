import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-neutral-300" /> {/*for the circular dot */}
          <div className="w-1 sm:h-80 h-40 stone-gradient" />  {/*for the line below the dot */}
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi There, I'm <span className="text-primary">Aakash</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          A Developer! <br />
          Handling his journey in
          Full Stack developing world.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* For the scrolling button */}
      <div className="absolute xs:bottom-[0] bottom-32 mb-3 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-neutral-300 flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-neutral-300 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero