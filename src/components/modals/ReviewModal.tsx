import React from 'react';

type ReviewModalProps = {
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

function ReviewModal({ formValues = {} }) {
  return (
    <div className="modal-contents">
      <label>
        <div className="review-label">
          Brand
          <input
            value={formValues.brand}
            type="text"
            name="brand"
            disabled
            />
        </div>
      </label>
      <label>
        <div className="review-label">
          Description
          <textarea
            value={formValues.description}
            name="description"
            disabled
            />
          </div>
      </label>
      <label>
        <div className="review-label">
          Picture
          {formValues.picture ? (
            <div className="review-picture-container">
              <img
                src={formValues.picture}
                alt="Product Picture"
                />
            </div>
          ): <p>No picture</p>}
          </div>
      </label>
      <label>
        <div className="review-label">
          Date Purchased
          <input
            value={formValues.datePurchased}
            type="date"
            name="datePurchased"
            disabled
            />
          </div>
      </label>
      <label>
        <div className="review-label">
          Size
          <input
            value={formValues.size}
            type="text"
            name="size"
            disabled
            />
          </div>
      </label>
      <label>
        <div className="review-label">
          Clothing Type
          <input
            value={formValues.clothingType}
            type="text"
            name="clothingType"
            disabled
            />
          </div>
      </label>
      <label>
        <div className="review-label">
          Item has been worn?
          <input
            checked={formValues.hasBeenWorn}
            type="checkbox"
            name="hasBeenWorn"
            disabled
            />
          </div>
      </label>
      <label>
        <div className="review-label">
          Asking Price ($)
          <input
            value={formValues.price}
            type="text"
            name="hasBeenWorn"
            disabled
            />
          </div>
      </label>
    </div>
  );
}

export default ReviewModal;
