import React from "react";
import Section1 from "../../components/home/Section1";
import HeaderBody from "../../components/nav/HeaderBody";
import { useSelector } from "react-redux";
import SubHeader from "../../components/nav/SubHeader";
import NewHeader from "../../components/nav/NewHeader";
const HomePage = () => {
  const categories = useSelector((state) => state.products.category);
  return (
    <div>
      <NewHeader />
      <SubHeader />
      <HeaderBody />
      <Section1 categories={categories} />
    </div>
  );
};

export default HomePage;
