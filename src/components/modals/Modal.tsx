import React from 'react';
import './modal.css';

type ModalProps = {
  showModal: boolean,
  children: any,
  onClose: any,
  handleSubmit: any,
  currentModalState: number
};

type ModalState = {
  modalContents: string
};

class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      modalContents: 'first'
    }
  }

  handleSubmit = (e) => {
    this.props.handleSubmit && this.props.handleSubmit(e);
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Modal </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div class="content">{this.props.children}</div>
            <div class="footer">
              <button class="close-button" onClick={this.props.onClose}>
                X
              </button>
              <button type="submit">
                {this.props.currentModalState === 1 ? 'Continue' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
