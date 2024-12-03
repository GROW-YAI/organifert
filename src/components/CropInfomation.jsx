import { Link } from "react-router-dom";
import styled from "styled-components";
import Breadcrumb from "../components/Breadcrumb"; // Import the dynamic Breadcrumb component
import Cabbage from "../assets/cabbage.png";
import Cocoa from "../assets/cocoa.png";
import Maize from "../assets/maize.png";
import Onion from "../assets/onion.png";
import Rice from "../assets/rice.png";
import Tomato from "../assets/tomato.png";

const crops = [
  { id: 1, name: "Cabbage", image: Cabbage },
  { id: 2, name: "Cocoa", image: Cocoa },
  { id: 3, name: "Maize", image: Maize },
  { id: 4, name: "Onion", image: Onion },
  { id: 5, name: "Rice", image: Rice },
  { id: 6, name: "Tomato", image: Tomato },
  { id: 4, name: "Onion", image: Onion },
  { id: 5, name: "Rice", image: Rice },
  { id: 6, name: "Tomato", image: Tomato },
];

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #ffffff;
`;

const MainContent = styled.main`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  color: #b80000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #555;
  font-size: 14px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const CropGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 3fr));
  gap: 16px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (min-width: 992px) {
    gap: 24px;
  }
`;

const CropCard = styled(Link)`
  text-align: center;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  position: relative; /* Required for the gradient overlay */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const CropImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 8px;
  border: 3px solid #f0f0f0;

  @media (min-width: 576px) {
    width: 120px;
    height: 120px;
    margin-bottom: 12px;
  }
`;

const CropName = styled.h3`
  font-size: 14px;
  color: #b80000;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// Responsive Component
const CropInformation = ({ showBreadCrumb = true }) => {
  return (
    <Container>
      <MainContent>
        {/* Dynamic Breadcrumb */}
        {showBreadCrumb && (
          <div className="bg-gray-100 p-1 shadow-sm  mt-8">
            <Breadcrumb />
          </div>
        )}

        {/* Title and Description */}
        <Title>Choose your crop</Title>
        <Description>
          Crop nutrition decisions hugely influence the yield, quality, and
          health of crops. Start by choosing your crop.
        </Description>

        {/* Crop Cards Section */}
        <CropGrid>
          {crops.map((crop) => (
            <CropCard to={`/crop/${crop.id}`} key={crop.id}>
              <CropImage src={crop.image} alt={crop.name} />
              <CropName>{crop.name}</CropName>
            </CropCard>
          ))}
        </CropGrid>
      </MainContent>
    </Container>
  );
};

export default CropInformation;
