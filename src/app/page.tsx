'use client'
import { useState, useEffect } from "react";
import { Nav, 
        FlightSearchBar, 
        Section, 
        Faq, 
        LoadingIcon
      } from "@/components";
import axios from "axios";

// List of valid destinations and their corresponding 'toEntityId' values
const cityToEntityId: { [key: string]: string } = {
  "Port Harcourt": "PHC",   
  "Paris": "CDG",           
  "New York": "JFK",        
  "London": "LHR",          
  "Nuremberg": "NUE",       
  "Los Angeles": "LAX",     
  "Tokyo": "HND",           
  "Dubai (DXB)": "DXB",     
  "Sydney": "SYD",          
  "Singapore": "SIN",       
  "Frankfurt": "FRA",       
  "Amsterdam": "AMS",      
  "Hong Kong": "HKG",       
  "Istanbul": "IST",        
  "Rome": "FCO",            
  "Moscow": "SVO",          
  "Madrid": "MAD",          
  "Beijing": "PEK",         
  "Shanghai": "PVG",       
  "Rio de Janeiro": "GIG",  
  "Bangkok (BKK)": "BKK",   
  "Mexico City": "MEX",     
  "Cape Town": "CPT",       
  "Toronto": "YYZ",         
  "San Francisco": "SFO",   
  "Seoul": "ICN",           
  "Zurich": "ZRH",          
  "Cairo": "CAI",           
  "Barcelona": "BCN",       
  "Mumbai": "BOM",          
  "Kuala Lumpur": "KUL",    
  "Delhi": "DEL",           
  "Vienna": "VIE",          
  "Warsaw": "WAW",          
  "Jakarta": "CGK",         
  "Dublin": "DUB",          
  "Melbourne": "MEL",       
  "Chicago": "ORD",         
};




export default function Home() {  
  // Fetch flight data
  const [tripType, setTripType] = useState("One way");
  const [passengers, setPassengers] = useState(1);
  const [classType] = useState("Economy");
  const [from, setFrom] = useState("Port Harcourt");
  const [to, setTo] = useState("Paris");
  const [departureDate, setDepartureDate] = useState("");
  const [children, setChildren] = useState(0); // For children
  const [infants, setInfants] = useState(0); // For infants
  const [flights, setFlights] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSearch = async () => {
    const fromEntityId = cityToEntityId[from];
    const toEntityId = cityToEntityId[to];

    if (!fromEntityId || !toEntityId) {
      alert("Invalid city selection. Please choose valid cities.");
      return;
    }

    const options = {
      method: 'POST',
      url: 'https://sky-scanner3.p.rapidapi.com/flights/search-multi-city',
      headers: {
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
        'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        market: 'US',
        locale: 'en-US',
        currency: 'USD',
        adults: passengers,
        children: children,
        infants: infants,
        cabinClass: classType,
        stops: ['direct', '1stop', '2stops'],
        sort: 'cheapest_first',
        flights: [
          {
            fromEntityId,
            toEntityId,
            departDate: departureDate,
          },
        ],
      }
    };
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.request(options);
      const responseData = response.data
      console.log("Full Response:", response);
      setFlights(responseData);
    } catch (error) {
      setError("Error fetching flight data. Please try again later.");
      console.error("Error fetching flight data:", error);
    }finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("Updated Flights:", flights);
  }, [flights]);
  

  return (
    <div>
        {isLoading && <LoadingIcon />}
      <Nav />
      <div className="container">
        <div
          style={{
            backgroundImage: `url(https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg)`,
          }}
          className="min-h-32 max-h-60 lg:min-h-[14rem] lg:max-h-[18rem] w-full bg-center bg-cover"
        />
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center">Flights</h2>

        <FlightSearchBar 
          tripType={tripType}
          setTripType={setTripType}
          passengers={passengers}
          setPassengers={setPassengers}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          children={children}
          setChildren={setChildren}
          infants={infants}
          setInfants={setInfants}
          cityToEntityId={cityToEntityId}
          handleSearch={handleSearch}
        />       

{isLoading ? (
        <p>Loading flights...</p>
      ) : error ? (
        <p>{error}</p>
      ) : flights  ? (
        <Section 
        flights={flights}
        />
      ) : (
        <p>No flights found yet.</p>
      )}

        <Faq />
      </div>
    </div>
  );
}



