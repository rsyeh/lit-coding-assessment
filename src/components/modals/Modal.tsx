import React from 'react';
import './modal.css';

type ModalProps = {
  showModal: boolean,
  children: any,
  onClose: any
};

// type ModalState = {};

class Modal extends React.Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      modalContents: 'first'
    }
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Modal </h2>
        <div class="content">{this.props.children}</div>
        <div class="footer">
          <button class="close-button" onClick={this.onClose}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
