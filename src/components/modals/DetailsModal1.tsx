import React from 'react';

type DetailsModal1Props = {
  handleChange: any,
  fileInput: any,
  formValues: {
    brand: string,
    description: string,
    picture: file
  }
}

function DetailsModal1({ handleChange, fileInput, formValues = {} }: DetailsModal1Props) {
  return (
    <div className="modal-contents align-items-center">
      <label>
        Brand
      </label>
      <div>
        <input
          value={formValues.brand}
          type="text"
          name="brand"
          onChange={handleChange}
          required
          />
      </div>
      <label>
        Description
      </label>
      <div>
        <textarea
          value={formValues.description}
          name="description"
          onChange={handleChange}
          required
          />
      </div>
      <label>
        Picture
      </label>
      <div>
        <input
          type="file"
          name="picture"
          ref={fileInput}
          onChange={handleChange}
          />
      </div>
      {formValues.picture && (
        <div className="picture-container">
          <img
            src={formValues.picture}
            alt="Product Picture"
            />
        </div>
      )}
    </div>
  );
}

export default DetailsModal1;
