import styled from "styled-components";

export const Header = styled.header`
    height: 5vh;
`;

export const Main = styled.main`
    min-height: 95vh;
    padding: ${(props) => props.theme.spacing(1)};
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-item: center;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 1em;
    border-top: 1px solid #ccc;
`;