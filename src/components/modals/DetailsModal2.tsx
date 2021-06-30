import React from 'react';

type DetailsModal2Props = {
  handleChange: any,
  formValues: object
}

function DetailsModal2({ handleChange, formValues = {} }: DetailsModal2Props) {
  return (
    <div className="modal-contents">
      <label>
        Date Purchased
      </label>
      <div>
        <input
          type="date"
          name="datePurchased"
          onChange={handleChange}
          />
      </div>
      <label>
        Size
      </label>
      <div>
        <label>
          <input
            type="radio"
            name="size"
            value="XS"
            onChange={handleChange}
            />
          XS
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="S"
            onChange={handleChange}
            />
          S
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="M"
            onChange={handleChange}
            />
          M
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="L"
            onChange={handleChange}
            />
          L
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="XL"
            onChange={handleChange}
            />
          XL
        </label>
      </div>
      <label>
        Clothing Type:
        <div>
          <select name="clothingType" onChange={handleChange}>
            <option value="shirt">Shirt</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="sweater">Sweater</option>
            <option value="shorts">Shorts</option>
            <option value="pants">Pants</option>
            <option value="jacket">Jacket</option>
            <option value="shoes">Shoes</option>
            <option value="accessory">Accessory</option>
          </select>
        </div>
      </label>
      <label>
        <input
          type="checkbox"
          name="hasBeenWorn"
          onChange={handleChange}
          />
        Item has been worn?
      </label>
      <label>
        Asking Price
      </label>
      <div>
        <input
          type="range"
          name="price"
          min="0"
          max="200"
          onChange={handleChange}
          />
      </div>
      <p>{formValues.price && `$${formValues.price}`}</p>
    </div>
  );
}

export default DetailsModal2;
