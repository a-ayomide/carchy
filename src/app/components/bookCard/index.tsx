import { faCalendarAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../buttons";

const CardContainer = styled.div`
    ${tw` flex items-center justify-center mx-auto py-1 px-2 md:py-2 md:px-6 shadow-lg rounded-md bg-white `}
`;

const ItemContainer = styled.div`
    ${tw` flex `}
`;

const Icon = styled.span`
    ${tw` text-red-500 fill-current text-xs md:text-base mr-1 md:mr-3 `}
`;

const ItemText = styled.span`
    ${tw` text-gray-600 text-xs md:text-sm`}
`;

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`bg-gray-300 mx-2 md:mx-5`}

`;
export function BookCard(){
    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <ItemText>Pick-Up Date</ItemText>
            <LineSeparator/>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <ItemText>Return Date</ItemText>
            <LineSeparator/>
            <Icon>
                <FontAwesomeIcon icon={faLocationArrow} />
            </Icon>
            <ItemText>Choose Your Location</ItemText>
            <Button theme="filled" text="Book your Ride"/>
        </ItemContainer>
    </CardContainer>
}