import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Modal = ({
  header,
  content,
  buttonPrimaryLabel,
  buttonPrimaryAction,
  buttonSecondaryLabel,
  buttonSecondaryAction,
  onDismiss,
}) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{header}</div>
        <div className="content">{content}</div>
        <div className="actions">
          <Button
            label={buttonPrimaryLabel}
            onClick={buttonPrimaryAction}
            className="primary"
          />
          <Button
            label={buttonSecondaryLabel}
            onClick={buttonSecondaryAction}
            className="secondary"
          />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
