import React from 'react';
import './styles.css';

type ProductAdProps = {
  formValues: {
    brand: string,
    description: string,
    picture: file,
    datePurchased: date,
    size: string,
    clothingType: string,
    hasBeenWorn: boolean,
    price: number
  }
}

function ProductAd({ formValues = {} }) {
  return (
    <div id="product-ad" className="product-ad">
      <div className="header">
        <h2>{formValues.brand}</h2>
        <p>{formValues.description}</p>
        <p>{formValues.hasBeenWorn ? 'Used' : 'New'}</p>
      </div>
      <hr />
      <div className="body">
        <div className="body-text">
          <p><b>Date Purchased:</b></p>
          <p>{formValues.datePurchased || 'Not Available'}</p>
          <p><b>Size:</b></p>
          <p>{formValues.size}</p>
          <p><b>Clothing Type:</b></p>
          <p>{formValues.clothingType}</p>
          <p><b>Asking Price:</b></p>
          <p>{formValues.price ? `$${formValues.price}` : 'DM for pricing details'}</p>
        </div>
        <div className="body-pic">
          <img src={formValues.picture} alt="No Picture" />
        </div>
      </div>
    </div>
  );
}

export default ProductAd;
