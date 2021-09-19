import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BlobImg from "../../../assets/images/blob.svg"
import PorcheCarImg from "../../../assets/images/porche.png"
import { SCREENS } from "../../components/responsive";

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw` w-full max-w-screen-lg flex justify-between px-3 lg:px-12 `};
`;

const LeftContainer = styled.div`
    ${tw` w-1/2 flex flex-col `}
`;

const RightContainer = styled.div`
    ${tw` w-1/2 flex flex-col relative mt-20`}
`;

const Slogan = styled.h1`
    ${tw` font-bold text-2xl xl:text-6xl sm:text-3xl md:text-5xl lg:font-black md:font-extrabold text-black mb-4 sm:leading-snug md:leading-normal lg:leading-relaxed`}
`;

const Description = styled.p`
    ${tw` text-xs lg:text-sm xl:text-lg sm:max-h-full overflow-x-hidden max-h-24 text-gray-500 `}
`;

const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img {
        width: 100%
        height: auto
        max-height: max-content;
    }

    @media (min-width:  ${SCREENS.sm}) {
        
    }
`;

const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    position: absolute;
    right: -6em;
    top: -5em;

    img {
        width: auto;
        height: 100%
        max-width: fit-content;
    }
`;

export function TopSection(){
    return ( <TopSectionContainer>
        <LeftContainer>
            <Slogan>
                Rent The Best Qualty Cars With Us
            </Slogan>
            <Description>
                Always choose the best car from our local stores or order it remotely at the 
                best price for you and get the best quality cars for as long as you like
            </Description>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={BlobImg} alt="blob" />
            </BlobContainer>
            <StandaloneCar>
                <img src={PorcheCarImg} alt="" />
            </StandaloneCar>
        </RightContainer>
    </TopSectionContainer>

    )
}