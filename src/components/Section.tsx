// import React from 'react'
// import { IoInformationCircleOutline } from "react-icons/io5";
// import { images } from '@/constants';


// export default function Section() {

//     const tab = [
//         {
//             id:1,
//             text:'Port Harcout'
//         },

//         {
//             id:2,
//             text:'Owerri'
//         },

//         {
//             id:3,
//             text:'Warri'
//         },
//         {
//             id:4,
//             text:'Uyo'
//         },


//     ]

//     const place = [
//         {
//             id:1,
//             place:'London',
//             price:'NGN2,750,191',
//             startDate:'Dec 26',
//             endDate:'Jan 1',
//             text:'1 stop',
//             time:'11hr',
//             image:images.Hotel.src

//         },
//         {
//             id:2,
//             place:'Paris',
//             startDate:'Dec 26',
//             endDate:'Jan 1',
//             image:images.Hotel1.src
//         },
//         {
//             id:3,
//             place:'New York',
//             startDate:'Dec 26',
//             endDate:'Jan 1',
//             image:images.Hotel3.src
//         },
//         {
//             id:3,
//             place:'New York',
//             startDate:'Dec 26',
//             endDate:'Jan 1',
//             image:images.Hotel2.src
//         },
//     ]
//   return (
//     <div className='my-[4rem]'>
//         <div className='flex space-x-2 items-center'>
//             <h2 className='text-2xl font-semibold '>Find cheap flights from Port Harcourt to anywhere</h2>
//             <IoInformationCircleOutline className='w-7 h-7' color='#9ca3af'/>            
//         </div>
//         <div className='flex space-x-1 my-5'>
//         {tab.map((info) => (
//                 <div 
//                 key={info.id} 
//                 className={`flex items-center cursor-pointer ${info.text === 'Port Harcout' ? 'text-[#0060f0] bg-blue-50' : 'hover:text-[#0060f0] hover:bg-blue-50'}  space-x-2 border border-gray-300 px-4 sm:px-6 py-2 rounded-full`}>
//                     <p className='font-semibold capitalize text-xs sm:text-base'>
//                         {info.text}
//                     </p>
//                 </div>                
//             ))
//             }
//         </div>

//     <div className='space-y-4 lg:flex lg:space-y-0 lg:space-x-4 lg:overflow-x-auto lg:scrollbar-hide'>
//         {place.map((info, idx) => (
//             <div 
//             key={idx}
//             className='flex lg:flex-col space-x-3 lg:space-x-0'>
//                 <div className=''>
//                     <img
//                     src={info.image}
//                     className='w-[17rem] h-[10rem] sm:w-[29rem] sm:h-[14rem] rounded-lg'
//                     />                
//                 </div>

//                 <div className='ml-5 w-full lg:w-[25rem]'>
//                     <div className='flex justify-between sm:text-xl font-semibold'>
//                         <h3>{info.place}</h3>
//                         <h3>{info?.price}</h3>
//                     </div>   
//                         <p className='text-gray-500 font-medium sm:text-lg'>{info.startDate} - {info.endDate}</p>  
//                         {
//                             info.text &&
//                             <p className='text-gray-500 font-medium sm:text-lg'>{info?.text} • {info.time}</p>                             
//                         }      

       
//                 </div>

//             </div>              
//         ))

//         }
      
//     </div>


//     </div>
//   )
// }


// // import React from "react";

// // const Section = ({ flightsData, isLoading, error }) => {
// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>{error}</div>;
// //   }

// //   if (!flightsData || !flightsData.itineraries || flightsData.itineraries.length === 0) {
// //     return <div>No flights found</div>;
// //   }

// //   return (
// //     <div className="my-4">
// //       {flightsData.itineraries.map((flight, index) => (
// //         <div key={index} className="flex flex-col bg-gray-100 p-4 my-2 rounded-md shadow-md">
// //           {/* Flight Image */}
// //           {flight.image && (
// //             <img 
// //               src={flight.image} 
// //               alt={`${flight.from} to ${flight.to}`} 
// //               className="rounded-md w-full h-48 object-cover mb-4"
// //             />
// //           )}

// //           {/* Flight Details */}
// //           <h3 className="text-lg font-bold">{flight.from} to {flight.to}</h3>
// //           <p>Departure: {flight.departureDate}</p>
// //           <p>Price: {flight.price}</p>
// //           <p>Duration: {flight.duration}</p>

// //           {/* Add any other flight details */}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Section;

import React from "react";

interface SectionProps {
  flights: any;
}

const Section = ({ flights }: SectionProps) => {
  if (!flights || flights?.data?.itineraries?.length === 0) {
    return <div>No flights found.</div>;
  }

  console.log('hello', flights)
  console.log('ite', flights?.data?.itineraries)
  // console.log('dept', flights?.data?.itineraries[0].legs[0])

  return (

        <div className="my-4">
          {/* Destination Image */}
          <img
            src={flights?.data?.destinationImageUrl || "https://via.placeholder.com/300"}
            alt="Destination"
            className="rounded-lg w-full h-48 object-cover mb-6 shadow-lg"
          />
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {/* Iterating through the flight itineraries */}
          {flights?.data?.itineraries?.map((flight: any, index: number) => (
            <div
              key={flight.id}
              className="bg-white p-6 my-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Flight Route Information */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {flight.legs[0]?.origin?.city} to {flight.legs[0]?.destination?.city}
                </h3>
                <p className="text-gray-600">Departure: {flight.legs[0]?.departure || "N/A"}</p>
                <p className="text-gray-600">Duration: {flight.legs[0]?.durationInMinutes || "N/A"} minutes</p>
                <p className="text-gray-600">Stops: {flight.legs[0]?.stopCount || "N/A"}</p>
              </div>

              {/* Airlines Information */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Airlines:</h4>
                <div className="flex space-x-4">
                  <div className="grid grid-cols-2 gap-2">
                    {flight.legs[0]?.carriers?.marketing?.map((info:any) => (
                      <div key={info.id} className="flex items-center space-x-2">
                        <img
                          src={info.logoUrl}
                          alt={info.name}
                          className="w-8 h-8 object-contain rounded-full"
                        />
                        <p className="text-gray-700">{info.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price and Fare Policies */}
              <div className="mb-4">
                <p className="text-gray-800 font-semibold">
                  Price: {flight?.price?.formatted || "N/A"}
                </p>
                <p className="text-gray-600">
                  Cancellation Allowed: {flight?.farePolicy?.isCancellationAllowed ? "Yes" : "No"}
                </p>
                <p className="text-gray-600">
                  Change Allowed: {flight?.farePolicy?.isChangeAllowed ? "Yes" : "No"}
                </p>
              </div>

              {/* Additional Information */}
              <div>
                <p className="text-gray-600">
                  Flight Number: {flight?.legs[0]?.segments[0]?.flightNumber || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>      



  );
};

export default Section;
