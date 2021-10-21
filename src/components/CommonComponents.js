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
    background-color: ${(props) => {
        switch (props.color){
            case "danger":
                return props.theme.primary.danger;
            case "secondary":
                return props.theme.secondary.light;
            default:
                return props.theme.primary.main;
        }
    }};
    color: ${(props) => props.theme.primary.textColor};
    font-size: ${(props) => props.size ? props.size : 1}em;
    padding: 0.25em 1em;
    margin-right: 1em;
    margin-left: 1em;
    border: 0;
    border-radius: 0.5em;
    cursor: pointer;
    height: 1.5em;

    :hover{
        background-color: ${(props) => {
            switch (props.color){
                case "danger":
                    return props.theme.primary.dangerDark;
                case "secondary":
                    return props.theme.secondary.dark;
                default:
                    return props.theme.primary.dark;
            }
        }};
    }
`;

export const Select = styled.select`
    height: 35px;
    background: white;
    color: gray;
    padding: 0.5em;
    font-size: 0.8em;
    border: 2px solid ${(props) => props.theme.secondary.light};
    border-radius: 0.5em;
    margin-left: 1em;
    option {
        color: black;
        background: white;
        display: flex;
        white-space: 20px;
        padding: 0px 2px 1px;
    }
`;