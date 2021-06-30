import React from 'react';
import './styles.css';
import Modal from '../components/modals/Modal';
import DetailsModal1 from '../components/modals/DetailsModal1';
import DetailsModal2 from '../components/modals/DetailsModal2';

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
  currentModalState: number
};

class ProductPage extends React.Component<ProductPageProps, ProductPageState> {
  constructor(props: ProductPageProps) {
    super(props);

    this.state = {
      isModalOpen: false,
      currentModalState: 1
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderModalChildren = this.renderModalChildren.bind(this);

    this.fileInput = React.createRef();
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: URL.createObjectURL(e.target.files[0])
        }
      });
    } else {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [e.target.name]: e.target.value
        }
      });
    }
  }

  handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert('A name was submitted: ' + this.state.formValues.brand);
    e.preventDefault();
  }

  renderModalChildren = () => {
    return (
      <DetailsModal2
        handleChange={this.handleChange}
        fileInput={this.fileInput}
        formValues={this.state.formValues} />
    );
  }

  render() {
    return (
      <div className="Products-page">
        <div className="App-header">
          <h1>Products Page</h1>
        </div>
        <div className="Products-content">
          <h2>Products List</h2>
          <div className="Products-add">
            <button onClick={this.showModal}>
              Add Product
            </button>
          </div>
        </div>
        <Modal
          showModal={this.state.isModalOpen}
          onClose={this.hideModal}
          handleSubmit={this.handleSubmit}
          >
          {this.renderModalChildren()}
        </Modal>
      </div>
    );
  }
}

export default ProductPage;
