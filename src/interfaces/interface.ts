export interface contextInt {
    cities: dataInt | undefined;
    setCities: React.Dispatch<React.SetStateAction<dataInt>>;
    departureDate: string;
    setDepartureDate: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    flightSchedules: flightSchedulesInterface;
    setFlightSchedules: React.Dispatch<
      React.SetStateAction<flightSchedulesInterface>
    >;
  }
  
  export interface flightSchedulesInterface {
    data: {
      ScheduleResource: {
        Schedule: [
          {
            Flight: FlightType[] | FlightType;
            TotalJourney: {
              Duration: string
            }
          }
        ];
      };
    };
  }
  
  export interface FlightType {
    Departure: {
      AirportCode: string;
      ScheduledTimeLocal: {
        DateTime: string;
      };
    };
    Arrival: {
      AirportCode: string;
      ScheduledTimeLocal: {
        DateTime: string;
      };
    };
  }
  
  export interface dataInt {
    firstCity: string;
    secondCity: string;
  }

