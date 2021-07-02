import React from 'react';
import './styles.css';

type ModalProps = {
  showModal: boolean,
  children: any,
  onClose: any,
  handleSubmit: any,
  handleGoBack: any,
  currentModalState: number,
  title: string
};

function Modal ({
  showModal,
  children,
  onClose,
  handleSubmit,
  handleGoBack,
  currentModalState,
  title
}: ModalProps) {
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <div className="header">
        <h2>{title}</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="content">{children}</div>
          <div className="footer">
            <div>
              {/* If Modal is on step 1, do not show back button */}
              {currentModalState !== 1 ? (
                <button className="close-button" onClick={handleGoBack}>
                  Back
                </button>
              ) : null}
            </div>
            <button type="submit">
              {currentModalState !== 3 ? 'Continue' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
