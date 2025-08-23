export const initialState = {
  cart: [],
  totalPrice: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      let updatedCart;
      if (existing) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case "INCREASE_QTY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }
    case "CLEAR_CART": {
      return { ...state, cart: [], totalPrice: 0 };
    }

    default:
      return state;
  }
}
