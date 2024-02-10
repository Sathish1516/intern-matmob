

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const email = localStorage.getItem("email");
const uid = localStorage.getItem("uid");
const cartKey = `cart_${email}_${uid}`;
console.log(cartKey)
const storedCart = JSON.parse(localStorage.getItem(cartKey));
console.log(storedCart)
const handleCart = (state = storedCart || cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        const updatedState = state.map((x) =>
          x.id === product.id
            ? { ...x, qty: x.qty + 1, totalPrice: (x.qty + 1) * x.price }
            : x
        );
        localStorage.setItem(cartKey, JSON.stringify(updatedState));
        return updatedState;
      } else {
        const updatedCart = [
          ...state,
          {
            ...product,
            qty: 1,
            totalPrice: product.price,
          },
        ];
        localStorage.setItem(cartKey, JSON.stringify(updatedCart));
        return updatedCart;
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        const updatedState = state.filter((x) => x.id !== exist1.id);
        localStorage.setItem(cartKey, JSON.stringify(updatedState));
        return updatedState;
      } else {
        const updatedState = state.map((x) =>
          x.id === product.id
            ? { ...x, qty: x.qty - 1, totalPrice: (x.qty - 1) * x.price }
            : x
        );
        localStorage.setItem(cartKey, JSON.stringify(updatedState));
        return updatedState;
      }

    default:
      return state;
  }
};

export default handleCart;
