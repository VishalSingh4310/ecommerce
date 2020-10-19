import React from "react";
import Section1 from "../../components/home/Section1";
import HeaderBody from "../../components/nav/HeaderBody";
import { useSelector } from "react-redux";
const HomePage = () => {
  const categories = useSelector((state) => state.products.category);
  return (
    <div>
      <HeaderBody />
      <Section1 categories={categories} />
    </div>
  );
};

export default HomePage;
