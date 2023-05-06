import styled from "styled-components";

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 30px 0;
    background: #f8aa97;

    h2 {
        max-width: 90%;
    }
`;

export const ReasonWrapper = styled.span`
    display: flex;
    justify-content: center;
    background: #e78a7c;
    max-width: 90%;
    border-radius: 25px;
    padding: 20px 30px;
    letter-spacing: 1px;
    font-size: 26px;
    color: #fff;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
`;
