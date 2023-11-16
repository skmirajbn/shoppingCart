export const isLoggedin = () => {
  return !!localStorage.getItem("login");
};

export const addToCartLogic = async (product, toast, setCartCount) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (isLoggedin()) {
    try {
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      await toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
        pending: "Adding to the Cart",
        success: "Added to cart",
        error: "Cart Add Failed",
      });

      if (!addToCartResponse.success) {
        const updatedCart = cart.filter((item) => item !== product);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.error("Cart Add Failed");
      } else {
        setCartCount(updatedCart.length); // Set the added cart products count
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    setCartCount(cart.length + 1); // Set the added cart products count
  }
};
