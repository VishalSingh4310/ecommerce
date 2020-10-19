import { ADD_ITEM, DECREMENT, INCREMENT, REMOVE } from "../actions/cart";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const Item = action.item;
      const Quantity = action.quantity;
      const total = Item.price * Quantity;
      const ItemIndex_ADD = state.items.findIndex((itemData) => {
        return itemData.data.title == Item.title;
      });

      if (ItemIndex_ADD < 0) {
        return {
          ...state,
          items: state.items.concat({
            data: Item,
            quantity: Quantity,
            Total: total,
          }),
          totalAmount: state.totalAmount + parseInt(total),
        };
      }

    case INCREMENT:
      const Item_Quantity_I = action.quantity + 1;
      const Cart_Item_I = action.item;
      const Item_Total_I = Cart_Item_I.price * Item_Quantity_I;
      const Item_Name_I = Cart_Item_I.title;
      const ItemIndex_I = state.items.findIndex((itemData) => {
        return itemData.data.title == Item_Name_I;
      });

      return {
        ...state,
        items: [
          ...state.items.slice(0, ItemIndex_I),
          {
            ...state.items[ItemIndex_I],
            quantity: Item_Quantity_I,
            Total: Item_Total_I,
          },
          ...state.items.slice(ItemIndex_I + 1),
        ],
        totalAmount: state.totalAmount + parseInt(Cart_Item_I.price),
      };
    case DECREMENT:
      const Item_Quantity_D = action.quantity - 1;
      const Cart_Item_D = action.item;
      const Item_Total_D = Cart_Item_D.price * Item_Quantity_D;
      const Item_Name_D = Cart_Item_D.title;
      const ItemIndex_D = state.items.findIndex((itemData) => {
        return itemData.data.title == Item_Name_D;
      });
      if (Item_Quantity_D >= 1) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, ItemIndex_D),
            {
              ...state.items[ItemIndex_D],
              quantity: Item_Quantity_D,
              Total: Item_Total_D,
            },
            ...state.items.slice(ItemIndex_D + 1),
          ],
          totalAmount: state.totalAmount - parseInt(Cart_Item_D.price),
        };
      } else {
        return state;
      }
    case REMOVE:
      const removeItem = action.item;
      let newArray = [...state.items];
      newArray = newArray.filter(
        (product) => product.data.title !== removeItem.title
      );
      return {
        ...state,
        items: newArray,
        totalAmount: state.totalAmount - parseInt(action.total),
      };
    default:
      return state;
  }
};

export default cartReducer;
