import React from 'react';
import './styles.css';

type ProductAdProps = {
  formValues: {
    brand: string,
    description: string,
    picture: any,
    datePurchased: any,
    size: string,
    clothingType: string,
    hasBeenWorn: boolean,
    price: number
  }
}

function ProductAd({ formValues }: ProductAdProps) {
  const { brand, description, hasBeenWorn, datePurchased, size, clothingType, price, picture } = formValues;
  return (
    <div id="product-ad" className="product-ad">
      <div className="header">
        <h2>{brand}</h2>
        <p>{description}</p>
        <p>{hasBeenWorn ? 'Used' : 'New'}</p>
      </div>
      <hr />
      <div className="body">
        <div className="body-text">
          <div className="body-text-row">
            <div className="body-text-component">
              <p><b>Date Purchased:</b></p>
              <p>{datePurchased || 'Not Available'}</p>
            </div>
            <div className="body-text-component">
              <p><b>Size:</b></p>
              <p>{size}</p>
            </div>
          </div>
          <div className="body-text-row">
            <div className="body-text-component">
              <p><b>Clothing Type:</b></p>
              <p>{clothingType}</p>
            </div>
            <div className="body-text-component">
              <p><b>Asking Price:</b></p>
              <p>{price ? `$${price}` : 'DM for pricing details'}</p>
            </div>
          </div>
        </div>
        <div className="body-pic">
          {picture ? (
            <img src={picture} alt="product for show" />
          ) : (
            <h3>No Picture</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductAd;
