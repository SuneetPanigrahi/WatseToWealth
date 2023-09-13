import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import TechnologyDeployments from "../pages/TechnologyDeployments";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/technologyDep" element={<TechnologyDeployments />}></Route>
      <Route path="/policies" element={<About />}></Route>
    </Routes>
  );
};

export default AllRoutes;
