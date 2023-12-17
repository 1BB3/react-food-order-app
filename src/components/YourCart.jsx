function YourCart({
  cartItems,
  meals,
  onCloseModal,
  onChangeQtyInCart,
  goToCheckout,
}) {
  const totalPrice = cartItems
    .reduce(
      (acc, qty) =>
        acc + meals.find((meal) => meal.id === qty.item).price * qty.quantity,
      0
    )
    .toFixed(2);
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => {
          const cartMeal = meals.find((meal) => meal.id === item.item);
          return (
            <li key={item.item} className="cart-item">
              {cartMeal.name} = {item.quantity} x ${cartMeal.price}
              <p className="cart-item-actions">
                <button onClick={() => onChangeQtyInCart(item.item, "dec")}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => onChangeQtyInCart(item.item, "inc")}>
                  +
                </button>
              </p>
            </li>
          );
        })}
      </ul>
      <p className="cart-total">${totalPrice}</p>
      <p className="modal-actions">
        <button className="text-button" onClick={onCloseModal}>
          Close
        </button>
        <button className="button" onClick={() => goToCheckout(totalPrice)}>
          Go to Checkout
        </button>
      </p>
    </div>
  );
}

export default YourCart;
