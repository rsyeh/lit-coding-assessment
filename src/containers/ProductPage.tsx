import React from 'react';
import './styles.css';
import Modal from '../components/modals/Modal';

type ProductPageProps = {};

type ProductPageState = {};

class ProductPage extends React.Component<ProductPageProps, ProductPageState> {
  constructor(props: ProductPageProps) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
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
        <Modal showModal={this.state.isModalOpen} onClose={this.hideModal} />
      </div>
    );
  }
}

export default ProductPage;
