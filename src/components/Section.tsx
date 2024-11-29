import React from "react";

interface SectionProps {
  flights: any;
}

const Section = ({ flights }: SectionProps) => {
  if (!flights || flights?.data?.itineraries?.length === 0) {
    return <div>No flights found.</div>;
  }


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
