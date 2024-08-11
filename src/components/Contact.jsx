// import React from "react"
// import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
// import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
          <div className="grid md:grid-cols-2 place-items-center">
          <div className=" mr-8 p-20 bg bg-gray ">
          <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s <span>connect!</span> 
          </p>
          <div className="p-10">
          <h2 className="text-gray-100 font-bold text-xl mb-2">Email</h2>
          <span>kaushalsingh8178@gmail.com</span>
          <h2 className="text-gray-100 font-bold text-xl mb-2">Mobile</h2>
          <span>(+91) 8178722461</span>
          </div>
          </div> 

            <form
                action="https://getform.io/f/bxojrpra"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
           
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact