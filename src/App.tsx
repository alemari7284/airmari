import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import {
  contextInt,
  flightSchedulesInterface,
  FlightType,
  dataInt,
} from "./interfaces/interface";

export const context = createContext<contextInt>({
  cities: { firstCity: "", secondCity: "" },
  setCities: () => null,
  departureDate: "",
  setDepartureDate: () => null,
  loading: false,
  setLoading: () => null,
  flightSchedules: {
    data: {
      ScheduleResource: {
        Schedule: [
          {
            Flight: [],
            TotalJourney: {
              Duration: "",
            },
          },
        ],
      },
    },
  },
  setFlightSchedules: () => null,
});

const App: React.FC = (): JSX.Element => {
  const [cities, setCities] = useState<dataInt>({
    firstCity: "",
    secondCity: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [departureDate, setDepartureDate] = useState<string>("");
  const [flightSchedules, setFlightSchedules] =
    useState<flightSchedulesInterface>({
      data: {
        ScheduleResource: {
          Schedule: [
            {
              Flight: [],
              TotalJourney: {
                Duration: "",
              },
            },
          ],
        },
      },
    });

  return (
    <div>
      <context.Provider
        value={{
          cities,
          setCities,
          departureDate,
          setDepartureDate,
          loading,
          setLoading,
          flightSchedules,
          setFlightSchedules,
        }}
      >
        <Navbar />
        <Container />
      </context.Provider>
    </div>
  );
};

export default App;
