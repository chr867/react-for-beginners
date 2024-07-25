import Proptypes from "prop-types";
import styled from "./Button.module.css";

function Button({text}){
  return (
    <button className={styled.btn}>{text}</button>
  );
}

Button.propTypes = {
  text: Proptypes.string.isRequired,
};

export default Button;