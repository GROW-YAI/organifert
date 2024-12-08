import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbContainer = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
`;

const BreadcrumbLink = styled(Link)`
  color: #b80000;
  text-decoration: none;

  &:not(:last-child)::after {
    content: " > ";
    color: #333;
  }

  &:last-child {
    color: #555;
    pointer-events: none;
  }
`;

const Breadcrumb = () => {
  const location = useLocation();

  // Define a mapping of routes to human-readable names
  const routeNames = {
    "/": "Home",
    "/crop": "Crop Nutrition",
    "/crop/:id": "Crop Details",
  };

  // Generate breadcrumb segments from the current path
  const pathnames = location.pathname.split("/").filter((x) => x); // Removes empty strings

  return (
    <BreadcrumbContainer>
      <BreadcrumbLink to="/">Home</BreadcrumbLink>
      {pathnames.map((value, index) => {
        // Build the path for the current breadcrumb link
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        // Display the correct name from the route mapping
        const routeName = routeNames[to] || value;

        return (
          <BreadcrumbLink key={to} to={to}>
            {routeName}
          </BreadcrumbLink>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
