import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MealItem from "./components/MealItem";
import Modal from "./components/Modal";
import YourCart from "./components/YourCart";
import Checkout from "./components/Checkout";
import Success from "./components/Success";

function App() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [nextAction, setNextAction] = useState("cart");
  const modal = useRef();
  const totalPrice = useRef;

  useEffect(() => {
    async function http() {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();
      setMeals(resData);
    }

    http();
  }, []);

  function addItemToCart(id) {
    if (!cart.find((item) => item.item === id)) {
      setCart((prevCart) => [...prevCart, { item: id, quantity: 1 }]);
    }
  }

  function changeQtyInCart(id, mode) {
    setCart((prevCart) => {
      const index = prevCart.findIndex((element) => element.item === id);
      const copyCart = [...prevCart];
      mode === "inc" ? copyCart[index].quantity++ : copyCart[index].quantity--;
      if (copyCart[index].quantity < 1) copyCart[index].quantity = 1;
      return copyCart;
    });
  }

  function showCart() {
    modal.current.open();
  }

  function closeModal() {
    modal.current.close();
  }

  function goToCheckout(tprice) {
    setNextAction("checkout");
    totalPrice.current = tprice;
  }

  function toSuccess() {
    setNextAction("success");
  }

  let modalContent =
    nextAction === "checkout" ? (
      <Checkout
        totalPrice={totalPrice.current}
        onCloseModal={closeModal}
        onToSuccess={toSuccess}
      />
    ) : nextAction === "cart" ? (
      <YourCart
        cartItems={cart}
        meals={meals}
        onCloseModal={closeModal}
        onChangeQtyInCart={changeQtyInCart}
        goToCheckout={goToCheckout}
      />
    ) : (
      <Success onOkay={closeModal} />
    );

  return (
    <>
      <Header cart={cart} onShowCart={showCart} />
      <Modal ref={modal}>{modalContent}</Modal>
      <main id="meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} onAddToCart={addItemToCart} />
        ))}
      </main>
    </>
  );
}

export default App;
