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
    <div className="modal-contents">
      <label>
        Brand
      </label>
      <div>
        <input
          type="text"
          name="brand"
          onChange={handleChange}
          />
      </div>
      <label>
        Description
      </label>
      <div>
        <textarea
          name="description"
          onChange={handleChange}
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
    </div>
  );
}

export default DetailsModal1;
