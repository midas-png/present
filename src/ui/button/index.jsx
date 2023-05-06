import { ButtonComponent } from "./styles";
import { Link } from "react-router-dom";

export const Button = ({ to, children }) => {
    return (
        <Link to={to}>
            <ButtonComponent>{children}</ButtonComponent>
        </Link>
    );
};
