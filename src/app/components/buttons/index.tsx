import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


interface IButtonProps{
    theme?: "filled" | "outlined";
    text: string;
}

const BaseButton = styled.div`
    ${tw` px-5 py-3 outline-none rounded-md text-white text-xs font-semibold 
    border-transparent border-2 border-solid focus:outline-none 
    transition-all duration-150 ease-in-out m-1
    `};
`;

const FilledButton =  styled(BaseButton)`
    ${tw` bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500 cursor-pointer `};
`;

const OutlinedButton =  styled(BaseButton)`
    ${tw` bg-transparent hover:bg-red-500 border-red-500 text-red-500 hover:text-white hover:border-transparent cursor-pointer`};
`;

export function Button(props: IButtonProps){
    const { theme, text } = props;
    if (theme === "filled")
        return <FilledButton>{text}</FilledButton>
    else 
        return <OutlinedButton>{text}</OutlinedButton>
}