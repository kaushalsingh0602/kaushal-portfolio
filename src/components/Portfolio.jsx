// import React from 'react';
import project1 from "../assets/project1.png"
import project3 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
// import project6 from "../assets/project6.png"
import project7 from "../assets/project7.png"
import project8 from "../assets/project8.png"
import project9 from "../assets/project9.png"
import project10 from "../assets/project10.png"
import project11 from "../assets/project11.png"
import project12 from "../assets/project12.jpg"
import  { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Fliker",
      description: "Developed the backend for the Fliker food and grocery delivery application, integrating real-time notifications using Firebase and managing data with RDS (Relational Database Service) for scalable and reliable database operations. Utilized an S3 bucket for efficient image storage, ensuring seamless media handling. This project demonstrates my proficiency in backend development, real-time communication, and cloud-based storage solutions, providing a comprehensive and effective platform for food and grocery delivery.",
      links: {
        site: "https://play.google.com/store/apps/details?id=com.fliker.user",
        github: "#",
      },
    },
    {
      img: project2,
      title: "Fliker-Restaurant",
      description: "Developed the backend for the Fliker Delivery Partner application, which enables delivery personnel to efficiently manage and fulfill orders. This application provides features for tracking deliveries, viewing order details, and updating delivery statuses in real-time. It streamlines the logistics process and enhances communication between delivery partners and the main platform. This project highlights my skills in creating solutions that support operational efficiency and effective delivery management.",
      links: {
        site: "https://play.google.com/store/apps/details?id=com.reconnecteat.vendor",
        github: "#",
      },
    },
    {
      img: project3,
      title: "Fliker Delivery Partner",
      description: "Developed the backend for the Fliker Delivery Partner application, which enables delivery personnel to efficiently manage and fulfill orders. This application provides features for tracking deliveries, viewing order details, and updating delivery statuses in real-time. It streamlines the logistics process and enhances communication between delivery partners and the main platform. This project highlights my skills in creating solutions that support operational efficiency and effective delivery management.",
      links: {
        site: "https://play.google.com/store/apps/details?id=com.fliker.driver.flikerdriver",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Portfolio",
      description: "This is a personal portfolio website using React to showcase my projects, skills, and experience. The portfolio features a clean, responsive design, with sections for an About Me introduction, a display of my work, certifications, and contact information. It emphasizes my expertise in React, modern web development practices, and creating a user-friendly interface that effectively presents my professional profile.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project7,
      title: "Video Streaming WebApp",
      description: "Built a full-featured Video Streaming WebApp using the MERN stack, allowing users to upload, watch, like, and comment on videos. The application includes user authentication to securely handle user data, ensuring personalized experiences and access control. This project highlights my expertise in full-stack development, managing video content, and implementing robust user authentication systems within a scalable and responsive web application.",
      links: {
        site: "https://github.com/kaushalsingh0602/client",
        github: "https://github.com/kaushalsingh0602/video-strumming-",
      },
    },
    {
      img: project8,
      title: "Ai_Saas",
      description: "Developed a full-stack AI SaaS platform using Next.js, where users can generate images, code, videos, and music by providing prompts. The platform leverages the OpenAI API to deliver real-time interactions and content generation. Users can input prompts to instantly create various forms of media and code, offering a versatile tool for creative and technical projects. This project showcases my ability to integrate advanced AI capabilities into a web application, while managing both frontend and backend development to provide a seamless user experience.",
      links: {
        site: "https://github.com/kaushalsingh0602/Ai_SAAS",
        github: "https://github.com/kaushalsingh0602/Ai_SAAS",
      },
    },
    {
      img: project9,
      title: "Diseny-Hotstar",
      description: "Created a front-end clone of Disney+ Hotstar using HTML, CSS, and JavaScript. This project replicates the look and feel of the popular streaming platform, with a focus on responsive design, smooth navigation, and interactive elements. The clone includes sections for featured content, categories, and a dynamic carousel, demonstrating my ability to recreate modern web interfaces with precision and attention to detail.",
      links: {
        site: "https://diseny-hotstar.vercel.app/",
        github: "https://github.com/kaushalsingh0602/diseny-hotstar",
      },
    },
    {
      img: project10,
      title: "Conway-File-Game",
      description: "This is a web-based implementation of Conway's Game of Life using React.js. The app features an interactive grid where users can set custom initial states, control the simulation speed, and start or stop the evolution of cell patterns. It highlights my skills in React, custom hooks, and responsive UI design.",
      links: {
        site: "https://conway-file-game.vercel.app/",
        github: "https://github.com/kaushalsingh0602/conway-file-game",
      },
    },
    {
      img: project11,
      title: "Weather-App",
      description: "Developed a Weather App using HTML, CSS, and JavaScript, integrating the OpenWeather API to fetch live weather data. The app allows users to search for weather information by city or automatically detect their current location to display real-time weather details. The project showcases my ability to work with APIs, handle asynchronous data fetching, and create a user-friendly interface that provides accurate weather information.",
      links: {
        site: "https://weather-app-ten-psi-22.vercel.app/",
        github: "https://github.com/kaushalsingh0602/Weather_app-",
      },
    },
    {
      img: project12,
      title: "CRM",
      description: "Developed a CRM (Customer Relationship Management) backend using Node.js and MongoDB, designed to manage customer data, interactions, and communications efficiently. Implemented microservices architecture to enhance scalability and maintainability. One of the key features includes a NodeMailer service that automatically sends email updates to users for every significant interaction or update, ensuring consistent communication. This project highlights my expertise in backend development, microservices, and integrating automated email notifications into a CRM system.",
      links: {
        site: "https://github.com/kaushalsingh0602/crm",
        github: "https://github.com/kaushalsingh0602/crm",
      },
    },
    {
      img: project5,
      title: "Food-ordering-app",
      description: "Built a full-stack Food Ordering App that allows users to browse menus, select items, and place orders seamlessly. The app features user authentication, real-time order tracking, and payment integration, providing a complete end-to-end experience. On the backend, I implemented a RESTful API using Node.js and Express, with a database managed by MongoDB/MySQL for handling user data, order details, and restaurant information. The frontend, built with React, offers a responsive and intuitive interface, ensuring a smooth user experience across devices. This project demonstrates my skills in full-stack development, API integration, and building scalable, user-centric web applications.",
      links: {
        site: "https://food-dlevery-app.vercel.app/",
        github: "https://github.com/kaushalsingh0602/foodDleveryApp",
      },
    },
  ]

  const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const initialProjectsToShow = 5;
  
    const handleShowMore = () => {
      setShowAll(true);
    };
  
    const handleShowLess = () => {
      setShowAll(false);
    };
  
    // Determine which projects to show based on the state
    const displayedProjects = showAll ? projects : projects.slice(0, initialProjectsToShow);
  
    return (
      <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
          <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
          {displayedProjects.map((project, index) => (
              <Reveal key={index}>
              <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                  <div className='flex w-full md:w-1/2 p-4 justify-center items-center'>
                      <img
                          src={project.img}
                          alt={project.title}
                          className='w-full h-half object-cover rounded-lg shadow-lg'
                      />
                  </div>
                  <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                      <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                      <p className='text-gray-300 mb-4'>{project.description}</p>
                      <div className='flex space-x-4'>
                          <a href={project.links.site}
                              className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                              View Site
                          </a>
                          <a href={project.links.github}
                              className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                              <AiOutlineGithub />
                          </a>
                      </div>
                  </div>
              </div>
              </Reveal>
          ))}
          <div className='text-center mt-8'>
              {!showAll && (
                  <button
                      onClick={handleShowMore}
                      ><span>Show More</span>
                      
                  </button>
              )}
              {showAll && (
                  <button
                      onClick={handleShowLess}
                      >
                      <span>Show Less</span>
                  </button>
              )}
          </div>
      </div>
    );
  }
  
  export default Portfolio