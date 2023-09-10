import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import styles from './TestPrediction.module.scss'

const obj = [
  {
    title: "Heart Stroke Detection",
    name: "heart",
    pt1: "Predicts heart stroke risk",
    pt2: "Analyzes age, blood pressure, cholesterol.",
    pt3: "Empowering heart health decisions.",
    img: "https://media.istockphoto.com/id/1307328834/vector/fat-man-having-heart-disease-heart-attack-concept-vector-flat-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=MItLJRBvRVaFc_3D2yJMSRYylXXMJkI0nWMva1xCb_E=",
    accuracy: "80%"
  },
  {
    title: "Breast Cancer Detection",
    name: "breastCancer",
    pt1: "Detects breast cancer early.",
    pt2: "Analyzes mammograms for abnormalities.",
    pt3: "Early diagnosis saves lives.",
    img: "https://i.ibb.co/hmX9jr6/breast-cancer-detection-1200x720-removebg-preview.png", // Replace with the actual image URL
    accuracy: "80%"
  },
  {
    title: "Diabetes Detection",
    name: "diabetes",
    pt1: "Predicts diabetes risk.",
    pt2: "Analyzes blood sugar, genetics.",
    pt3: "Proactive health management.",
    img: "https://img.freepik.com/premium-vector/measuring-sugar-blood-with-glucometer-testing-blood-glucose-hypoglycemia-diabetes-diagnosis-patient-with-test-equipment-syringe-vial-insulin-pills-world-diabetic-awareness-day_458444-521.jpg?w=2000", // Replace with the actual image URL
    accuracy: "80%"
  },
  {
    title: "Hair Loss After Chemo Detection",
    name: "hair",
    pt1: "Predicts post-chemo hair loss.",
    pt2: "Considers treatment history, genes.",
    pt3: "Confidence after cancer treatment.",
    img: "https://www.healthcareontime.com/test/images/blood-test-for-hair-loss-male.jpg", // Replace with the actual image URL
    accuracy: "80%"
  }
];


const TestPrediction = () => {
  const history = useNavigate(); // Create a history object for navigation

  const handleClick = (item) => {
    switch (item.name) {
      case "hair":
        history("/predict_hair"); // Use history for navigation
        break;
      case "heart":
        history("/predict_heart"); // Replace with the actual routes
        break;
      case "breastCancer":
        history("/predict_breastCancer"); // Replace with the actual routes
        break;
      case "diabetes":
        history("/predict_diabetes"); // Replace with the actual routes
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.test_prediction}  id="prediction">
      <h2 className={styles.prediction_title}>AI Prediction</h2>
      <div className={styles.prediction_cards}>
        {obj.map((item, index) => (
          <div className={styles.prediction_card} key={index}>
            <img src={item.img} alt="img" className="prediction-image" />
            <h3 className={styles.prediction_card_title}>{item.title}</h3>
            <ul style={{ textAlign: 'justify' }}>
              <li type="dash">{item.pt1}</li>
              <li>{item.pt2}</li>
              <li>{item.pt3}</li>
            </ul>
            <h6 className={styles.prediction_accuracy}>⭐Accuracy: {item.accuracy}</h6>
            <button className={styles.button} onClick={() => handleClick(item)}>Do Prediction</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TestPrediction;
