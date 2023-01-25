import {
  flightSchedulesInterface,
  FlightType,
} from "../../../interfaces/interface";
import { useEffect } from "react";
import styled from "styled-components";
import Ticket from "../Ticket/index";
interface frInt {
  flightSchedules: flightSchedulesInterface;
}

const FlightResult: React.FC<frInt> = ({ flightSchedules }) => {
  const FlightResultStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  useEffect(() => {
    console.log(flightSchedules);
  }, []);

  let customDeparture: FlightType;
  let customArrival: FlightType;

  const doSomething = (array: FlightType[]) => {
    customDeparture = array[0];
    customArrival = array[array.length - 1];
  };

  return (
    <FlightResultStyled>
      {flightSchedules.data.ScheduleResource.Schedule.map((x) =>
        (x.Flight as FlightType[]).length > 1 ? (
          <>
            {doSomething(x.Flight as FlightType[])}
            <Ticket
              airportCodeDep={customDeparture.Departure.AirportCode}
              dateTimeDep={
                customDeparture.Departure.ScheduledTimeLocal.DateTime
              }
              airportCodeArr={customArrival.Arrival.AirportCode}
              dateTimeArr={customArrival.Arrival.ScheduledTimeLocal.DateTime}
              duration={x.TotalJourney.Duration}
              stops={(x.Flight as FlightType[]).length}
              price={Math.floor(Math.floor(Math.random() * 500))}
            />
          </>
        ) : (
          <>
            <Ticket
              airportCodeDep={(x.Flight as FlightType).Departure.AirportCode}
              dateTimeDep={
                (x.Flight as FlightType).Departure.ScheduledTimeLocal.DateTime
              }
              airportCodeArr={(x.Flight as FlightType).Arrival.AirportCode}
              dateTimeArr={
                (x.Flight as FlightType).Arrival.ScheduledTimeLocal.DateTime
              }
              duration={x.TotalJourney.Duration}
              stops={0}
              price={Math.floor(Math.floor(Math.random() * 500))}
            />
          </>
        )
      )}
    </FlightResultStyled>
  );
};
export default FlightResult;
