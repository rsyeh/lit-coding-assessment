import React from 'react';
import './styles.css';
import Modal from '../components/modals/Modal';
import DetailsModal1 from '../components/modals/DetailsModal1';
import DetailsModal2 from '../components/modals/DetailsModal2';
import ReviewModal from '../components/modals/ReviewModal';
import ProductAd from '../components/ProductAd';

const generateModalTitle = (current: number) => {
  if (current === 1) {
    return 'Product Details 1';
  } else if (current === 2) {
    return 'Product Details 2';
  } else if (current === 3) {
    return 'Review Product  Details';
  } else {
    return 'Modal'
  }
}

type ProductPageProps = {};

type ProductPageState = {
  isModalOpen: boolean,
  formValues: {
    brand: string,
    description: string,
    picture: any,
    datePurchased: any,
    size: string,
    clothingType: string,
    hasBeenWorn: boolean,
    price: number
  },
  currentModalState: number,
  isProductCreated: boolean
};

class ProductPage extends React.Component<ProductPageProps, ProductPageState> {
  private fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: ProductPageProps) {
    super(props);

    this.state = {
      isModalOpen: false,
      currentModalState: 1,
      formValues: {
        brand: '',
        description: '',
        picture: null,
        datePurchased: '',
        size: '',
        clothingType: '',
        hasBeenWorn: false,
        price: 0
      },
      isProductCreated: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderModalChildren = this.renderModalChildren.bind(this);
    this.fileInput = React.createRef();
  }

  // Sets product  as not created and modal as open, when open modal CTA is clicked
  showModal = () => {
    this.setState({ isProductCreated: false });
    this.setState({ isModalOpen: true });
  }

  // Closes modal if user clicks the close icon
  hideModal = () => {
    this.setState({ isModalOpen: false });
  }

  // Handles change for input elements
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') {
      // For the picture upload, grab e.target.files[0] instead of e.target.value
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: URL.createObjectURL(e.target.files && e.target.files[0])
        }
      });
    } else if (e.target.type === 'checkbox') {
      // For checkbox set boolean value of checked
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: e.target.checked
        }
      })
    } else {
      // For everything else just set value to name property of formValues
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: e.target.value
        }
      });
    }
  }

  // Returns modal to previous state, causing rerendering of modal children
  handleGoBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.currentModalState === 2) {
      this.setState({ currentModalState: 1 });
      e.preventDefault();
    } else {
      this.setState({ currentModalState: 2 });
      e.preventDefault();
    }
  }

  // Only submit form if on review modal, otherwise proceed in modal flow
  handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentModalState } = this.state;
    if (currentModalState === 1) {
      this.setState({ currentModalState: 2 });
      e.preventDefault();
    } else if (currentModalState === 2) {
      this.setState({ currentModalState: 3 });
      e.preventDefault();
    } else {
      this.setState({ isModalOpen: false });
      this.setState({ currentModalState: 1 });
      this.setState({ isProductCreated: true });
      alert('Product ad has been created!');
      e.preventDefault();
    }
  }

  // Renders correct child component for modal
  renderModalChildren = () => {
    const { currentModalState, formValues } = this.state;
    if (currentModalState === 1) {
      return (
        <DetailsModal1
          handleChange={this.handleChange}
          fileInput={this.fileInput}
          formValues={formValues} />
      );
    } else if (currentModalState === 2) {
      return (
        <DetailsModal2
          handleChange={this.handleChange}
          formValues={formValues} />
      )
    } else {
      return (
        <ReviewModal formValues={formValues} />
      );
    }
  }

  render() {
    const { currentModalState, isProductCreated, formValues, isModalOpen } = this.state;
    const modalTitle = generateModalTitle(currentModalState);
    return (
      <div className="Products-page">
        <div className="App-header">
          <h1>Product Page</h1>
        </div>
        <div className="Products-content">
          <h2>Product Ad</h2>
          {isProductCreated ? (
            <ProductAd formValues={formValues} />
          ) : null}
          <div className="Products-add">
            <button onClick={this.showModal}>
              {isProductCreated ? 'Edit Ad' : 'Generate Ad'}
            </button>
          </div>
        </div>
        <Modal
          showModal={isModalOpen}
          onClose={this.hideModal}
          handleSubmit={this.handleSubmit}
          handleGoBack={this.handleGoBack}
          currentModalState={currentModalState}
          title={modalTitle}
          >
          {this.renderModalChildren()}
        </Modal>
      </div>
    );
  }
}

export default ProductPage;
