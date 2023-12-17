function Checkout({ totalPrice, onCloseModal, onToSuccess }) {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    onToSuccess();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: ${totalPrice}</p>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="control">
          <label htmlFor="email">E-Mail Address</label>
          <input type="email" name="email" required />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input type="text" name="street" required />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" name="postal-code" required />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input type="text" name="city" required />
          </div>
        </div>
        <p className="modal-actions">
          <button className="text-button" onClick={onCloseModal}>
            Close
          </button>
          <button className="button" type="submit">
            Submit Order
          </button>
        </p>
      </form>
    </>
  );
}

export default Checkout;
