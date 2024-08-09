// import React from 'react'
import Reveal from "./Reveal"
import hero2 from "../assets/hero 2.png"
// import hero1 from "../assets/hero 1.png"
 import { motion } from "framer-motion"
const  About=()=> {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="aboutme">
        <Reveal>
          <div className="grid md:grid-cols-2 place-items-center">
          <motion.img 
                src={hero2}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className=" leading-7 w-11/12 mx-auto">
                    I am a dedicated MERN stack developer with experience in both front-end and full-stack development. I have a solid foundation in creating responsive and dynamic web applications, leveraging technologies like React, Node.js, Express, MongoDB, and MySQL.
                        In my role as a full-stack developer at Reconnect, I led the backend development of three key applications, integrating robust solutions with Node.js, MySQL, and Firebase. My work involved ensuring seamless API integrations, efficient data management, and delivering scalable and maintainable code. My passion for coding drives me to continually enhance my skills and contribute to innovative projects.
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Personal Projects</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">1
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>years of experience</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white justify-center ">6
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Industrial Projects </span></p>
                    </div>

                </div>

            </div>
           

        </div>
        
        </Reveal>
    </div>
  )
}

export default About