// import React from "react";
// import profilepic from "../assets/profpic.png";
// import hero2 from "../assets/hero 2.png"
import hero1 from "../assets/hero 1.png"
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
 
  DiMysql,
} from "react-icons/di";
import { SiExpress, SiNextdotjs, SiTypescript, } from "react-icons/si"
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Fullstack Dev",
                        1000,
                        "Webdesigner",
                        1000,
                        "Android Developer",
                        1000,
            
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-purple-500">Kaushal Singh</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a passionate fullstack Web & App developer with over 1 years of experience.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                > 
                {/* <motion.a   href={"https://drive.google.com/file/d/1r_DcikXuDU2pJoXhu3xple2Ksix0Kdyz/view?usp=sharing"}> */}
                    <motion.a whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                       href={"https://drive.google.com/file/d/15V5V81-8SrrfxuNLCL_7v1sFew-iJ3FO/view?usp=sharing"}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"     
                    >
                        Download CV
                    </motion.a>
                    {/* </motion.a> */}

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/kaushalsingh0602">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/kaushal-singh-2a2b8722a/">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={hero1}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <div className="flex md:flex-col flex-row">
            <DiHtml5 className="text-orange-600 mx-2" />
            <DiCss3 className="text-blue-600 mx-2" />
            </div>
            <div className="flex md:flex-col flex-row">
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <SiTypescript className='text-blue-500 mx-2'  />
            </div>
            <div className="flex md:flex-col flex-row">
            <DiReact className="text-blue-500 mx-2" />
            <SiNextdotjs className='text-gray-100 mx-2' />
            </div>
            <div className="flex md:flex-col flex-row">
            <DiNodejsSmall className="text-green-500 mx-2" />
            
             <SiExpress className='text-orange-500 mx-2' /> 
             </div>
             <div className="flex md:flex-col flex-row">
            <DiMongodb className='text-green-600 mx-2' />
            <DiMysql className='text-blue-600 mx-2'  />
            </div>
           

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero
