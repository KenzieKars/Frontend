import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
    background-color: var(--color-grey8);
`

export const Container = styled.div`
    width: 380px;
    padding: 44px 48px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: var(--color-grey10);
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    gap:32px;
    border-radius: 4px;

    h1 {
        font-family: Lexend;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 350px;
        gap: 20px;

        span {
            font-size: 14px;
            align-self: end;
            color: var(--color-grey2);
            cursor: pointer;
        }
        p {
            color: var(--color-grey2);
            font-size: 14px;
            align-self: center;
        }
        button {
            width: 370px;
        }
    }
`

export const StyledLink = styled(Link)`
    list-style: none;
    height: 48px;
    padding: 0 1.5rem;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    color: #495057;
    border-radius: 4px;
    background:#ffffff;
    border: 1px solid #ADB5BD;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: #212529;
        border: 1px solid #212529;
        color: #ffffff;
    }
`