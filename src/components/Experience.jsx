// import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Tech Teals',
        period: '(Feb)2023 - (June)2023',
        description: `As a Frontend Developer Intern, I contributed to the development and enhancement of web applications,
                ensuring they are visually appealing and user-friendly.
                Worked on the development of a new web project from scratch, focusing on
                responsive design and interactive features.
                 Improved the visual appeal and user experience of existing websites.
                 Worked closely with the design team to implement UI/UX improvements.
                Tech Stack: React, HTML, CSS, JavaScript`,
                      },
      {
        company: 'Reconnect Info Serve Private Limited',
        period: '(Feb)2024 - Present',
        description: `Backend Development: Designed and developed the backend for three mobile applications (Fliker, Fliker
                   Delivery Partner,Fliker - Restaurant) using Node.js.
                   Ensured seamless communication between mobile apps and backend services.
                   Utilized Firebase for real-time data synchronization and notification services
                   Integrated smooth and secure payment solutions.
                 Successfully deployed servers on AWS and managed regular updates to maintain
                  performance and relevance.
                   Implemented S3 buckets for efficient image storage and optimized the time
                  complexity of existing code.
                   In addition to the backend i also  Developed the frontend of
                   Fliker Restaurant Web App using React.
                  Tech Stack: JavaScript, Node.js, Express.js, MySQL, Firebase, React
                   Apps : Fliker , Fliker Delivery Partner, Fliker - Resturant.`
                        },
      // {
      //   company: 'Third Company',
      //   period: '2020 - Present',
      //   description: 'Description of your experience in this company.',
      // },
      // {
      //   company: 'Fourth Company',
      //   period: '2020 - Present',
      //   description: 'Description of your experience in this company.',
      // },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal key={index}>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience