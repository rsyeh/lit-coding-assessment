import React from 'react';
import './modal.css';

type ModalProps = {
  showModal: boolean,
  children: any,
  onClose: any,
  handleSubmit: any,
  handleGoBack: any,
  currentModalState: number,
  title: string
};

type ModalState = {
  modalContents: string
};

class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      modalContents: 'first',
      title: 'Modal'
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
        <div className="header">
          <h2>{this.props.title}</h2>
          <button class="close-button" onClick={this.props.onClose}>
            X
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div class="content">{this.props.children}</div>
            <div class="footer">
              <div>
                {this.props.currentModalState !== 1 ? (
                  <button class="close-button" onClick={this.props.handleGoBack}>
                    Back
                  </button>
                ) : null}
              </div>
              <button type="submit">
                {this.props.currentModalState !== 3 ? 'Continue' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
