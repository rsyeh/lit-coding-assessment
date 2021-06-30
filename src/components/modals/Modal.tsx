import React from 'react';
import './modal.css';

type ModalProps = {
  showModal: boolean,
  children: any,
  onClose: any,
  handleSubmit: any
};

// type ModalState = {};

class Modal extends React.Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      modalContents: 'first'
    }
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Modal </h2>
        <div className="form-container">
          <form onSubmit={this.props.handleSubmit}>
            <div class="content">{this.props.children}</div>
          </form>
        </div>
        <div class="footer">
          <button class="close-button" onClick={this.props.onClose}>
            X
          </button>
          <button type="submit">
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
