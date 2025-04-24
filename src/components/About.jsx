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
                    I am a dedicated MERN stack developer with a strong foundation in both front-end and full-stack development. My expertise includes React, ReactNative, Node.js, Express, MongoDB, and MySQL, enabling me to build responsive and dynamic web applications. At Kanmotech, I developed a React Native and Node.js-based mobile application for MSME clients, optimizing API performance to reduce response times by 30 seconds, leading to a 20x increase in customer acquisition. Additionally, I built a web portal to streamline the credit approval process and implemented a web-based lead generation system. Currently, I am leading the development of a home loan application from scratch, collaborating with a cross-functional team to deliver a user-friendly and efficient platform.

{/* As a freelance full-stack developer at M/s Alt-Pi Fintech Pvt. Ltd., I led the end-to-end development of the Nimbooo platform—a comprehensive financial management system built from scratch. This involved designing secure payment integrations, developing efficient APIs, and creating an intuitive user interface. I also developed the Reward Bale website, a rewards-based platform emphasizing seamless user interaction and scalable backend architecture. */}

{/* At Reconnect Info Serve Private Limited, I contributed to the development and optimization of key applications, including Fliker, Fliker Delivery Partner, and Fliker Restaurant. My role focused on backend development using Node.js, Express.js, and MySQL, ensuring seamless API integrations and implementing secure payment solutions. I also contributed to the frontend of the Fliker Restaurant Web App using React. */}
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 md:p-4 p-2 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">20
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Personal Projects</span></p>
                    </div>

                    <div className="bg-gray-800/40 md:p-4 p-2  rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">1
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>years of experience</span></p>
                    </div>

                    <div className="bg-gray-800/40 md:p-4 p-2  rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white justify-center ">11
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
