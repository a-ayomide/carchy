import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "../../../assets/images/car-logo.png"



const LogoContainer = styled.div`
    ${tw` flex items-center `}; 
`;

const LogoText = styled.div`
    ${tw` text-xl md:text-2xl font-bold text-gray-500 m-1 `};
`

const Image =  styled.div`
    width: auto;
    img {
        width: auto;
        height: 100%;
    }
    ${tw` h-6 md:h-9 `};
`

export function Logo() {
    return <LogoContainer>
        <Image>
            <img alt='carchy logo' src={CarLogoImg} />
        </Image>
        <LogoText>Carchy.</LogoText>
    </LogoContainer>
}