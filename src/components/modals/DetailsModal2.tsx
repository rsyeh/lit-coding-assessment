import React from 'react';

// Get today's date to set max limit for date input
const getDate = () => {
  const date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  const today = yyyy + '-' + mm + '-' + dd;
  return today;
}

type DetailsModal2Props = {
  handleChange: any,
  formValues: {
    datePurchased: any,
    size: string,
    clothingType: string,
    hasBeenWorn: boolean,
    price: number
  }
}

function DetailsModal2({ handleChange, formValues }: DetailsModal2Props) {
  // Reference to today's date
  const maxDate = getDate();
  return (
    <div className="modal-contents">
      <label>
        Date Purchased
      </label>
      <div>
        <input
          value={formValues.datePurchased}
          type="date"
          name="datePurchased"
          max={maxDate}
          onChange={handleChange}
          />
      </div>
      <label>
        Size
      </label>
      <div>
        <label>
          <input
            checked={formValues.size === 'XS'}
            type="radio"
            name="size"
            value="XS"
            onChange={handleChange}
            required
            />
          XS
        </label>
        <label>
          <input
            checked={formValues.size === 'S'}
            type="radio"
            name="size"
            value="S"
            onChange={handleChange}
            required
            />
          S
        </label>
        <label>
          <input
            checked={formValues.size === 'M'}
            type="radio"
            name="size"
            value="M"
            onChange={handleChange}
            required
            />
          M
        </label>
        <label>
          <input
            checked={formValues.size === 'L'}
            type="radio"
            name="size"
            value="L"
            onChange={handleChange}
            required
            />
          L
        </label>
        <label>
          <input
            checked={formValues.size === 'XL'}
            type="radio"
            name="size"
            value="XL"
            onChange={handleChange}
            required
            />
          XL
        </label>
      </div>
      <label>Clothing Type</label>
      <div>
        <select value={formValues.clothingType} name="clothingType" onChange={handleChange} required>
          <option value=""></option>
          <option value="shirt">Shirt</option>
          <option value="t-shirt">T-Shirt</option>
          <option value="sweater">Sweater</option>
          <option value="shorts">Shorts</option>
          <option value="pants">Pants</option>
          <option value="jacket">Jacket</option>
          <option value="shoes">Shoes</option>
          <option value="accessory">Accessory</option>
          <option value="other">Other</option>
        </select>
      </div>
      <label>
        <input
          checked={formValues.hasBeenWorn}
          type="checkbox"
          name="hasBeenWorn"
          onChange={handleChange}
          />
        Item has been worn?
      </label>
      <label>
        Asking Price ($)
      </label>
      <div>
        <input
          value={formValues.price || 0}
          type="range"
          name="price"
          min="0"
          max="200"
          onChange={handleChange}
          />
      </div>
      <p>{formValues.price ? `$${formValues.price}` : '$0'}</p>
    </div>
  );
}

export default DetailsModal2;
