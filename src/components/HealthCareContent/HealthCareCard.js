import React from 'react';
import { Link } from 'react-router-dom';
import './HealthcareCard.scss';

const HealthcareCard = ({ title, description, imageUrl, linkTo }) => (
  <div className="healthcare-card">
    <img src={imageUrl} alt={title} className="healthcare-card-image" />
    <h3 className="healthcare-card-title">{title}</h3>
    <p className="healthcare-card-description">{description}</p>
    <Link to={linkTo} className="healthcare-card-link">
      Learn More
    </Link>
  </div>
);

export default HealthcareCard;
