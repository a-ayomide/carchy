import {
  faCalendarAlt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../buttons";
import { Marginer } from "../marginer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 30px;
`;
const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw` flex items-center justify-center mx-auto py-1 px-2 md:py-2 md:px-9 rounded-md bg-white `}
`;

const ItemContainer = styled.div`
  ${tw` flex relative `}
`;

const Icon = styled.span`
  ${tw` text-red-500 fill-current text-xs md:text-base mr-1 md:mr-3 `}
`;

const ItemText = styled.span`
  ${tw` text-gray-600 text-xs md:text-sm cursor-pointer`}
`;

const LineSeparator = styled.span`
  width: 2px;
  ${tw`bg-gray-300 mx-2 md:mx-5`}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  top: 2em;
  left: -2em;
`;

export function BookCard() {
  const [startDate, setstartDate] = useState(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
  };

  return (
    <CardWrapper>
      <CardContainer>
        <ItemContainer>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Icon>
          <ItemText onClick={toggleStartDateCalendar}>Pick-Up Date</ItemText>
          {isStartCalendarOpen && (
            <DateCalendar value={startDate} onChange={setstartDate} />
          )}
          <LineSeparator />
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Icon>
          <ItemText>Return Date</ItemText>
          <LineSeparator />
          <Icon>
            <FontAwesomeIcon icon={faLocationArrow} />
          </Icon>
          <ItemText>Choose Your Location</ItemText>
        </ItemContainer>
        <Marginer direction="horizontal" margin="2rem" />
        <Button theme="filled" text="Book your Ride" />
      </CardContainer>
    </CardWrapper>
  );
}
