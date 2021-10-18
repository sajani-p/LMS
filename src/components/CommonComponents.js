import styled from "styled-components";

export const FluidContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

export const Container = styled.div`
    display: flex;
    flex-diraction: column;
    justify-content: center;
    aign-items: flex-start;
    padding: 1em;
`;

export const ContainerInLine = styled.div`
    flex: 1 1 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    aign-items: flex-start;
    padding: 1em;
    text-align: left;
`;

export const FlexRow = styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1em 5em;
`;

export const Button = styled.button`
    background-color: ${(props) => props.danger ? props.theme.primary.danger : props.theme.primary.main};
    color: ${(props) => props.theme.primary.textColor};
    font-size: ${(props) => props.size ? props.size : 1}em;
    padding: 0.25em 1em;
    border: 0;
    border-radius: 0.5em;
    cursor: pointer;
    height: 1.5em;

    :hover{
        background-color: ${(props) => props.danger ? props.theme.primary.dangerDark : props.theme.primary.dark};
    }
`;