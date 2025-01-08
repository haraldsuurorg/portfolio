import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles }  from '../styles';
import { share } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={share}
                alt="share"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" >
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My work
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects.
      </h2>
      </motion.div>

      <div className="w-full flex-row">
        <motion.p
          variants={fadeIn("", ", 0.1 1")}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a passionate and skilled web developer, I specialize in creating seamless and user-friendly digital experiences. My expertise spans front-end and back-end development, ensuring that every project I undertake is both visually appealing and functionally robust. With a keen eye for detail, I strive to write clean, efficient, and secure code, adhering to the latest industry standards. My commitment to continuous learning keeps me abreast of the latest technologies and trends, enabling me to deliver innovative solutions. Collaboration and clear communication are at the heart of my workflow, ensuring that client visions are realized effectively. I am dedicated to transforming ideas into reality, crafting websites and applications that not only meet but exceed expectations.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7 flex-row items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}

            />
          ))}
        </div>

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");
