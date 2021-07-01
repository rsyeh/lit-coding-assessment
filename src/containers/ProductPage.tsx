import React from 'react';
import './styles.css';
import Modal from '../components/modals/Modal';
import DetailsModal1 from '../components/modals/DetailsModal1';
import DetailsModal2 from '../components/modals/DetailsModal2';
import ReviewModal from '../components/modals/ReviewModal';

const modalTitles = {
  1: 'Product Details 1',
  2: 'Product Details 2',
  3: 'Review Product Details'
}

type ProductPageProps = {};

type ProductPageState = {
  isModalOpen: boolean,
  formValues: {
    brand: string,
    description: string,
    picture: file,
    datePurchased: date,
    size: string,
    clothingType: string,
    hasBeenWorn: boolean,
    price: number
  },
  currentModalState: number,
  isProductCreated: boolean
};

class ProductPage extends React.Component<ProductPageProps, ProductPageState> {
  constructor(props: ProductPageProps) {
    super(props);

    this.state = {
      isModalOpen: false,
      currentModalState: 1,
      isProductCreated: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderModalChildren = this.renderModalChildren.bind(this);

    this.fileInput = React.createRef();
  }

  showModal = () => {
    this.setState({ isProductCreated: false });
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: URL.createObjectURL(e.target.files[0])
        }
      });
    } else if (e.target.type === 'checkbox') {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: e.target.checked
        }
      })
    } else {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: e.target.value
        }
      });
    }
  }

  handleGoBack = e => {
    if (this.state.currentModalState === 2) {
      this.setState({ currentModalState: 1 });
      e.preventDefault();
    } else {
      this.setState({ currentModalState: 2 });
      e.preventDefault();
    }
  }

  handleSubmit = e => {
    if (this.state.currentModalState === 1) {
      this.setState({ currentModalState: 2 });
      e.preventDefault();
    } else if (this.state.currentModalState === 2) {
      this.setState({ currentModalState: 3 });
      e.preventDefault();
    } else {
      this.setState({ isModalOpen: false });
      this.setState({ currentModalState: 1 });
      this.setState({ isProductCreated: true });
      alert('Form was submitted!');
      e.preventDefault();
    }
  }

  renderModalChildren = () => {
    if (this.state.currentModalState === 1) {
      return (
        <DetailsModal1
          handleChange={this.handleChange}
          fileInput={this.fileInput}
          formValues={this.state.formValues} />
      );
    } else if (this.state.currentModalState === 2) {
      return (
        <DetailsModal2
          handleChange={this.handleChange}
          formValues={this.state.formValues} />
      )
    } else {
      return (
        <ReviewModal formValues={this.state.formValues} />
      );
    }
  }

  render() {
    const modalTitle = modalTitles[this.state.currentModalState];
    return (
      <div className="Products-page">
        <div className="App-header">
          <h1>Product Page</h1>
        </div>
        <div className="Products-content">
          <h2>Product Ad</h2>
          <div className="Products-add">
            <button onClick={this.showModal}>
              Generate Product Ad
            </button>
          </div>
        </div>
        <Modal
          showModal={this.state.isModalOpen}
          onClose={this.hideModal}
          handleSubmit={this.handleSubmit}
          handleGoBack={this.handleGoBack}
          currentModalState={this.state.currentModalState}
          title={modalTitle}
          >
          {this.renderModalChildren()}
        </Modal>
      </div>
    );
  }
}

export default ProductPage;
