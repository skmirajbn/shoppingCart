export const isLoggedin = () => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("login");
  }
  return false;
};

export const addToCartLogic = async (product, toast, productMutate) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (isLoggedin()) {
    try {
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      productMutate();

      let addToCartResponse = new Promise((resolve, reject) => setTimeout(() => reject(), 3000));
      await toast.promise(addToCartResponse, {
        pending: "Adding to the Cart",
        success: "Added to cart",
        error: "Cart Add Failed",
      });
    } catch (error) {
      console.error(error);
      // const updatedCart = cart.filter((item) => item !== product);
      //removed last product and make updated cart
      const updatedCart = cart.slice(0, -1);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.error("Cart Add Failed");
    }
  } else {
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    productMutate();
  }
};
