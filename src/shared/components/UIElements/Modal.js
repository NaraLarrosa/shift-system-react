import React from 'react';
import { Backdrop as MuiBackdrop, Modal as MuiModal, Fade } from '@mui/material';

import './Modal.css';

const Modal = (props) => {
  return (
    <React.Fragment>
      <MuiBackdrop
        open={props.show}
        onClick={props.onCancel}
        className="backdrop"
      />
      <MuiModal
        open={props.show}
        onClose={props.onCancel}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal"
        BackdropComponent={MuiBackdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.show}>
          <div className={`modal__content ${props.className}`}>
            <header className={`modal__header ${props.headerClass}`}>
              <h2 id="modal-title">{props.header}</h2>
            </header>
            <form
              onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}
            >
              <div className={`modal__content ${props.contentClass}`}>
                {props.children}
              </div>
              <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
              </footer>
            </form>
          </div>
        </Fade>
      </MuiModal>
    </React.Fragment>
  );
};

export default Modal;