// import React from 'react';
import download1 from "../assets/download1.png"
import download2 from "../assets/download2.png"
import download3 from "../assets/download3.png"


import Reveal from './Reveal';

const projects = [
    {
      img: download1,
      title: "JavaScript (Intermediate) Certificate",
      description: "I earned the JavaScript (Intermediate) Certificate from HackerRank, demonstrating my proficiency in key JavaScript concepts such as ES6+ features, asynchronous programming, DOM manipulation, and object-oriented programming. This certification reflects my ability to build efficient and reliable JavaScript applications.",
      links: {
        site: "https://www.hackerrank.com/certificates/234d216029a5",
        github: "#",
      },
    },
    {
      img:download3,
      title: "React",
      description: "I earned the React  Certificate from HackerRank, showcasing my proficiency in React concepts such as component lifecycle, hooks, state management, and performance optimization. This certification reflects my ability to build dynamic and efficient React applications.",
      links: {
        site: "https://www.hackerrank.com/certificates/78a29c541a35",
        github: "#",
      },
    },
    {
      img: download2,
      title: "SQL (Intermediate) Certificate",
      description: "I earned the SQL (Intermediate) Certificate from HackerRank, demonstrating my proficiency in database management, complex queries, data manipulation, and optimization techniques. This certification reflects my ability to efficiently work with relational databases and manage data-driven applications.",
      links: {
        site: "https://www.hackerrank.com/certificates/6bceecd6186a",
        github: "#",
      },
    },
    
  ]

const  Certification=()=>{
  return (
    <div  className='max-w-[1000px] mx-auto p-6 md:my-20' id="certification"> 
    <h2 className='text-3xl font-bold text-gray-200 mb-8'>Certification</h2>
    {projects.map((project, index) => (
        <Reveal key={index}>
        <div key={index} 
        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
                <img
                    src={project.img}
                    alt={project.title}
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex space-x-4'>
                    <a href={project.links.site}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300'>
                        View Site
                    </a>
                   
                </div>

            </div>

        </div>
        </Reveal>
    ))}</div>
  )
}

export default Certification