import styled, { css } from "styled-components";
import { colors } from "../../../utils/colors";
import { maxPhone } from "../../../utils/media";

const Button = styled.button`
  background: ${(props) => (props.dark ? colors.darkGray : colors.blue)};
  color: ${colors.white};
  font-size: 12px;
  cursor: pointer;
  margin: 0 35px;
  padding: 9px 50px;
  text-decoration: none;
  border-radius: 25px;
  border: none;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background: ${(props) => (props.dark ? colors.blue : colors.darkGray)};
  }
  ${maxPhone(css`
    display: block;
    font-size: 14px;
    padding: 15px 50px;
  `)};
`;

export default Button;
