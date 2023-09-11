import React from 'react';
import { useParams } from 'react-router-dom';
import './HealthcareDetails.scss';

const healthcareData = [
  {
    title: 'Cardiology',
    description: 'Learn about heart health and related conditions.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
    subheadings: [
      { title: 'Subheading 1', description: 'Description for Subheading 1' },
      { title: 'Subheading 2', description: 'Description for Subheading 2' },
    ],
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
    subheadings: [
      { title: 'Subheading A', description: 'Description for Subheading A' },
      { title: 'Subheading B', description: 'Description for Subheading B' },
    ],
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
    subheadings: [
      { title: 'Subheading A', description: 'Description for Subheading A' },
      { title: 'Subheading B', description: 'Description for Subheading B' },
    ],
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
    subheadings: [
      { title: 'Subheading A', description: 'Description for Subheading A' },
      { title: 'Subheading B', description: 'Description for Subheading B' },
    ],
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
    subheadings: [
      { title: 'Subheading A', description: 'Description for Subheading A' },
      { title: 'Subheading B', description: 'Description for Subheading B' },
    ],
  },
  // Add more healthcare data objects here
];

const HealthcareDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const selectedHealthcare = healthcareData[id]; // Get the selected healthcare details

  return (
    <div className="healthcare-details">
    <div>  <h2 className="healthcare-details-title">{selectedHealthcare.title}</h2>
      
      <p className="healthcare-details-description">{selectedHealthcare.description}</p>
      <div className="healthcare-details-subheadings">
        <h3>Subheadings:</h3>
        {selectedHealthcare.subheadings.map((subheading, index) => (
          <div className="subheading" key={index}>
            <strong>{subheading.title}</strong>
            <p>{subheading.description}</p>
          </div>
        ))}
      </div>
      </div>
      <div><img src={selectedHealthcare.imageUrl} alt={selectedHealthcare.title} className="healthcare-details-image" /></div>
    </div>
  );
};

export default HealthcareDetails;
