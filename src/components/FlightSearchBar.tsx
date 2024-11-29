'use client'
import React, { Dispatch, SetStateAction } from "react";
import { FiUser, FiArrowRight, FiCalendar, FiSearch } from "react-icons/fi";

interface flightSearchbarProps {
  tripType : string;
  setTripType: Dispatch<SetStateAction<string>>;
  passengers: number;
  setPassengers:Dispatch<SetStateAction<number>>;
  from:string;
  setFrom:Dispatch<SetStateAction<string>>;
  to:string;
  setTo:Dispatch<SetStateAction<string>>;
  departureDate:string;
  setDepartureDate:Dispatch<SetStateAction<string>>;
  children:number;
  setChildren:Dispatch<SetStateAction<number>>;
  infants:number;
  setInfants:Dispatch<SetStateAction<number>>;
  cityToEntityId:{[key: string]: string};
  handleSearch: () => void 
}

export default function FlightSearchBar({
    tripType,
    setTripType,
    passengers,
    setPassengers,
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    children,
    setChildren,
    infants,
    setInfants,
    cityToEntityId,
    handleSearch
   } :flightSearchbarProps) {




  return (
    <div className="flex flex-col xl:flex-row items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
      {/* Trip Type Selector */}
      <div className="relative">
        <select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          className="border rounded-lg py-2 px-4 w-full md:w-auto bg-gray-50"
        >
          <option value="One way">One way</option>
          <option value="Round trip">Round trip</option>
          <option value="Multi-city">Multi-city</option>
        </select>
      </div>

      {/* Passenger, Children, and Infants Selector */}
      <div className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-gray-50">
        <FiUser className="h-5 w-5 text-gray-600" />
        <select
          value={passengers}
          onChange={(e) => setPassengers(parseInt(e.target.value, 10))}
          className="bg-transparent focus:outline-none"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <select
          value={children}
          onChange={(e) => setChildren(parseInt(e.target.value, 10))}
          className="bg-transparent focus:outline-none"
        >
          {[0, 1, 2, 3].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Child' : 'Children'}
            </option>
          ))}
        </select>
        <select
          value={infants}
          onChange={(e) => setInfants(parseInt(e.target.value, 10))}
          className="bg-transparent focus:outline-none"
        >
          {[0, 1, 2].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Infant' : 'Infants'}
            </option>
          ))}
        </select>
      </div>

      {/* From Input */}
      <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-50">
        <span className="text-gray-600">✈️</span>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          className="bg-transparent focus:outline-none ml-2 w-full"
        />
      </div>

      {/* To Input (Select Dropdown) */}
      <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-50">
        <FiArrowRight className="h-5 w-5 text-gray-600" />
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="bg-transparent focus:outline-none ml-2 w-full"
        >
          {Object.keys(cityToEntityId).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Date Inputs */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <FiCalendar className="absolute left-3 top-3 text-gray-500" />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="bg-transparent pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
      </div>

      {/* Search Button */}
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        <FiSearch className="inline-block mr-2" />
        Search Flights
      </button>
    </div>
  );
}

