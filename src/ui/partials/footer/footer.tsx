import { Container } from "react-bootstrap";
import { FooterContainer } from "../../styles/Footer/Footer.style";
 
export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <hr />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>
            Todos Direitos Reservados a <a href="https://github.com/Hasty-DEV/HastyTodoList">HastyDEV</a>, 2024.
          </p>
        </div>
      </Container>
    </FooterContainer>
  );
};