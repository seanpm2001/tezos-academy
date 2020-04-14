import * as PropTypes from "prop-types";
import * as React from "react";

import { DialogCharacter, DialogStyled, DialogText, DialogTextInside } from "./Dialog.style";

type DialogProps = {
  text: string;
  character: string;
};

export const DialogView = ({ text, character }: DialogProps) => {
  const characterStyle = { background: `url("/elements/${character}.png") no-repeat 50% 50% / cover` };
  return (
    <DialogStyled>
      <DialogCharacter>
        <img alt="character-bg" className="character-bg" src="/elements/character-bg.svg" />
        <div className="glitch">
          <div className="glitch__item" style={characterStyle}></div>
          <div className="glitch__item" style={characterStyle}></div>
          <div className="glitch__item" style={characterStyle}></div>
          <div className="glitch__item" style={characterStyle}></div>
          <div className="glitch__item" style={characterStyle}></div>
        </div>
      </DialogCharacter>
      <DialogText>
        <DialogTextInside>{text}</DialogTextInside>
      </DialogText>
    </DialogStyled>
  );
};

DialogView.propTypes = {
  text: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
