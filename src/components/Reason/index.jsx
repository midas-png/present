import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ComponentWrapper, ReasonWrapper, ButtonsWrapper } from "./styles";
import { REASONS } from "data";
import { Title, Button } from "ui";

export const Reason = () => {
    const [reason, setReason] = useState();
    const { id } = useParams();

    useEffect(() => {
        const current = REASONS[Number(id) - 1];
        setReason(current);
    }, [id]);

    return (
        <ComponentWrapper>
            {Number(id) === 1 && <Title>Здесь описана лишь малая часть причин почему ты такой прекрасный человек</Title>}
            <ReasonWrapper>{reason}</ReasonWrapper>
            <ButtonsWrapper>
                {Number(id) !== 1 && (
                    <Button to={`/present/reason/${Number(id) - 1}`}>
                        Предыдущая
                    </Button>
                )}
                {Number(id) !== REASONS.length ? (
                    <Button to={`/present/reason/${Number(id) + 1}`}>
                        Следующая
                    </Button>
                ) : (
                    <Button>Люблю тебя!</Button>
                )}
            </ButtonsWrapper>
        </ComponentWrapper>
    );
};
