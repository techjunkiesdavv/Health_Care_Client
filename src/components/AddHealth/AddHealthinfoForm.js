import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import './AddHealthInfoForm.scss';

const AddHealthinfoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [subheadings, setSubheadings] = useState([{ subheading: '', subDescription: '' }]);

  const handleAddSubheading = () => {
    setSubheadings([...subheadings, { subheading: '', subDescription: '' }]);
  };

  const handleRemoveSubheading = (index) => {
    const updatedSubheadings = subheadings.filter((_, i) => i !== index);
    setSubheadings(updatedSubheadings);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const healthInfo = {
      title,
      description,
      image,
      subheadings,
    };
    // onAdd(healthInfo);
    setTitle('');
    setDescription('');
    setImage('');
    setSubheadings([{ subheading: '', subDescription: '' }]);
  };

  return (
    <form className="add-health-info-form" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Image:</label>
      <FileBase64 multiple={false} onDone={({ base64 }) => setImage(base64)} />

      <div className="subheadings-section">
        <h3>Subheadings:</h3>
        {subheadings.map((subheading, index) => (
          <div className="subheading" key={index}>
            <input
              type="text"
              placeholder="Subheading"
              value={subheading.subheading}
              onChange={(e) => {
                const updatedSubheadings = [...subheadings];
                updatedSubheadings[index].subheading = e.target.value;
                setSubheadings(updatedSubheadings);
              }}
            />
            <textarea
              placeholder="Subheading Description"
              value={subheading.subDescription}
              onChange={(e) => {
                const updatedSubheadings = [...subheadings];
                updatedSubheadings[index].subDescription = e.target.value;
                setSubheadings(updatedSubheadings);
              }}
            />
            <button type="button" onClick={() => handleRemoveSubheading(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddSubheading}>Add Subheading</button>
      </div>

      <button type="submit">Add Health Info</button>
    </form>
  );
};

export default AddHealthinfoForm;
