import { motion } from 'framer-motion';
import { styles } from '../styles';

import { RubikCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto max-w-7xl mx-auto">
      <div className={`${styles.paddingX} h-screen flex xxs:flex-col lg:flex-row xxs:justify-center lg:justify-between items-center xxs:gap-8 lg:gap-0`}>
        <div className="flex xxs:w-full lg:w-1/2 xxs:h-1/3 lg:h-screen xxs:items-end lg:items-center">
          <div className="max-w-7xl mx-auto flex flex-row items-center gap-5">
            {/* <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#4169E1]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div> */}

            <div className="flex flex-col justify-center max-w-[560px]">
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#4169E1]">Harald</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop interactive web applications <br className="sm:block hidden" />
                and user interfaces
              </p>
            </div>
          </div>
        </div>

        <div className="flex xxs:w-full lg:w-1/2 xxs:h-1/2 lg:h-screen justify-center">
          <RubikCanvas />
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary hidden md:flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero