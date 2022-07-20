import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw` flex list-none sm:gap-x-10`}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`text-xs md:text-base text-gray-500 font-medium mr-1 flex cursor-pointer transition duration-300 ease-in-out hover:text-gray-900`};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
            text-white text-xl mb-3 focus:text-white
        `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#"> Home </a>
          </NavItem>
          <NavItem menu>
            <a href="#"> Cars </a>
          </NavItem>
          <NavItem menu>
            <a href="#"> Services </a>
          </NavItem>
          <NavItem menu>
            <a href="#"> Pricing </a>
          </NavItem>
          <NavItem menu>
            <a href="#"> Contact Us </a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#"> Home </a>
      </NavItem>
      <NavItem>
        <a href="#"> Cars </a>
      </NavItem>
      <NavItem>
        <a href="#"> Services </a>
      </NavItem>
      <NavItem>
        <a href="#"> Pricing </a>
      </NavItem>
      <NavItem>
        <a href="#"> Contact Us </a>
      </NavItem>
    </ListContainer>
  );
}
