import { Laptop } from "../../data/laptop";
import { MenWatch } from "../../data/menwatch";
import { WomenClothes } from "../../data/womenclothes";
import { MenClothes } from "../../data/menclothes";
import { Mobile } from "../../data/Mobile";
import { Categories } from "../../data/Category";
const initialState = {
  products: [
    { name: "Laptop", item: Laptop },
    { name: "Accessories", item: MenWatch },
    { name: "Women Wear", item: WomenClothes },
    { name: "Smartphones", item: Mobile },
    { name: "Men Wear", item: MenClothes },
  ],
  category: Categories,
};
const productsReducer = (state = initialState, actions) => {
  return state;
};

export default productsReducer;
