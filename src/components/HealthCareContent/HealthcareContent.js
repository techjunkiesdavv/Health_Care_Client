import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HealthCareCard from './HealthCareCard';

import './HealthcareContent.scss';

const healthcareData = [
  {
    title: 'Cardiology',
    description: 'Learn about heart health and related conditions.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
  },
  {
    title: 'Dermatology',
    description: 'Explore skin care tips and treatments.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H67Ww3ck2u8oD-zDFlhOgwHaIk%26pid%3DApi%26h%3D160&f=1&ipt=6da7b68ad094638fa6a69d142b71a5baf21f9ba8a44116b6d5f98facf0139a75&ipo=images',
  },
  // Add more healthcare data objects here
];

const HealthcareContent = () => (
  <div className="healthcare-content">
    {healthcareData.map((data, index) => (
      <HealthCareCard
        key={index}
        title={data.title}
        description={data.description}
        imageUrl={data.imageUrl}
        linkTo={`/details/${index}`}
      />
    ))}
  </div>
);

export default HealthcareContent;
