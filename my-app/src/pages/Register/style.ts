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

    p {
        font-weight: 500;
        font-size: 14px;   
    }

    form{
        p{
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 40px;

        }
        
        
    }

    .descricao {
        height: 50px;
    }

    input {
        width: 350px;
        height: 35px;
        margin-bottom: 20px;
    }

    button {
        width: 370px;
    }

    .conta {
        border-bottom: 10px;
    }

    .input-option356 {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-top: 10px;
    }

    .input-option356:after {
        content: "";
        clear: both;
    }

    .radio {
        border: 1px solid var(--color-grey4);
        box-sizing: border-box;
        float: left;
        height: 48px;
        position: relative;
        width: 152px;
        border-radius: 4px;
    }

    .radio + .radio {
        margin-left: 25px;
    }

    .radio label {
        background: #fff no-repeat center center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        white-space: nowrap;
    }

    .radio label span {
        z-index: 1;
    }
    .radio label input[type=radio] {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .radio label input[type=radio]:checked {
        background-color: var(--color-brand1);
    }
    .radio label input[type=radio]:checked + span{
        color: #ffffff;
    }    
`
