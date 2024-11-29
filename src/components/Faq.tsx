"use client"
import React, {useState} from 'react'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline  } from "react-icons/io";
import { motion } from 'framer-motion';


const headingVariants = {
    "hidden": {x:-100},
    "visible":{x:0, transition: { duration: 0.6, staggerChildren: 0.3 }}
  }
  
  const containerVariants = {
    "hidden": {y:-100},
    "visible": {y:0, transition: { duration: 0.6, staggerChildren: 0.3 }}
  }
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition:{duration :0.2}},
    exit: { opacity: 0, y: -10, transition:{duration :0.2}},
  };

  const faqs = [
    {
      question: "How can I find last-minute flight deals?",
      answer: `Finding last-minute flights is easy on Google Flights.
      Select your departure and destination cities in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available.
      You can even check for flights departing today.
      To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.`,
    },
    {
      question: "How can I find cheap flights for a weekend getaway?",
      answer: `It’s easy to use Google Flights to find deals on weekend getaways or even weeklong trips.
               Just enter your departure and destination cities near the top of the page. Then, open the 
               date selector and choose a trip length to see how the round-trip fare changes on different days. 
               Adjust the trip type to see one-way fares. The cheapest available flights are highlighted and easy 
               to spot. Once you settle on dates, select Search to see flight options and book the deal.`,
    },
    {
      question: "How can I get flight alerts for my trip?",
      answer: `You can track flight prices for specific dates or, if your plans are flexible, any dates.
                To get flight alerts for a specific round trip, choose your dates and flights and select Search.
                Then, you can turn on price tracking.`,
    },
    {
      question: "How can I find cheap flights to anywhere?",
      answer: `You can find cheap flight deals to anywhere in the world on Google Flights. Just enter your departure city, choose Anywhere as the destination, and select Explore.
      You can pick specific dates or leave departure and return dates blank if your plans are flexible. The cheapest fares to popular destinations will appear.
      You can filter the results to see only nonstop flights or flights under a certain price to more easily plan your perfect budget trip.`,
    },
  ];
export default function Faq() {



  const [dropDown, setDropDown] = useState([false, false, false, false]);

  const handleDropDown = (index: Number) => {
    const updatedOpen = dropDown.map((value, idx) => (idx == index ? !value : false))
    setDropDown(updatedOpen)
}


  
  return (
    <div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={headingVariants}
      className="my-[5%]"
    >
      <h2 className="text-xl lg:text-4xl font-semibold text-center">
        Frequently Asked Questions
      </h2>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="sm:mx-[7%] mx-[5%]"
    >
      {faqs.map((faq, index) => (
        <div key={index}>
          {/* Question */}
          <div
            onClick={() => handleDropDown(index)}
            className="flex h-full justify-between items-center cursor-pointer"
          >
            <p className="text-base font-bold lg:text-2xl">{faq.question}</p>
            {dropDown[index] ? (
              <IoIosRemoveCircleOutline color="black" size={30} />
            ) : (
              <IoIosAddCircleOutline color="black" size={30} />
            )}
          </div>

          {/* Answer */}
          {dropDown[index] && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
            >
          <div className={`font-thin text-gray-500 p-5 text-justify`}>
            {typeof faq.answer === "string" ? (
              <p>{faq.answer}</p>
            ) : (
              faq.answer /* Render JSX for ordered list */
            )}
          </div>
            </motion.div>
          )}

          {/* Divider */}
          <div className="h-[0.5px] bg-gray-300 my-[4%]"></div>
        </div>
      ))}
    </motion.div>
  </div>
  )
}
